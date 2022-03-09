
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