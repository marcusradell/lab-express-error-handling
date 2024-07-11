import { createApp } from "./app";

const port = 3000;
const app = createApp();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
