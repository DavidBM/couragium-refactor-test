let promotionsComponent = require('legacy/components/promotions');

const express = require('express');
const app = express();
const port = 3000;

promotionsComponent.route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
