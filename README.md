# Balanced Binary Search Tree (BST)

## Overview

This project is a Balanced Binary Search Tree implementation in JavaScript, created as part of learning data structures and recursion.

It includes:

- Building a balanced BST from an array (removing duplicates).
- Efficient insert, delete, find operations.
- Traversals: level-order, pre-order, in-order, post-order.
- Height and depth calculations for nodes.
- Balance checks and tree rebalancing.
- A prettyPrint utility for visualizing tree structure in the console.

The implementation is designed for learning:

- Practicing recursion clearly.
- Understanding tree balancing concepts.
- Reinforcing O(log n) operations and why they matter for performance.

## Running
To run the tests:

```bash
node tests.js
```

## Key Features
✅ Balanced Tree Building
Uses a recursive buildTree with a sorted, duplicate-free array, ensuring a balanced tree on creation.

✅ Efficient Insert and Delete
Inserts place values correctly in the tree structure while avoiding duplicates. Deletion handles:

- Nodes with no children
- Nodes with one child
- Nodes with two children (using in-order successor)
- Tree rebalances itself if it becomes unbalanced after operations.

✅ Tree Traversals

- levelOrderForEach(callback) (breadth-first)
- preOrderForEach(callback) (root, left, right)
- inOrderForEach(callback) (left, root, right)
- postOrderForEach(callback) (left, right, root)

✅ Height and Depth

- height(value) returns the longest path from a node to a leaf.
- depth(value) returns the distance from the node to the root.

✅ Balance Checking and Rebalancing

- isBalanced() ensures the height difference between subtrees of every node is at most 1.
- rebalance() restructures the tree to become balanced again.

✅ Visualization with prettyPrint

- Neatly displays the tree sideways in the console for debugging and understanding structure.
