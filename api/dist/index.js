"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = 3000;
const server = app.listen(port);
app.use(router_1.default);
console.log(`Aplicação rodando na porta ${port}`);
//# sourceMappingURL=index.js.map