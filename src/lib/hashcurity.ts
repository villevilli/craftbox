import { createHash, scryptSync, randomBytes, timingSafeEqual } from "crypto";


export function hashSaltPassword(password){
    let hashedPassword = hash(password)

    const salt = randomBytes(16).toString('hex');
    const saltedPassword = scryptSync(hashedPassword, salt, 64).toString('hex');

    return(`${salt}:${saltedPassword}`)
}

export function unsaltPassword(password){
    const [salt, key] = password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer)
}


export function hash(input){
    return createHash('sha512').update(input).digest('hex');
}