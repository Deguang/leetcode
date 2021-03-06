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
// 前序遍历 —— 递归
function preorderTraversal(root) {
  if (!root) return;

  console.log(root.val);
  root.left && preorderTraversal(root.left);
  root.right && preorderTraversal(root.right)
}
// preorderTraversal(node1)

// 前序遍历 —— 迭代
function preorderTraversal1(root) {
  if (!root) return ;

  var stack = [root];
  while (stack.length > 0) {
    var item = stack.shift();
    console.log(item.val);
    item.right && stack.unshift(item.right);
    item.left && stack.unshift(item.left);
  }
}
// preorderTraversal1(node1);



// 中序遍历 —— 递归
function inorderTraversal(root) {
  if (!root) return;
  console.count('count')
  root.left && inorderTraversal(root.left);
  console.log(root.val);
  root.right && inorderTraversal(root.right);
}
// inorderTraversal(node1)

// 中序遍历 —— 迭代
function inorderTraversal1(root) {
  if (!root) return;

  let stack = [root];
  while(stack.length > 0) {
    console.count('count')
    let item = stack[stack.length - 1];
    if (item.left && !item.left.isOut) {
      stack.push(item.left)
    } else if (!item.left || item.left.isOut) {
      console.log(item.val);
      item.isOut = true
      stack.pop();
      item.right && stack.push(item.right)
    }
  }
}
// inorderTraversal1(node1)

// 后序遍历 —— 递归
function postorderTraversal(root) {
  if (!root) return;
  console.count('count')
  root.left && postorderTraversal(root.left);
  root.right && postorderTraversal(root.right);
  console.log(root.val)
}
// postorderTraversal(node1)

// 后续遍历 —— 迭代
function postorderTraversal1(root) {
  if (!root) return;

  let stack = [root]
  while(stack.length > 0) {
    console.count('count')
    let item = stack[stack.length - 1];
    if (item.left && !item.left.isOut) {
      stack.push(item.left)
    } else if (item.right && !item.right.isOut) {
      stack.push(item.right);
    } else if ((!item.left || item.left.isOut ) || (!item.right || item.right.isOut)) {
      console.log(item.val);
      item.isOut = true;
      stack.pop()
    }
  }
}

// postorderTraversal1(node1)

// 层序遍历
function levelOrderTraversal(root) {
  if (!root) return;

  let arr = [root];
  while(arr.length > 0) {
    let _arr = []
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      console.log(item.val);
      item.left && _arr.push(item.left);
      item.right && _arr.push(item.right);
    }
    arr = _arr
  }
}
levelOrderTraversal(node1)
