// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Given some target sum (say, 14), return true if there is
// any path starting from the root and ending in a leaf
// such that adding up all the values along the path equals the given sum.

const hasPathToSum = function(node, targetSum) {
  // console.log(node, targetSum);

  let recurse = function(curNode, curSum, found) {
    // console.log("---recurse");

    if (curNode.left === undefined && curNode.right === undefined) {
      console.log(
        `(${
          curNode.value
        }) is a leaf. does curSum (${curSum}) === target (${targetSum})?`
      );
      if (curSum === targetSum) {
        console.log("-------------found-------------");
        found = true;
      }
    }

    // has left node?
    if (curNode.left !== undefined) {
      //   add to sum
      // curSum += curNode.left.value;
      console.log(`curSum + ${curNode.left.value} = ${curSum}`);
      //   recurse on left node
      found = recurse(curNode.left, curSum + curNode.left.value, found);
    }
    // has right node?
    if (curNode.right !== undefined) {
      //   add to sum
      // curSum += curNode.right.value;
      console.log(`curSum + ${curNode.right.value} = ${curSum}`);
      //   recurse on right node
      found = recurse(curNode.right, curSum + curNode.right.value, found);
    }
    return found;

    // check sum === targetSum
  };

  // curSum starts as value of node
  var res = recurse(node, node.value, false);
  // console.log(res);
  return res;
};

class Tree {
  constructor(value) {
    this.value = value;
  }
  addLeft(node) {
    if (typeof node === "object") {
      this.left = node;
    }
    return this;
  }

  addRight(node) {
    if (typeof node === "object") {
      this.right = node;
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

var result = hasPathToSum(node0, -5);
console.log(`RESULT = ${result}`);
