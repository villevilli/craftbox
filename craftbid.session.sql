
--@block
SELECT * FROM users WHERE username = "man";


--@block
INSERT INTO tokens (userid,token,expiry)
VALUES (1, 'asdfed', datetime('now','+2 day'));

SELECT * FROM tokens;


--@block
DELETE FROM tokens;