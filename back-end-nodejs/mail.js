import nodemailer from 'nodemailer'

export default function mail(email, name, message){
    let transporter = nodemailer.createTransport({
        host: "yours_host.com",
        port: 465, // true for 465, false for other ports
        secure: true,
        auth: {
            user: "your@email.com",
            pass: "your_password",
        },
    });
    
    //send email with defined transporter object
    let info = {
        from: 'sender@address', // sender address
        to: "receivers@address", // list of receivers separated by ,
        subject: `Contato via diogogarcia.com.br, enviado por ${name}`, // Subject line
        //text: `Contato via diogogarcia.com.br, Nome: ${name} E-mail: ${email} Mensagem: ${message}`, // plain text body
        html: `<b>Contato via diogogarcia.com.br,</b> <br><br>Nome: ${name} <br>E-mail: ${email}<br> Mensagem: ${message}`, // html body
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(info)
            .then(response => {
                transporter.close();
                return resolve(response);
            })
            .catch(error => {
                transporter.close();
                return reject(error);
            });
    });
}