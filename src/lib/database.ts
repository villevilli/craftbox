import Database from 'better-sqlite3'

const db = new Database('./src/database.db')

const schema = `
    CREATE TABLE IF NOT EXISTS users(
        userid INTEGER PRIMARY KEY ASC,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS username_index ON users(username);

    CREATE TABLE IF NOT EXISTS tokens(
        tokenid INTEGER PRIMARY KEY ASC,
        userid INTEGER NOT NULL,
        token TEXT NOT NULL,
        expiry INTEGER NOT NULL,
        FOREIGN KEY(userid) REFERENCES users(userid)
    );
`;

db.exec(schema)

export default db
