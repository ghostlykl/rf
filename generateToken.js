/*import jwt from "jsonwebtoken";

const
function generateAccessToken(user) {
    return 
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
    }
    // refreshTokens
    let refreshTokens = []
    function generateRefreshToken(user) {
    const refreshToken = 
    jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
    refreshTokens.push(refreshToken)
    return refreshToken
    }