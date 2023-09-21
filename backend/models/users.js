const userSchema = new mongoose.Schema({
    First_Name: {
      type: String,
      required: true,
      unique: true,
    },
    Last_Name:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,

    },
    password: {
      type: String,
      required: true,
    },
    gender:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
        required:true
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    
  });
  const State = mongoose.model('user', userSchema);

module.exports = State;