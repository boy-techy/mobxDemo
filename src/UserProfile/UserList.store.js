import {observable, computed, action} from "mobx";
import axios from "axios";


class User {
    id = new Date().getMilliseconds();
    @observable name;
    @observable competency;

    constructor(name){
        this.name = name;
    }
}


class UserListStore {
    @observable userList = [];
    @observable selectedUser = {};

    @computed
    get selectedUserId(){
        return this.selectedUser.id;
    }

    @action
    addUser = (user) =>{
        if(Array.isArray(user)) {
            this.userList = [...user];
        } else {
            this.userList.push(user)
        }
    };

    @action
    selectUser = (user) =>{
        this.selectedUser = user;
    };

    @action
    clearSelectedUser = () =>{
        this.selectedUser = {};
    };

    @action
    getUsers(){
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response)=> {
                this.addUser(response.data);
            })
    }

}

export default UserListStore;