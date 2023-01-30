class BSTNode<T> {
    constructor(public value: T,
                public left: BSTNode<T> | null = null,
                public right: BSTNode<T> | null = null
    ) {}

    public get isLeaf(): boolean {
        return this.left === null && this.right === null;
    }

    public get hasLeftChild(): boolean {
        return this.left !== null;
    }

    public get hasRightChild(): boolean {
        return this.right !== null;
    }

    public get hasBothChildren(): boolean {
        return this.hasLeftChild && this.hasRightChild;
    }

    public get hasAnyChildren(): boolean {
        return this.hasLeftChild || this.hasRightChild;
    }

    public get hasOnlyOneChild(): boolean {
        return this.hasLeftChild !== this.hasRightChild;
    }

    public get hasNoChildren(): boolean {
        return !this.hasAnyChildren;
    }

    public get hasOnlyLeftChild(): boolean {
        return this.hasLeftChild && !this.hasRightChild;
    }

    public get hasOnlyRightChild(): boolean {
        return !this.hasLeftChild && this.hasRightChild;
    }

    public get leftmostChild(): BSTNode<T> {
        if(this.left === null) {
            return this;
        }
        return this.left.leftmostChild;
    }

    public get rightmostChild(): BSTNode<T> {
        if(this.right === null) {
            return this;
        }
        return this.right.rightmostChild;
    }

    public get leftmostChildValue(): T {
        return this.leftmostChild.value;
    }

    public get rightmostChildValue(): T {
        return this.rightmostChild.value;
    }
}

class BinarySearchTree<T> {
    root: BSTNode<T> | null = null;

    constructor() {
        this.root = null;
    }

    ///
    insert(value: T): BSTNode<T> {
        if(this.root === null) {
            this.root = new BSTNode(value);
        }
        else {
            this._insert(this.root, value);
        }
    }

    private _insert(node: BSTNode<T>, value: T): BSTNode<T> {

    }
}

