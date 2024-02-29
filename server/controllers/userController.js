const User = require("../models/userModel");

/**
 * Creates a user
 *
 * @param {*} req
 * @param {*} res
 */
const userPost = (req, res) => {
    let user = new User();
    user.name=req.body.name;
    user.lastname=req.body.lastname;
    user.email=req.body.email;
    user.password=req.body.password;
    user.pin=req.body.pin;
    user.country=req.body.country;
    user.fechaNacimiento=req.body.fechaNacimiento;

    if (user.name && user.lastname && user.email && 
        user.password && user.pin && user.country && user.fechaNacimiento) {
        user.save()
            .then(User => {
                res.status(201).json(User); // CREATED
            })
            .catch(err => {
                res.status(422).json({ error: 'There was an error saving the user' });
            });
    } else {
        res.status(422).json({ error: 'No valid data provided for user' });
    }
};


/**
 * Get all users
 *
 * @param {*} req
 * @param {*} res
 */
const userGet = async (req, res) => {
    try {
        if (req.query && req.query.id) {
            const user = await User.findById(req.query.id);
            if (!user) {
                res.status(404).json({ error: "User doesn't exist" });
            } else {
                res.json(user);
            }
        } else {
            const users = await User.find();
            res.json(users);
        }
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
};
module.exports = {
    userGet,
    userPost
  }