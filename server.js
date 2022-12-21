// This is going to be our server page. Backend ONLY!
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});
