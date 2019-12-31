module.exports = generateJoinCode = () => {
    const length = 16;
    const symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let str = "";
    for (let i = 0; i < length; i++) {
        str += symbols[Math.floor(Math.random()*symbols.length)];
    }
    return str;
}