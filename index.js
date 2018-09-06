const hasPathToSum = function(node, targetSum) {
  if (
    node === undefined ||
    typeof node !== "object" ||
    targetSum === undefined ||
    typeof targetSum !== "number"
  ) {
    return false;
  }
  let recurse = function(curNode, curSum, found) {
    if (found) {
      return found;
    }
    if (curNode.left === undefined && curNode.right === undefined) {
      if (curSum === targetSum) {
        found = true;
      }
    }

    if (curNode.left !== undefined) {
      // add to sum & recurse on left node
      found = recurse(curNode.left, curSum + curNode.left.value, found);
    }
    if (curNode.right !== undefined) {
      // add to sum & recurse on right node
      found = recurse(curNode.right, curSum + curNode.right.value, found);
    }
    return found;
  };

  return recurse(node, node.value, false);
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

let noden3 = new Tree(-3);
let noden2 = new Tree(-2);
let noden1 = new Tree(-1);
let node0 = new Tree(0);
let node1 = new Tree(1);
let node2 = new Tree(2);
let node3 = new Tree(3);

noden2.addLeft(noden3);
noden2.addRight(noden1);

node0.addLeft(noden2);
node0.addRight(node2);

node2.addLeft(node1);
node2.addRight(node3);

console.log(`hasPathToSum(node0, -5): sum found, negative\n[${hasPathToSum(node0,-5)}] should equal [true]`);
console.log(`hasPathToSum(node0, 3): sum found\n[${hasPathToSum(node0,3)}] should equal [true]`);
console.log(`hasPathToSum(node0, 0): sum not found, zero\n[${hasPathToSum(node0,0)}] should equal [false]`);
console.log(`hasPathToSum(node0,-1.7): sum not found, negative decimal\n[${hasPathToSum(node0,-1.7)}] should equal [false]`);
console.log(`hasPathToSum(node0): no targetSum defined\n[${hasPathToSum(node0)}] should equal [false]`);
console.log(`hasPathToSum(): no node nor targetSum defined\n[${hasPathToSum()}] should equal [false]`);
console.log(`hasPathToSum(node0, "hi"): targetSum is not a number\n[${hasPathToSum(node0,"hi")}] should equal [false]`);
