import express from 'express';

const app = express();






const port: string | number = process.env.PORT || 3020

app.listen(port, ()=>console.log(`server started on port ${port}`))


