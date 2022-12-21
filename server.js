// This is going to be our server page. Backend ONLY!
const express = require('express');

const mainRouter = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(mainRouter);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});
