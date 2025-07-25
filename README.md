# Balanced Binary Search Tree (BST) in JavaScript

## Overview

This project is a Balanced Binary Search Tree implementation in JavaScript, created as part of learning data structures and recursion.

It includes:

- Recursive tree construction;
- Traversals: level-order, pre-order, in-order, post-order.
- Depth and height calculations;
- Efficient insert, delete, find operations.
- Balance checks and tree rebalancing.

## Project Structure

```bash
odin-binary-search-trees/
├─ package.json          # Metadata & test script
├─ README.md             # This document
├─ src/
│  └─ Tree.js # Core BST implementation
└─ test/
   └─ tests.js           # Basic test suite
```

## Running

Ensure you have **Node.js** installed.

```bash
git clone https://github.com/Lemuller04/odin-binary-search-trees.git
cd odin-binary-search-trees
```

```bash
node test/tests.js
```

This script executes all tree operations and prints traversal orders, structure, and balance state to the console.

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

## Implementation Highlights

- Built with factory functions (Tree and Node) instead of classes for simplicity;
- Generic comparator support enables sorting of complex data types (e.g., ```[x, y]``` coordinates);
- Traversal methods accept callbacks for functional data processing;
- No reliance on third-party libraries - fully build using native JavaScript features.

## Learning Goals Achieved

This project helped practice:

- Recursion and tree traversal logic;
- Data structure visualization;
- Functional programming patterns with closures;
- Edge case handling;
- Writing flexible and reusable code components.
