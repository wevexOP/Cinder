// This is going to be our server page. Backend ONLY!
const express = require('express');

const { engine } = require('express-handlebars');

const mainRouter = require('./controllers');

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(mainRouter);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});
