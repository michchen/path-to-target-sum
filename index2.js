// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Given some target sum (say, 14), return true if there is
// any path starting from the root and ending in a leaf
// such that adding up all the values along the path equals the given sum.

const hasPathToSum = function(node, targetSum) {
  // console.log(node, targetSum);

  let recurse = function(curNode, curSum) {
    console.log("---recurse");

    /*
    has left node?
      add to sum
      recurse on left node
    has right node?
      add to sum
      recurse on right node
    check sum === targetSum

    */
  };

  // curSum starts as value of node
  recurse(node, node.value);
};

class Tree {
  constructor(value) {
    this.value = value;
  }
  addLeft(node) {
    if (typeof node === "object") {
      this.leftChild = node;
    }
    return this;
  }

  addRight(node) {
    if (typeof node === "object") {
      this.rightChild = node;
    }
    return this;
  }
}

// let noden4 = new Tree(-4);
let noden3 = new Tree(-3);
let noden2 = new Tree(-2);
let noden1 = new Tree(-1);
let node0 = new Tree(0);
let node1 = new Tree(1);
let node2 = new Tree(2);
let node3 = new Tree(3);
// let node4 = new Tree(4);

noden2.addLeft(noden3);
noden2.addRight(noden1);

node0.addLeft(noden2);
node0.addRight(node2);

node2.addLeft(node1);
node2.addRight(node3);
