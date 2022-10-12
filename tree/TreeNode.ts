class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static build(arr: number[]): TreeNode | null {
    const root = new TreeNode(arr.shift());
    const queue = [root];
    while (arr.length) {
      const node = queue.shift();
      if (node) {
        const left = arr.shift();
        if (left) {
          node.left = new TreeNode(left);
          queue.push(node.left);
        }
        const right = arr.shift();
        if (right) {
          node.right = new TreeNode(right);
          queue.push(node.right);
        }
      }
    }
    return root;
  }
}

const myTree = TreeNode.build([1, 2, 3, 4, 5, 6, 7, 8, 9]); 
