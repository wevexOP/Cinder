const user = require('/models/User');


const allUsers = async (req, res) => {
    await res.render('home');
}
const userForm = async (req, res) => {
    await res.render('signup');
}

const saveUser = async (req, res) => {
    const {name, email, password} = await req.body;
    const user = await user.create({
       name, email, password
    }).catch(error=>console.log(error));
    console.log(user)
    res.redirect('/');

    await res.render('signup');
}

module.exports = {
    allUsers,
    userForm,
    saveUser
}