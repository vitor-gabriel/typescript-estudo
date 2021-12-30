import { Request, Response } from "express";
import EmailService from "../services/email"

const users = [
    { Name:'Vitor Gabriel', email:'vitor.gabriel@vyas.com.br'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'Kesia Barros', email: 'kesia-barros@gmail.com' },
            message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
        });

        return res.send();
    }
};