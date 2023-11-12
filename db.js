import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log("mongodb connection successfull");
    } catch (error) {
        throw new Error("Error in connecting to MongoDb.");
    }
}

export default connect;