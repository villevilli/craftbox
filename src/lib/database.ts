import Database from 'better-sqlite3'
import bcrypt from 'bcrypt';

const saltRounds = 11;
const db = new Database('./src/database.db');

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

const userQuery = db.prepare('SELECT * FROM users WHERE username = ?');
const insertUser = db.prepare(`
    INSERT INTO users (username,password,requirePwdChange) VALUES (?, ?, ?)
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

export async function addUser(username:string, password:string, requirePwdChange = 1) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    insertUser.run(username, hashedPassword, requirePwdChange)
}

export default db
