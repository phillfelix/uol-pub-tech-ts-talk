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
const express_1 = require("express");
const advertisers_1 = __importDefault(require("./services/advertisers"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('okay');
});
router.get('/lista', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const advertisers = yield advertisers_1.default.getAdvertisers();
        res.send(advertisers);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}));
exports.default = router;
//# sourceMappingURL=router.js.map