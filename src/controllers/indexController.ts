import { Request, Response } from 'express';

import db from '../database';

class IndexController {

    public index (req: Request, res: Response) {
        db.query('DESCRIBE users');
        res.json('users');
    }
    public async login (req: Request, res: Response): Promise<any> {
        const list = await db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
        for (let u of list){
            if(u.email === req.body.email && u.password === req.body.password){
                return res.status(200).json(u);
            }
        }
        res.status(404).json({message: 'The user do not exist'});
    }
    
}

export const indexController = new IndexController(); 