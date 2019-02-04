"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        database_1.default.query('DESCRIBE users');
        res.json('users');
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.default.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
            for (let u of list) {
                if (u.email === req.body.email && u.password === req.body.password) {
                    return res.status(200).json(u);
                }
            }
            res.status(404).json({ message: 'The user do not exist' });
        });
    }
}
exports.indexController = new IndexController();
