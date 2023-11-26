const User = require("../models/userModel");
// Display All user Data
const user_index = (req, res) => {
    User.find()
        .then(find_all => res.json(find_all))
        .catch(err => console.log(err));
};
// Create New user
const user_create_post = (req, res) => {
    let user = new User(req.body);
    user
        .save()
        .then((user) => {
            res.send(user);
        })
        .catch(function (err) {
            res.status(422).send("user add failed", err);
        });
};
// Show a particular user Detail by Id
const user_details = (req, res) => {
    User.findById(req.params.id)
        .then(find => res.json(find))
        .catch(err => console.log(err));
};
// Update user Detail by Id
const user_update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("user updated");
        })
        .catch(function (err) {
            res.status(422).send("user update failed.");
        });
};
// Delete user Detail by Id
const user_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => console.log(err))
};
module.exports = {
    user_index,
    user_details,
    user_create_post,
    user_update,
    user_delete,
};