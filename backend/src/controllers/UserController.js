const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const {username, password} = req.body;

    const userExists = await User.findOne({username: username});

    if (userExists) {
      return res.json(userExists);
    }
    const user = await User.create({
      username,
      password
    });
    // const user = await User.create({
    //   username,
    //   password
    // });

    return res.json(user);
  }
};
