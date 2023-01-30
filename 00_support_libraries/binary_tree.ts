import Stack from "./stack_queue_ll/stack";

class BTNode<T> {
    public data: T;
    public left: BTNode<T> | null;
    public right: BTNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTAlgorithms<T> {
    // TC = O(N)
    // SC = O(h), h = height of the tree.
    preOrder(root: BTNode<T> | null): void {
        if(root === null) {
            return;
        }
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root: BTNode<T> | null): void {
        if(root === null) {
            return;
        }
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }

    postOrder(root: BTNode<T> | null): void {
        if(root === null) {
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }

    inOrderList(root: BTNode<T> | null): T[] {
        if(root === null) {
            return [];
        }
        return [...this.inOrderList(root.left), root.data, ...this.inOrderList(root.right)];
    }

    preOrderList(root: BTNode<T> | null): T[] {
        if(root === null) {
            return [];
        }
        return [root.data, ...this.preOrderList(root.left), ...this.preOrderList(root.right)];
    }

    posOrderList(root: BTNode<T> | null): T[] {
        if(root === null) {
            return [];
        }
        return [...this.posOrderList(root.left), ...this.posOrderList(root.right), root.data];
    }

    iterativeInOrderTraversal(root: BTNode<T> | null): T[] {
        const stack = new Stack<T>(100);

        while(root !== null) {
            return [];
        }
        // do the processing on it.
        return [];
    }

    //approach shared by rahul
    iterativeInOrderTraversal1(root: BTNode<T> | null): T[] {
        const stack = new Stack<BTNode<T>>(100);
        let temp = root;

        while(1) {
            if(temp !== null) {
                stack.push(temp!);

            }
        }
        // do the processing on it.
        return [];
    }

    // TODO: write function to inflate the tree from an array.
    buildBinaryTreeFromArray(arr: T[]): BTNode<T> | null {
        return null;
    }


    // TODO: Morris in-order traversal.

    //Level order traversal : it is BFS also when it comes to graphs.


}