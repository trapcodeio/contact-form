// Import Nodemailer
const nodemailer = require("nodemailer");

// fetch nodemailer config else null
const nodemailerConfig = $.$config.get('nodemailer', null);

// If null we throw no config error
if (nodemailerConfig === null) {
    $.logErrorAndExit("{nodemailer} config is required.");
}

// Create Nodemailer transporter
const transporter = nodemailer.createTransport(nodemailerConfig);


class Mailer {
    static async send(data) {
        // send mail with defined transport object
        return await transporter.sendMail(data);
    }
}

module.exports = Mailer;
