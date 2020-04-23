// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
             
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (this.size() == 1) {
            this.head = null;

            return;
        }
    
        if (this.size() > 1) {
            let previous = this.head;
            let node = this.head.next;

            while (previous) {
                if (node && !node.next) {
                    return previous.next = null;
                }
                
                previous = this.head.next
                node = node.next;
            }
        }
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = new Node(data);
        } else {
            lastNode.next = new Node(data);
        }
    }

    getAt(idx) { 
        if (idx > this.size()) {
            return null;
        }

        let node = this.head;
        let counter = 0;

        while (node) {
            if (counter == idx) {
                return node;
            }
            
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }

        if (idx == 0) {
            this.head = this.head.next;
            return;
        }

        if (this.size() == 1) {
            this.head = null;
        }

        if (idx == this.size() - 1) {
            this.removeLast();
        }

        var previous = this.getAt(idx - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, idx) {
        if (!this.head) {
            this.head = new Node(data);

            return;
        }

        if (idx == 0) {
            var previous = this.head;

            if (previous) {
                this.head = new Node(data, previous);
            }

            return;
        }

        if (idx == this.size() || idx > this.size()) {
            var previous = this.getLast();

            previous.next = new Node(data);

            return;
        }

        var previous = this.getAt(idx - 1);

        if (previous) {
            var newNode = new Node(data);

            newNode.next = previous.next ? previous.next : null;
            previous.next = newNode;
        }
    }

    forEach(func) {
        let node = this.head;
        let counter = 0;

        while (node) {
            func(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
