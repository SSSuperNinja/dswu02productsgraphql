const facturapi = require('../apis/facturapi');
const User = require('../models/userModel');

const userService = {
  getUsers: async () => await User.find(),
  
  createUser: async (args) => {

    const facturapiUser = await facturapi.createUser(args);


    const user = new User({
      ...args,
      facturapiId: facturapiUser.id 
    });
    
    return await user.save();
  },
  
  updateUser: async ({ _id, ...rest }) => {
    const user = await User.findById(_id);
    if (!user) throw new Error('User not found');

    await facturapi.updateUser(user.facturapiId, rest);

    return await User.findByIdAndUpdate(_id, rest, { new: true });
  },

  deleteUser: async (_id) => {
    const user = await User.findById(_id);
    if (!user) throw new Error('User not found');

    await facturapi.deleteUser(user.facturapiId);

    return await User.findByIdAndDelete(_id);
  }
};

module.exports = userService;
