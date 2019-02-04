import { Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //this.router.get('/', (req, res) => res.send('Hello'));
        this.router.get('/', indexController.index);
        this.router.post('/login');
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;