const express = require('express');
const port = 3000;
const router = require('./routers/routing')
const fileUpload = require('express-fileupload')
const dbConnect = require('./dbconnect/dbConnect')
dbConnect()

const App = express();
App.use(express.json());
App.use('/upload', router)

App.use(fileUpload({
    useTempFiles: true,
}))

App.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
