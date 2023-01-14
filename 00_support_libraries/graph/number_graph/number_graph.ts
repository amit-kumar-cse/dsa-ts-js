class NumberGraphNode<T> {
    constructor(
        public value: number,
        public property: T | null = null,
        public children: NumberGraphNode<T>[] = [],
        public parent: NumberGraphNode<T> | null = null,
    ) {
        this.property = null;
    }

    addEdge(child: NumberGraphNode<T>): void {
        this.children.push(child);

    }

    toString(): string {
        return `value: ${this.value}, children: ${this.children.map(child => child.value)}`;
    }
}

class NumberGraph<T> {
    private readonly nodes: NumberGraphNode<T>[];
    private readonly _root: NumberGraphNode<T>;

    constructor(n: number) {
        this.nodes = new Array<NumberGraphNode<T>>(n);

        for (let i = 0; i < n; i++) {
            this.nodes[i] = new NumberGraphNode<T>(i);
        }

        this._root = this.nodes[0];
    }

    get root(): NumberGraphNode<T> {
        return this._root;
    }

    addEdge(nodeIndex1: number, nodeIndex2: number): void {
        this.nodes[nodeIndex1].addEdge(this.nodes[nodeIndex2]);
    }

    addBothDirectionEdge(nodeIndex1: number, nodeIndex2: number): void {
        this.nodes[nodeIndex1].addEdge(this.nodes[nodeIndex2]);
        this.nodes[nodeIndex2].addEdge(this.nodes[nodeIndex1]);
    }

    addProperties(properties: Iterable<T>): void {
        let i=0;
        for(let val of properties) {
            this.nodes[i++].property = val;
        }
    }

    print(): void {
        for (const node of this.nodes) {
            console.log(node.toString());
        }
    }
}

export { NumberGraph, NumberGraphNode };