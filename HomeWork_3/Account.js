function Account(username,password,isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
}

Account.prototype.sayWelcome = function (user) {
        console.log(`Hello dear ${user.name}`);
}

module.exports = Account;

