import express from 'express';
import mail from './mail.js';

const hostname = '127.0.0.1';
const port = 80;
const app = express();

// Starting with release 4.16.0, a new express.json() middleware is available.
app.use(express.json());
//Parse x-www-form-urlencoded request into req.body
app.use(express.urlencoded({ extended: true }));  

app.get('/', (req, res) => {
    res.send("Hello World!, I am server created by expresss");
});

app.post('/nodemailer', (req, res) => {
    const params = JSON.parse(req.body.params);

    mail(params.email, params.name, params.message)
        .then(response => res.send(response))
        .catch(error => res.json(error));
});

app.listen(port, () => {
    console.log(`Server runninng at http://${hostname}:${port}`);
});
