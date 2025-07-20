#!/usr/bin/env node

// Ensure clean CLI usage
if (process.argv.length !== 2) {
  console.error("Usage: node test/tests.js");
  process.exit(1);
}

// Import your module
import Tree from "../src/Tree.js";

// Generate an array of random numbers under a limit
function randomNumbers(amount, limit) {
  const arr = [];
  while (arr.length < amount) {
    arr.push(Math.floor(Math.random() * limit));
  }
  return arr;
}

// Utility to print all traversals
function printTraversals(tree) {
  console.log("\nLevel-order traversal:");
  tree.levelOrderForEach((node) => process.stdout.write(`${node.data} `));
  console.log("\n\nIn-order traversal:");
  tree.inOrderForEach((node) => process.stdout.write(`${node.data} `));
  console.log("\n\nPre-order traversal:");
  tree.preOrderForEach((node) => process.stdout.write(`${node.data} `));
  console.log("\n\nPost-order traversal:");
  tree.postOrderForEach((node) => process.stdout.write(`${node.data} `));
  console.log("\n");
}

// Driver script
function runTests() {
  console.log("📌 Creating a balanced BST with 20 random numbers < 100...\n");

  const tree = Tree(randomNumbers(20, 100));

  tree.prettyPrint();
  console.log(`\n✅ Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

  printTraversals(tree);

  console.log(
    "\n📌 Unbalancing the tree by adding 20 random numbers < 1000...",
  );
  for (let i = 0; i < 20; i++) {
    tree.insert(Math.floor(Math.random() * 1000)); // many > 100
  }

  tree.prettyPrint();
  console.log(`\n✅ Is the tree balanced? ${tree.isBalanced() ? "Yes" : "No"}`);

  console.log("\n📌 Rebalancing the tree...");
  tree.rebalance();

  tree.prettyPrint();
  console.log(
    `\n✅ Is the tree balanced after rebalancing? ${tree.isBalanced() ? "Yes" : "No"}`,
  );

  printTraversals(tree);

  console.log("\n🎉 All tests completed!");
}

// Execute when run directly
runTests();
