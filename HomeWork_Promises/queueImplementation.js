
const createQueue = () => {
    const array = [];
    const array1 = [];

    let size = 0;


    return {
        getSize: function () {
            return size;
        },

        isEmpty: function () {
            return size === 0;
        },

        enqueue: function (value) {
            size++;
            array.push(value);
        },

        dequeue: function () {
            while (array.length > 0) {
                let element = array.pop();
                array1.push(element);
            }
            size--;
            return array1.pop();

        },

        peek: function(){
            while (array.length > 0) {
                let element = array.pop();
                array1.push(element);
            }
            return array1[array1.length-1];
        }

    };
};

const queue = createQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty())
console.log(queue.dequeue());
console.log(queue.peek())
console.log(queue.dequeue());
console.log(queue.isEmpty())