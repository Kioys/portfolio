// pages/api/contact.js
import sgMail from '@sendgrid/mail';
import rateLimit from '../../utils/rate-limit';
import xss from 'xss';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const contactHandler = async (req, res) => {
    try {
        // Await the resolution of the rate limit check
        await rateLimit(req, res);

        if (!res.headersSent) {

            const { name, email, subject, message } = req.body;

            const xssOptions = {
                whiteList: {}, // No tags allowed
                stripIgnoreTag: true, // Remove all non-whitelisted tags
                stripIgnoreTagBody: ['script'], // Remove the contents of <script> tags
            };

            //Sanitize attempts to xss attack
            const sanitizedName = xss(name, xssOptions);
            const sanitizedEmail = xss(email, xssOptions);
            const sanitizedSubject = xss(subject, xssOptions);
            const sanitizedMessage = xss(message, xssOptions);

            const content = {
                to: process.env.EMAIL_USER,
                from: process.env.EMAIL_USER,
                reply_to: sanitizedEmail,
                subject: sanitizedSubject,
                text: sanitizedMessage,
                html: `<div> <p>From: ${sanitizedName} </p> <p>Email: ${sanitizedEmail} </p> <p>Message: ${sanitizedMessage} </p> </div>`,
            };

            await sgMail.send(content);
            res.status(200).send('Message sent successfully.');
        }
    } catch (error) {
        // Error handling for both rate limit and email sending errors
        if (!res.headersSent) {
            console.error('Error in contactHandler:', error);
            res.status(500).send('Server error');
        }
    }
};

export default contactHandler;
