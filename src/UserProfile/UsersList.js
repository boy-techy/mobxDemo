import React, {Component} from "react";
import {observer} from "mobx-react";
import Profile from "./Profile";

@observer
class UsersList extends Component {

    componentWillMount(){
        this.props.store.getUsers();
    }


    fetchUsersList = () => {
      const {userList=[], selectUser} = this.props.store;
      return userList.map((user)=> {
          return <li onClick={() =>
              selectUser(user)
          }>{user.name}</li>
      })
    };

    render(){
        const {fetchUsersList} = this;
        const {selectedUser} = this.props.store;
        return(
            <div>
                <ul> {fetchUsersList()} </ul>
                <Profile user={selectedUser}/>
            </div>
        )
    }
}

export default UsersList;