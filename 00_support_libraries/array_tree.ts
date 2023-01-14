class ArrayTreeNode {
    constructor(
        public value: any,
        public childrenIndexes: number[] = []
    ) { }

    toString(): string {
        return `value: ${this.value}, children: ${this.childrenIndexes}`;
    }
}

class ArrayTree {
    private nodes: ArrayTreeNode[];

    constructor(n: number, edges: number[][]) {
        this.nodes = new Array<ArrayTreeNode>(n);
        for (let i = 0; i < n; i++) {
            this.nodes[i] = new ArrayTreeNode(i);
            this.nodes[i].value = i;
        }
        for(const [parentIndex, childIndex] of edges) {
            this.nodes[parentIndex].childrenIndexes.push(childIndex);
        }
    }

    getNode(index: number): ArrayTreeNode {
        return this.nodes[index];
    }

    getRoot(): ArrayTreeNode {
        return this.nodes[0];
    }

    print(): void {
        console.log(`starting array tree print`);
        for (const node of this.nodes) {
            console.log(node.toString());
        }
        console.log(`ending array tree print`);
    }
}




const n = 7;
const edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]];
const hasApple = [false,false,true,false,true,true,false];

const tree = new ArrayTree(n, edges);
tree.print();

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {

};

function minTimeH


