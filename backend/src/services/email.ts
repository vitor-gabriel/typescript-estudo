interface IMailTO {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachments?: string[];
}

interface IMessageDTO {
    to: IMailTO;
    message: IMailMessage;
}
class EmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Email enviado para: ${to.email}, ${message.subject}`);
    }
}

export default EmailService;