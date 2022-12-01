import User from "../models/User";
import userService from "../service/user.service";

class UserController {
    async createUser(req, res) {
        try {
            const {name, surname} = req.body;
            const user = new User({name, surname});
            const createdUser = await userService.createUser(user);
            return res.json({message: 'User was created'});
            
        } catch (error) {
            console.log(error);
            res.send({message: 'server error'})
        }
    }
};
 
const userController = new UserController();
export default userController;