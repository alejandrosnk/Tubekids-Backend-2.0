const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "luisalejandrosln@gmail.com",
        pass: "byvdvmxkcltrtedl"
    }
});

const sendEmail = async (to, subject, text) => {
    try {
        // Verificar datos obligatorios
        if (!to || !subject || !text) {
            throw new Error("Faltan datos obligatorios.");
        }

        const mailOptions = {
            from: "luisalejandrosln@gmail.com",
            to,
            subject,
            text
        };

        // Llamar a la función de envío de correo electrónico
        await transporter.sendMail(mailOptions);
        
        console.log("Correo electrónico enviado correctamente.");
        return "Correo electrónico enviado correctamente.";
    } catch (error) {
        console.error("Error al enviar el correo electrónico:", error.message);
        throw error;
    }
};

module.exports = sendEmail;
