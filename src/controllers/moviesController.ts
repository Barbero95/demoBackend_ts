import { Request, Response } from 'express';

import db from '../database';

class MoviesController {

    public index (req: Request, res: Response) {
        db.query('DESCRIBE users');
        res.json('users');
    }
    
}

export const moviesController = new MoviesController(); 