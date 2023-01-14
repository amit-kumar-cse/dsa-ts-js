class TreeNode<T> {
    children: TreeNode<T>[];
    constructor(public value: T) {
        this.children = [];
    }

    addChild(child: TreeNode<T>) {
        this.children.push(child);
    }
}

export {TreeNode};