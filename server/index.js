import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//'Routes
import postRoutes from "./routes/posts.js";

const app = express();

//'MiddleWare
app.use("/posts", postRoutes);

app.use(express.json());
app.use(cors());

//' MongoDB Atlas

const CONNECTION_URL =
  "mongodb+srv://Damianser:thatdamian@apimmer.0sdskj2.mongodb.net/JMsocialmedia?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5999;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
