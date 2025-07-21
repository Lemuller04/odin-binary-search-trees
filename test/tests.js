#!/usr/bin/env node

if (process.argv.length !== 2) {
  console.error("Usage: node test/tests.js");
  process.exit(1);
}

import Tree from "../src/Tree.js";

// Utility to print all traversals
function printTraversals(tree) {
  console.log("\nLevel-order traversal:");
  tree.levelOrderForEach((node) =>
    process.stdout.write(`${JSON.stringify(node.data)} `),
  );
  console.log("\n\nIn-order traversal:");
  tree.inOrderForEach((node) =>
    process.stdout.write(`${JSON.stringify(node.data)} `),
  );
  console.log("\n\nPre-order traversal:");
  tree.preOrderForEach((node) =>
    process.stdout.write(`${JSON.stringify(node.data)} `),
  );
  console.log("\n\nPost-order traversal:");
  tree.postOrderForEach((node) =>
    process.stdout.write(`${JSON.stringify(node.data)} `),
  );
  console.log("\n");
}

// Comparator for [x, y] arrays
function arrayComparator(a, b) {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
}

// Driver script
function runTests() {
  console.log("\n📌 Creating a BST for [x, y] arrays with x, y in 0-7...");

  const tree = Tree([], arrayComparator);

  for (let i = 0; i < 20; i++) {
    tree.insert([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]);
  }

  console.log("\nTree structure:");
  tree.prettyPrint();

  console.log(`\n✅ Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);
  printTraversals(tree);

  console.log("\n📌 Testing find, depth, and height:");
  const testNode = [3, 4];
  tree.insert(testNode);
  const foundNode = tree.find(testNode);
  console.log(`\n🔹 Find [3, 4]: ${foundNode ? "Found" : "Not found"}`);
  console.log(`🔹 Depth of [3, 4]: ${tree.depth(testNode)}`);
  console.log(`🔹 Height of [3, 4]: ${tree.height(testNode)}`);

  console.log("\n📌 Deleting [3, 4]...");
  tree.deleteItem(testNode);
  const afterDelete = tree.find(testNode);
  console.log(
    `🔹 Find after delete: ${afterDelete ? "Still present" : "Deleted successfully"}`,
  );

  console.log(
    "\n📌 Unbalancing the tree by adding points outside initial range...",
  );
  for (let i = 0; i < 15; i++) {
    tree.insert([
      Math.floor(Math.random() * 20) + 10, // x in 10-29
      Math.floor(Math.random() * 20) + 10, // y in 10-29
    ]);
  }
  console.log("\nTree structure after unbalancing:");
  tree.prettyPrint();
  console.log(`\n✅ Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

  console.log("\n📌 Rebalancing the tree...");
  tree.rebalance();
  console.log("\nTree structure after rebalancing:");
  tree.prettyPrint();
  console.log(`\n✅ Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

  printTraversals(tree);

  console.log("\n🎉 All tests completed!\n");
}

runTests();
