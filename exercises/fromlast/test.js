const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;
const deleteOdd = require('./index');

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});

test('deleteOdd is a function', () => {
  expect(typeof deleteOdd).toEqual('function');
});

test('deleteOdd deletes odd numbers', () => {
  const l = new List();
  const expected = [2,4,6];

  l.insertLast('2');
  l.insertLast('1');
  l.insertLast('3');
  l.insertLast('4');
  l.insertLast('6');
  
 //console.log(deleteOdd(l));
  
  // expect(deleteOdd(l)).toEqual(
  //   expect.arrayContaining(expected),
  // );
});