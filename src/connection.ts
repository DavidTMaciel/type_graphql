import mongoose from "mongoose";

async function main() {
   await mongoose.connect('mongodb://0.0.0.0:27017/api')
}

main();
