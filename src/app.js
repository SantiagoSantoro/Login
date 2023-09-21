import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';

import { viewsRouter } from './routes/views.js';

const __filename = new URL(import.meta.url).pathname;
const __dirname = dirname(__filename);

const app = express();
const connection = mongoose.connect('TU URL DE MONGO AQUÍ',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(session({
    store: MongoStore.create({
        mongoUrl: '',
        ttl: 3600
    }),
    secret: "CoderSecret",
    resave: false,
    saveUninitialized: false
}))

const server = app.listen(8080, ()=> {
    console.log('Server ON');
})