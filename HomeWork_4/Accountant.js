class Accountant extends Employee {

    constructor(name, surname, salary, id, department, knowledgeOfTaxCode) {
        super(name, surname, salary, id, department);
        this.knowledgeOfTaxCode = knowledgeOfTaxCode;
        this.chiefAccountant = [];
    }

    calculateSalary(employee) {
        let netSalary = employee.salary - (employee.salary * 30) / 100;
        return netSalary;
    }

    positionOfAccountant(accountant) {
        if (accountant.knowledgeOfTaxCode) {
            this.chiefAccountant.push(accountant);
        }
    }

    printChiefAccountants() {
        this.chiefAccountant.forEach(acc => console.log(acc));
    }

    calculatingAllEmployeesSalary(accountants) {
        let map = {};
        accountants.forEach(acc => {
            map.id = acc.id();
            map.salary = this.calculateSalary(acc);
        });
    }
}