let fibonacci = {
    [Symbol.iterator]() {
        let first = 0;
        let second = 1;
        console.log(first);
        console.log(second);
        return {
            next() {
                let third = first + second;
                first = second;
                second = third;
                return {
                    done: false,
                    value: third,

                }

            }
        }
    }
}

for (let value of fibonacci) {
    if (value > 25) {
        break;
    }
    console.log(value)
}