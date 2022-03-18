
--@block
SELECT * FROM users WHERE username = "man";


--@block
INSERT INTO tokens (userid,token,expiry)
VALUES (1, 'asdfed', strftime('%s','now','+2 day'));

SELECT * FROM tokens;


--@block
SELECT * FROM tokens
INNER JOIN users 
ON tokens.userid = users.userid
WHERE tokenid = 1;


--@block
SELECT strftime('%s')


--@block
DELETE FROM tokens;


--@block
UPDATE tokens SET
    expiry = '2022-03-10 00:00:00'
WHERE
    tokenid = 2


--@block
UPDATE users SET
    password = 'gerateass',
    requirePwdChange = 0
WHERE
    username = 'username';


--@block
INSERT INTO users (username, password, requirePwdChange)
values("username", "password", 1);


--@block
SELECT * FROM users;


--@block
DROP TABLE tokens;
DROP TABLE users;

--@block
DELETE FROM tokens