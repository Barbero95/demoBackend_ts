import { Request, Response } from 'express';

import db from '../database';

class UsersController {

    public async list (req: Request, res: Response) {
        const users = await db.query('SELECT * FROM users');
        res.json(users);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const id = req.params.id;
        const users = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text: 'The user do not exist'});
    }

    public async create (req: Request, res: Response): Promise<any> {
        console.log(req.body);
        const list = await db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
        for (let u of list){
            if(u.email === req.body.email){
                return res.status(404).json({text: 'The user exist'});
            }
        }
        await db.query('INSERT INTO users set ?', [req.body]);
        res.json({message: 'Create user'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const id = req.params.id;
        await db.query('UPDATE users set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Update user: ' + id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await db.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({message: 'Delete user: ' + id});
    }
    
}

export const usersController = new UsersController(); 