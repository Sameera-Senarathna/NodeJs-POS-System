import express = require('express');
import mainDispatcher from "./dispatcher/mainDispatcher";

let app = express();

app.use(mainDispatcher);

app.listen(3000, function () {
    console.log("Server Is Listing at Port : 3000");
});