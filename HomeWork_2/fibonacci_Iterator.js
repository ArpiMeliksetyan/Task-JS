let fibonacci = {
    [Symbol.iterator]() {
        let first = 0;
        let second = 1;
        let third = first + second;
        return {
            next() {

                first = second;
                second = third;
                third = first + second;

                return {
                    done: false,
                    value: third,

                }

            }
        }
    }
}



function* fib(max) {
    let first = 1;
    let second = 0;
    let third = first + second;
    for (let i = third; third <= max; i++) {
        yield third;
        first = second;
        second = third;
        third = first + second;
    }
}




for (let value of fibonacci) {
    if (value > 25) {
        break;
    }
    console.log(value)
}