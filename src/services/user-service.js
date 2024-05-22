import {UserRepository} from '../repository/index.js';


class UserService{
constructor(){
    this.userRepository=new UserRepository();

}
async signup(data){
    try {
        const user=await this.userRepository.create(data);
        
        return user;  
    } catch (error) {
       console.log(error);
        console.log("something wrong in signup fn in user-service");
        throw error;
    }
   

}
}
export default UserService;