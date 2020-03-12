"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const PORT = 3000;
const server = http_1.default.createServer(app_1.default);
exports.server = server;
server.listen(PORT, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=server.js.map