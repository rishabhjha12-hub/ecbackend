const mongoose = require("mongoose");



// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
      
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
