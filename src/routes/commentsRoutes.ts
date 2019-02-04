import { Router } from 'express';

class CommentsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Comment by x'));
    }
}

const commentRoutes = new CommentsRoutes();
export default commentRoutes.router;