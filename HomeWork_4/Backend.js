class Backend extends Programmer{

    constructor(name, surname, salary, id, department, language, level) {
        super(name, surname, salary, id, department, language, level);
    }
    writingCode() {
        console.log("Writing code with Java")
    }

    projectComplexity(hours,days,rate){
        let complexity = (days*hours*rate)/100;
    }
}