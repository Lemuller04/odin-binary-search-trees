if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { Tree } = await import("./bst.js");

  const tree = Tree(randomNumbers(20, 100));
  console.log("Starting with 20 random numbers less than 100...\n");
  tree.prettyPrint();

  console.log(`\nIs balanced? ${tree.isBalanced()}`);

  printTraversals(tree);

  // Unbalance the tree
  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 1000); // many > 100
    tree.insert(num);
  }

  console.log("\nAfter adding 20 more random numbers under 1000:");
  tree.prettyPrint();
  console.log(`\nIs balanced? ${tree.isBalanced()}`);

  // Balance the tree
  console.log("\nRebalancing the tree...");
  tree.rebalance();

  console.log("\nAfter rebalancing:");
  tree.prettyPrint();
  console.log(`\nIs balanced? ${tree.isBalanced()}`);

  printTraversals(tree);
};

function randomNumbers(amount, limit) {
  const arr = [];
  while (arr.length < amount) {
    arr.push(Math.floor(Math.random() * limit));
  }
  return arr;
}

function printTraversals(tree) {
  process.stdout.write("\nLevel order:\n");
  tree.levelOrderForEach((item) => process.stdout.write(`${item.data} -> `));
  process.stdout.write("\n\nIn order:\n");
  tree.inOrderForEach((item) => process.stdout.write(`${item.data} -> `));
  process.stdout.write("\n\nPost order:\n");
  tree.postOrderForEach((item) => process.stdout.write(`${item.data} -> `));
  process.stdout.write("\n\nPre order:\n");
  tree.preOrderForEach((item) => process.stdout.write(`${item.data} -> `));
  process.stdout.write("\n");
}

run();
