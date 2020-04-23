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

module.exports = fromLast;
