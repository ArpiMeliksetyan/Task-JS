class Programmer extends Employee {

    constructor(name, surname, salary, id, department, language, level) {
        super(name, surname, salary, id, department);
        this._name = name;
        this._surname = surname;
        this._salary = salary;
        this._id = id;
        this._department = department;
        this._language = language;
        this._level = level;
    }

    writingCode() {
        console.log("Writing code");
    }

    printInfo(programmer){
        Employee.printInfo();
        console.log(`${programmer.language} ${programmer.level}`)
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

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }
}