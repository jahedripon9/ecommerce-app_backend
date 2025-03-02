{/* কোডটি Cloudinary নামের একটি image hosting এবং media management সার্ভিসের সাথে আমাদের Node.js অ্যাপকে কানেক্ট করতে ব্যবহৃত হয়। */ }
import { v2 as cloudinary } from 'cloudinary';
{/* আমরা Cloudinary লাইব্রেরির v2 ভার্সন ইমপোর্ট করছি এবং এটিকে cloudinary নামে ব্যবহার করছি। এটি আমাদের ক্লাউডে ছবি আপলোড, স্টোর, ও ম্যানেজ করতে সাহায্য করবে। */ }
// Configure Cloudinary immediately upon import
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

{/* এখানে cloudinary.config() ফাংশন ব্যবহার করে Cloudinary-কে কনফিগার (সেটআপ) করা হয়েছে।
কনফিগার করতে তিনটি গুরুত্বপূর্ণ তথ্য (ক্রিডেনশিয়াল) ব্যবহার করা হয়েছে:

cloud_name - Cloudinary একাউন্টের নাম
api_key - Cloudinary API-এর পাবলিক কী
api_secret - Cloudinary API-এর সিক্রেট কী
🔹 এগুলো process.env থেকে নেওয়া হয়েছে, যার মানে হলো .env ফাইলের মধ্যে এগুলো সংরক্ষিত থাকে।
🔹 এতে API Key & Secret Key প্রকাশ পাবে না, ফলে সিকিউরিটি ভালো থাকবে। */}

export default cloudinary;

{/* 👉 এখানে cloudinary অবজেক্টকে এক্সপোর্ট (রপ্তানি) করা হয়েছে, যাতে অন্য ফাইলগুলোতে এটি ব্যবহার করা যায়।
👉 এখন যেখানে দরকার, সেখানে এটি ইমপোর্ট করে ছবি আপলোড বা ম্যানেজ করা যাবে।
 */}

{/* পুরো কোডের সংক্ষেপে কাজের বিবরণ:
✅ প্রথমে Cloudinary লাইব্রেরি ইমপোর্ট করা হয়।
✅ এরপর config() ফাংশনের মাধ্যমে Cloudinary-কে API কী ও সিক্রেট কী দিয়ে সেটআপ করা হয়।
✅ সবশেষে cloudinary অবজেক্ট এক্সপোর্ট করা হয়, যাতে অন্য ফাইলেও এটি ব্যবহার করা যায়। */}