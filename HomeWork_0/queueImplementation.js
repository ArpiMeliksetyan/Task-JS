const createStack = () => {
    let array = [];
    let size = 0;

    return {
        getSize: function () {
            return size;
        },

        isEmpty: function () {
            return size === 0;
        },

        push: function (value) {
            size++;
            array.push(value);
        },

        pop: function () {
            if (this.isEmpty()) return;
            size--;
            return array.pop();
        },
        peek: function () {
            if (this.isEmpty()) return;
            return array[array.length - 1];
        }
    }
}
const createQueue = () => {

    let stack1 = createStack();
    let stack2 = createStack();

    let size = 0;

    return {
        getSize: function () {
            return stack2.getSize();
        },

        isEmpty: function () {
            return size === 0;
        },

        enqueue: function (value) {
            stack1.push(value);
        },

        dequeue: function () {
            while (stack1.getSize() > 0) {
                let element = stack1.pop();
                stack2.push(element);
            }
            size--;
            return stack2.pop();

        },

        peek: function () {
            while (stack1.getSize() > 0) {
                let element = stack1.pop();
                stack2.push(element);
            }
            return stack2.peek();
        }

    };
};

const queue = createQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
