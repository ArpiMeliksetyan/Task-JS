function isCirculation(firstElement) {

    let slowPointer = firstElement;
    let fastPointer = firstElement;

    while (fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) return true;
    }

    return false;
}

function Node(data,next) {
    return{
        data: data,
        next: next
    }
}
let x = Node(10);
let y = Node(20);
let z = Node(30);
let w = Node(40);
let o = Node(50);

x.next = y;
y.next = z;
z.next = w;
w.next = o;
o.next = z;
console.log(isCirculation(x));