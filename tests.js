if (process.argv.length != 2) {
  throw new Error("Wrong usage. Use: 'node tests.js'");
}

const run = async () => {
  const { Tree } = await import("./bst.js");

  // Write tests below:

  const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  tree.insert(0);
  tree.insert(2);
  tree.insert(8);
  tree.insert(300);
  tree.insert(10000);
  tree.insert(3);
  tree.insert(6);
  tree.insert(10);
  tree.insert(9999);
  tree.insert(9998);
  tree.insert(9997);
  tree.insert(9990);
  tree.insert(9991);
  tree.prettyPrint(tree.treeRoot);
  tree.deleteItem(6345);
  tree.deleteItem(67);
  tree.prettyPrint(tree.treeRoot);
};

run();
