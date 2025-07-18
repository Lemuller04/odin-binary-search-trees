const Node = (data = null) => ({ data, left: null, right: null });

const Tree = (initialArray = []) => {
  let finalArray = prepare(initialArray);
  let treeRoot = buildTree(finalArray);

  function buildTree(arr, start = 0, end = arr.length) {
    if (start > end - 1) return null;

    const mid = Math.floor(end / 2);
    const root = Node(arr[mid]);
    root.left = buildTree(arr.slice(0, mid));
    root.right = buildTree(arr.slice(mid + 1, end));

    return root;
  }

  function insert(value, node = treeRoot) {
    if (value === node.data) return;
    if (value < node.data) {
      if (!node.left) {
        node.left = Node(value);
        return;
      }
      insert(value, node.left);
    } else {
      if (!node.right) {
        node.right = Node(value);
        return;
      }
      insert(value, node.right);
    }
  }

  function prepare(arr) {
    let newArr = [];

    for (let item of arr) {
      if (!newArr.includes(item)) newArr.push(item);
    }

    newArr = newArr.sort((a, b) => a - b);

    return newArr;
  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return {
    treeRoot,
    insert,
    deleteItem,
    prettyPrint,
  };
};

export { Tree };
