import mongoose from 'mongoose';

export const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://prakharharshit2003:7trPLWURKfmdcNto@cluster0.coxirc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};
