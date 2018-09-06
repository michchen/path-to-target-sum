// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Given some target sum (say, 14), return true if there is
// any path starting from the root and ending in a leaf
// such that adding up all the values along the path equals the given sum.

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
      // console.log(
      //   `found leaf. does curSum (${curSum}) === target (${targetSum})?`
      // );
      if (curSum === targetSum) {
        // console.log("-------------found-------------");
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

console.log(
  `${hasPathToSum(node0, -5)} should equal true: sum found (negative)`
);
console.log(`${hasPathToSum(node0, 3)} should equal true: sum found`);
console.log(
  `${hasPathToSum(node0, 0)} should equal false: sum not found (zero)`
);
console.log(
  `${hasPathToSum(
    node0,
    -1.7
  )} should equal false: sum not found (negative decimal)`
);
console.log(`${hasPathToSum(node0)} should equal false: no targetSum defined`);
console.log(
  `${hasPathToSum()} should equal false: no node nor targetSum defined`
);

console.log(
  `${hasPathToSum(node0, "hi")} should equal false: targetSum is not a number`
);
