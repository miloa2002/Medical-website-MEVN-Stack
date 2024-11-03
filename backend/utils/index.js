import jwt from "jsonwebtoken";

export const generateJWT = (id) => {
    const token = jwt.sign({id}, process.env.PRIVATE_KEY, {
        expiresIn: '2h'
    });

    return token;
}