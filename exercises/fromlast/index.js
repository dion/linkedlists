// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    //let fast = list.getAt(3);

    while (n > 0) {
        fast = fast.next;
        n--;    
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
    //return list.getAt(list.size() - n -1);
}

function deleteOdd(list) {
    let node = list.head;
    
    if (!node) {
      return;
    } else {
      while (node) {
        var prev = list.head,
            next = list.head.next;
        
        if (node.data % 2 !== 0) { // remove odd number
          console.log('odd number', node.data);
          prev.next = next.next;
        }

        node = node.next;
      }
    }

    return list;
}

const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

const l = new List();
const expected = [2,4,6];

l.insertFirst('2');
l.insertFirst('1');
l.insertFirst('3');
l.insertFirst('4');
l.insertFirst('6');

deleteOdd(l);

console.log('end:', l);


module.exports = deleteOdd;
module.exports = fromLast;
