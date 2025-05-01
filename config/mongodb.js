import mongoose from "mongoose"; // import mongoose from "mongoose";
// এটি Mongoose লাইব্রেরি ইমপোর্ট করছে, যা MongoDB এর সাথে সংযোগ স্থাপন ও ডাটাবেজ ম্যানেজ করার জন্য ব্যবহার হয়।

const connectDB = async () => {
    // এটি একটি async (অ্যাসিনক্রোনাস) ফাংশন, যা ডাটাবেজের সাথে সংযোগ স্থাপনের কাজ করবে।
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    // mongoose.connection.on('connected', () => { console.log("DB Connected"); })
    // যখন ডাটাবেজের সাথে সংযোগ সফলভাবে স্থাপন হবে, তখন কনসোলে "DB Connected" মেসেজ দেখাবে।

    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)
}
// এটি ডাটাবেজের সাথে সংযোগ করার মূল অংশ।
// process.env.MONGODB_URL থেকে MongoDB এর ঠিকানা নেওয়া হচ্ছে (সাধারণত .env ফাইল থেকে আসে)।
// /e-commerce হলো সেই ডাটাবেজের নাম যেখানে ডাটা সংরক্ষণ করা হবে।

export default connectDB;
// এই connectDB ফাংশনটি export করা হয়েছে, যাতে এটি অন্য ফাইলেও ব্যবহার করা যায়।

// সহজভাবে কাজের প্রক্রিয়া:
// এই ফাংশন কল করলে MongoDB সার্ভারের সাথে সংযোগ স্থাপন হবে।
// সংযোগ সফল হলে "DB Connected" মেসেজ দেখাবে।
// অন্য কোনো ফাইলে এটি import করে ব্যবহার করা যাবে, যেমনঃ
// import connectDB from "./db.js";
// connectDB();
// এভাবে MongoDB ডাটাবেজ ব্যবস্থাপনার জন্য Mongoose ব্যবহার করা হয়। 😊







