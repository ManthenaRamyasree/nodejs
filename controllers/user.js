
// let users = []
// const bcrypt = require('bcrypt');
// const validator = require('validator'); // For email validation

// class User {
//     constructor(id, username, email, password, fullname, phone, profileImgURL) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.password = password;
//         this.fullname = fullname; 
//         this.phone = phone; 
//         this.profileImgURL = profileImgURL || null; // Default to null if not provided
//     }

    
//     static async register(req, res) {
//         try {
//             const { username, email, password, fullname, phone, profileImgURL } = req.body;
          
//             // Check if email is valid
//             if (!validator.isEmail(email)) {
//                 return res.status(400).json({ message: 'Invalid email address' });
//             }
          
//             // Hash the password
//             const hashedPassword = await bcrypt.hash(password, 10);
    
//             // Simulated user creation
//             const newUser = new User(
//                 users.length + 1,
//                 username,
//                 email,
//                 hashedPassword,
//                 fullname,
//                 phone,
//                 profileImgURL
//             );
    
//             users.push(newUser);
//             res.status(201).json({ message: 'User registered successfully', user: newUser });
//         } catch (error) {
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     }
    
// }

// module.exports = User;
const bcrypt = require('bcrypt');
const validator = require('validator');
const UserModel = require('../models/user');

class User {
    static async register(req, res) {
        try {
            const { username, email, password, fullname, phone, profileImgURL } = req.body;

            // Check if email is valid
            if (!validator.isEmail(email)) {
                return res.status(400).json({ message: 'Invalid email address' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user in the database
            const newUser = await UserModel.create({
                username,
                email,
                password: hashedPassword,
                fullname,
                phone,
                profileImgURL
            });

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = User;
