import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    private users: User[] = [
      {
          firstName : 'Marouane',
          lastName:'BAHAJ',
          email:'Marouane8888@yYahoo.fr',
          drinkPreference:'Merci pour les information utiles de ce site'
        

      }
    ];
    
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUsers(user:User){
        this.users.push(user);
        this.emitUsers();
    }
     
}