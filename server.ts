import express, {Express} from 'express';
import customerRoutes from "./routes/customer-routes";

const app:Express = express();

app.use(express.json());

app.use('/customer',customerRoutes)

app.listen(3000, (err)=>{
    console.log("Server started on port 3000");
});

app.use('/', (req,res) =>{
    res.status(402).send("Not Found !");
})