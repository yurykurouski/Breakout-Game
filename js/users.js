import storageService from "./storage-service.js";

class UsersList {
    constructor(users) {
        this.users = users;
    }

    add(newUser) {
        this.users = [...this.users, newUser]
    }
}

const users = JSON.parse(storageService.get('users'))

const userList = new UsersList(users ? users : []); // =[]

export default userList;