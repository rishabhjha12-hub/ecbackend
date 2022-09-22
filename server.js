const app=require('./app');
const dotenv=require('dotenv')

const connectDatabse = require('./config/database');
//config
dotenv.config({path:"backend/config/config.env"})
connectDatabse()
app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });