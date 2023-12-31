"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bootstrap_1 = require("./bootstrap");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT, () => console.log(`Server started, port: ${PORT}`));
}
start();
(0, bootstrap_1.default)();
//# sourceMappingURL=main.js.map