"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 3000;
const app = (0, app_1.createApp)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
