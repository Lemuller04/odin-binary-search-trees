if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { Tree } = await import("./bst.js");

  // Write tests below:

  const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  tree.prettyPrint(tree.treeRoot);
};

run();
