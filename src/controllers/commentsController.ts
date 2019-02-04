import { Request, Response } from 'express';

import db from '../database';

class CommentsController {

    public index (req: Request, res: Response) {
        db.query('DESCRIBE users');
        res.json('users');
    }
    
}

export const commentsController = new CommentsController(); 