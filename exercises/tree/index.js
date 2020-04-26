// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) { // data (integer)
        this.children = this.children.filter(function(node)  {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
      this.root = null;
    }

    traverseBF(fn) {
      let container = [this.root];

      while (container.length) {
        let used = container.shift();
        
        for (let child of used.children) {
          container.push(child);
        }

        fn(used);
      }
    }

    traverseDF(fn) {
      let container = [this.root];

      while (container.length) {
        let used = container.shift();

        container.unshift(...used.children);

        // for (let child of used.children) {
        //   console.log('child', child);
        //   container.unshift(child);
        // }

        // for (var i = 0, len = used.children.length; i < len; i++) {
        //   console.log(used.children[i]);
        //   container.unshift(used.children[i]);
        // }

        fn(used);
      }
    }
}

// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;
//console.log(tree);

module.exports = { Tree, Node };
