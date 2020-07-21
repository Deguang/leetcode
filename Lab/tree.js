// Data Structrue of a node.
function Node(val) {
  this.left = this.right = null;
  this.val = val;
}

/**
 * Tree
 *         1
 *        / \
 *      2     3
 *    / \    / \
 *   4   5  6   7
 */
var node7 = {left: null, right: null, val: 7},
    node6 = {left: null, right: null, val: 6},
    node5 = {left: null, right: null, val: 5},
    node4 = {left: null, right: null, val: 4},
    node3 = {left: node6, right: node7, val: 3},
    node2 = {left: node4, right: node5, val: 2},
    node1 = {left: node2, right: node3, val: 1};

/**
 *  • 前序遍历
      • 先访问根节点，再前序遍历左子树，再前序遍历右子树
    • 中序遍历
      • 先中序遍历左子树，再访问根节点，再中序遍历右子树
    • 后续遍历
      • 先后续遍历左子树，再后续遍历右子树，再访问根节点
 */
// 前序递归遍历
function preorderTraversal(root) {
  if (!root) return;

  console.log(root.val);
  root.left && preorderTraversal(root.left);
  root.right && preorderTraversal(root.right)
}

//preorderTraversal(node1)


// 中序递归遍历
function inorderTraversal(root) {
  if (!root) return;
  root.left && inorderTraversal(root.left);
  console.log(root.val);
  root.right && inorderTraversal(root.right);
}

// inorderTraversal(node1)

// 后序递归遍历
function postorderTraversal(root) {
  if (!root) return;
  root.left && postorderTraversal(root.left);
  root.right && postorderTraversal(root.right);
  console.log(root.val)
}
postorderTraversal(node1)