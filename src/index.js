let promotionsComponent = require('./legacy/components/promotions');

const express = require('express');
const app = express();
const port = 3000;

promotionsComponent.route(app);

app.listen(port, () => console.log(
`listening on port ${port}!
You can POST localhost:3000/promotions/submit/42
in order to see the result.

That is the only endpoint and 42 is the only valid promotion id.

Remember to read the README.md in the root folder.
`
));
