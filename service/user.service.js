

class UserService {
    async createUser(user)  {
        const createdUser = await userService.createUser(user);
        return createdUser;
    }
}
const userService = new UserService();
export default userService;