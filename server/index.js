import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server runs on ${PORT} port`)
    else
        console.log("Error occurred:", error);
}); 
