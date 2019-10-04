const os = require('os');
const Mailer = require('../lib/Mailer');
const Chance = require("chance");
const chance = new Chance();

/**
 * ContactController
 * @class
 * @extends $.controller
 */
class ContactController extends $.controller {

    /**
     * middleware - Set Middleware
     * @returns {Object}
     */
    static middleware() {
        return {}
    }

    /**
     * Contact Index
     * @param {XpresserHttp.Engine} x
     */
    index(x) {
        let random = {};

        /**
         * If we are in development environment we enable random
         */
        if ($.config.env === 'development') {
            random = {
                name: chance.name(),
                email: chance.email(),
                message: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            `.trim()
            };
        }

        return x.view('index', {random});
    }

    /**
     * Submit form action.
     * @param {XpresserHttp.Engine} x
     * @returns {*}
     */
    async submit(x) {
        const {email, name, message} = x.body().all();

        // Try sending mail
        try {
            await Mailer.send({
                from: 'no-reply@myapp.com',
                subject: `Message from ${name}`,
                to: 'support@myapp.com',
                text: `
                    From Email: ${email} ${os.EOL} Message: ${message}
                `.trim(),
            });

            // Add Success message to request
            x.with('success', 'Message sent successfully');

        } catch (e) {
            // Log Error
            $.logError(e);

            // Add Error message to request
            x.with('error', 'Error sending message!');

        }

        return x.redirectToRoute('contact.index')
    }

}


module.exports = ContactController;
