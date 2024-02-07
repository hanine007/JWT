const mongooose = require ('mongoose');
const userSchema = new mongoose.Schema({ //new instance of mongoose schema object 
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    });
   module.exports = mongoose.model('User', userSchema); 

// This is the model for our User class. It uses Mongoose to interact with MongoDB. It has a username and password field, both of which are required. The username field is also unique, so that no two users can have the same username.
    