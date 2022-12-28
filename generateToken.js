import jwt from "jsonwebtoken";
let file = jsonfile.readFileSync('data.json');

for (let value of file) {
const generateTokens = async (user) => {
    try {
        const payload = { _id: user._id, roles: user.roles };
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m" }
        );
        const userToken = await UserToken.findOne({ userId: user._id });
        if (userToken) await userToken.remove();
        await new UserToken({ userId: user._id, token: accessToken }).save();
        return Promise.resolve({ accessToken });
    } catch (err) {
        return Promise.reject(err);
    }
};
}
export default generateTokens;