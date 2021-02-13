class Employee {

    constructor(name, surname, salary, id, department) {
        this._name = name;
        this._surname = surname;
        this._salary = salary;
        this._id = id;
        this._department = department;
    }

    static printInfo(employee) {
        console.log(`${Employee._name} ${Employee._surname} ${Employee._salary} ${Employee._id} ${Employee._department}`)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }
}