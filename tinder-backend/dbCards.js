//creating a schema of cards inside database i.e. tinder cards schema
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  //this is how database field are going t be built
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardSchema); //define collection name inside model(xxxx)
