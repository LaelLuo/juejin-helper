const env = require("./env");
const { execSync } = require("child_process");

async function cmd({ subject, text, html }) {
    const message = `${subject}\n${text || html}`
    const command = `${env.CMD} ${Buffer.from(message, 'utf8').toString('base64')}`;
    execSync(command)
}

module.exports = cmd;