import express from 'express';
import cors from 'cors'
import morgan from'morgan'

const app =express();


/**Middleware */
app.use(express.json());
app.use(cors())
app.use(morgan('tiny')); // Set up request logging using the 'tiny' format
app.disable('x-powered-by');// Disable the 'X-Powered-By' header for security reasons

const port=5000;

/** HTTP Get Request */
app.get('/',(req,res)=>{
    res.status(201).json('Home GET Request')
})


/**Start Server */
app.listen(port,()=>{
    console.log(`Server connected to  http://localhost:${port}`)
})

