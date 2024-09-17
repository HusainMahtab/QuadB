import mongoose from "mongoose";

const connectDB=()=>{
    try {
        mongoose.connect("mongodb+srv://mahtabh667:quadb@cluster0.y7yvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected successfully")
    } catch (error) {
        console.error("error while connecting the DB!",error)
    }
}

export default connectDB