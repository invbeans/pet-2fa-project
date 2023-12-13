const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/main.routes');

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};
app.use(cors(corsOptions));
app.use("/", mainRouter);

app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server runs on ${PORT} port`);
    else
        console.log("Error occurred:", error);
}); 
