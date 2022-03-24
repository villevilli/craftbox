import Database from 'better-sqlite3'
import bcrypt from 'bcrypt';

const saltRounds = 11;
const db = new Database('./src/database.db');
import { DateTime } from "luxon";

const schema = `
    CREATE TABLE IF NOT EXISTS users(
        userid INTEGER PRIMARY KEY ASC,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        requirePwdChange INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS username_index ON users(username);

    CREATE TABLE IF NOT EXISTS tokens(
        tokenid INTEGER PRIMARY KEY ASC,
        userid INTEGER NOT NULL,
        token TEXT NOT NULL,
        expiry INTEGER NOT NULL,
        FOREIGN KEY(userid) REFERENCES users(userid)
    );

    CREATE INDEX IF NOT EXISTS token_index ON tokens(token);
`;

db.exec(schema);

const usersLenght = db.prepare(`SELECT count(*) as length FROM users`)

export const tokenQuery = db.prepare(`
    SELECT * FROM tokens
    INNER JOIN users 
    ON tokens.userid = users.userid
    WHERE token = ?;
`)
const userQuery = db.prepare('SELECT * FROM users WHERE username = ?');
const insertUser = db.prepare(`
    INSERT INTO users (username,password,requirePwdChange) VALUES (?, ?, ?)
`)
const updateUserQuery = db.prepare(`
    UPDATE users SET
        password = @password,
        requirePwdChange = @requirePwdChange
    WHERE
        username = @username;
`)

if ( usersLenght.get().length <= 0){
    addUser("admin", "admin", 1);
}

export async function getUserData(username){
    console.log(username)

    let user = await userQuery.get(username);

    console.log(user)

    return(user)
    
}

export function checkAuth(token:string, forWhat:string){
    let userData = tokenQuery.get(token)


    let expiryDate = DateTime.fromSQL(userData.expiry)

    if (expiryDate > DateTime.now()) {
        return true;
    }else{
        return false;
    }
}

export async function updateUser(username:string, password:string,requirePwdChange = 0) {
    const hashedPassword = await bcrypt.hashSync(password, saltRounds);

    updateUserQuery.run({
        username: username,
        password: hashedPassword,
        requirePwdChange:  requirePwdChange
    });
}

export async function addUser(username:string, password:string, requirePwdChange = 1) {
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    insertUser.run(username, hashedPassword, requirePwdChange)
}

export default db
