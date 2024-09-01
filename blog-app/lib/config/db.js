import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://arushisingh999000:bhumi9990@cluster0.bm5ubgi.mongodb.net/blog-app');
    console.log("DB Connected");
}