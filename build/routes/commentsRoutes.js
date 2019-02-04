"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CommentsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Comment by x'));
    }
}
const commentRoutes = new CommentsRoutes();
exports.default = commentRoutes.router;
