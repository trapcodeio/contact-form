/**
 * Your App Configuration
 */
module.exports = {
    /**
     * Set Application Environment.
     */
    env: "development",

    /**
     * Set Name of Application.
     */
    name: "Smtp Contact Form",


    /**
     * Path settings..
     */
    paths: {

        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,


        /**
         * Xpresser has special string paths
         * and base:// simply means xpresser should
         * use base path.
         *
         * See file: xpresser/src/config.ts
         * For all default Config options.
         */
        backend: 'base://backend',

        /**
         * By default if not set xjs will use base://backend/routes.js
         * Since this is not a framework app..
         */
        routesFile: 'base://routes.js'
    },

    /**
     * By default xjs sets this for you.
     */
    server: {
        domain: 'localhost',
        port: 3000,

        /**
         * By default port is excluded if its [80, 443]
         * You can also decide to exclude port in url
         * by setting this to false
         */
        includePortInUrl: true,
    },

    session: {
        startOnBoot: true
    },

    /**
     * Nodemailer config
     * see https://nodemailer.com
     */
    nodemailer: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "3f042c0931fcdd",
            pass: "f53e39e8319fec"
        }
    }
};
