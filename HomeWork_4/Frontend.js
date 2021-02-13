class Frontend extends Programmer {

    constructor(name, surname, salary, id, department, language, level) {
        super(name, surname, salary, id, department, language, level);
    }

    writingCode() {
        console.log("Writing code with JS");
    }

    designFeatures() {
        return "Design and implement user-facing features end-to-end.";
    }
}