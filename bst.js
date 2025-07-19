const Node = (data = null) => ({ data, left: null, right: null });

const Tree = (initialArray = []) => {
  let finalArray = prepare(initialArray);
  let treeRoot = buildTree(finalArray);

  function buildTree(arr, start = 0, end = arr.length) {
    if (start > end - 1) return null;

    const mid = Math.floor((start + end) / 2);
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

  function deleteItem(value, node = treeRoot, parent = null) {
    if (node.data === value && parent) {
      // Case: node is a leaf
      if (!node.left && !node.right) {
        node.data > parent.data ? (parent.right = null) : (parent.left = null);
        return;
      }

      // Case: node has both children
      if (node.left && node.right) {
        let nextNode = node.right;
        let nextNodeParent;
        while (nextNode.left) {
          nextNodeParent = nextNode;
          nextNode = nextNode.left;
        }
        node.data = nextNode.data;
        nextNode.right
          ? (nextNodeParent.left = nextNode.right)
          : (nextNodeParent.left = null);
        return;
      }

      // Case: node has only left children
      if (node.left) {
        if (node.left.data > parent.data) {
          parent.right = node.left;
        } else {
          parent.left = node.left;
        }
        return;
      }

      // Case: node has only right children
      if (node.right.data > parent.data) {
        parent.right = node.right;
      } else {
        parent.left = node.right;
      }
      return;
    }
    if (value < node.data) {
      deleteItem(value, node.left, node);
    }
    if (value > node.data) {
      deleteItem(value, node.right, node);
    }
  }

  function find(value, node = treeRoot) {
    if (!node) return null;
    if (value === node.data) return node;
    return value < node.data ? find(value, node.left) : find(value, node.right);
  }

  function levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required");
    }

    const queue = [treeRoot];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  function inOrderForEach(callback, node = treeRoot) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }

    if (!node) return;
    inOrderForEach(callback, node.left);
    callback(node);
    inOrderForEach(callback, node.right);
  }

  function postOrderForEach(callback, node = treeRoot) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }

    if (!node) return;
    postOrderForEach(callback, node.left);
    postOrderForEach(callback, node.right);
    callback(node);
  }

  function preOrderForEach(callback, node = treeRoot) {
    if (typeof callback !== "function") {
      throw new Error("A callback is required");
    }

    if (!node) return;
    callback(node);
    preOrderForEach(callback, node.left);
    preOrderForEach(callback, node.right);
  }

  function height(value) {
    let node;
    if ((node = find(value))) {
      let counter = 0;
      while (node.left) {
        counter++;
        node = node.left;
      }
      while (node.right) {
        counter++;
        node = node.right;
      }
      return counter;
    }
    return null;
  }

  function depth(value, node = treeRoot, counter = 0) {
    if (!node) return null;
    if (node.data === value) return counter;
    counter++;
    return value < node.data
      ? depth(value, node.left, counter)
      : depth(value, node.right, counter);
  }

  function prepare(arr) {
    let newArr = [];

    for (let item of arr) {
      if (!newArr.includes(item)) newArr.push(item);
    }

    newArr = newArr.sort((a, b) => a - b);

    return newArr;
  }

  const prettyPrint = (node = treeRoot, prefix = "", isLeft = true) => {
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
    insert,
    deleteItem,
    find,
    levelOrderForEach,
    inOrderForEach,
    postOrderForEach,
    preOrderForEach,
    height,
    depth,
    prettyPrint,
  };
};

export { Tree };
