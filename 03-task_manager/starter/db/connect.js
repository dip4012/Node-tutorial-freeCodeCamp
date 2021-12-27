const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://dip4012:Dexarcher4012@nodeexpressprojects.w8nav.mongodb.net/03-Task_Manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to DB...`))
  .catch((err) => console.log(err));
