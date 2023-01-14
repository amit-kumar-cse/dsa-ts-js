import {NumberGraphNode, NumberGraph} from "../number_graph";

// class MyNode extends NumberGraphNode {
//     public label: string;
//     public fm: Map<string, number>;
//
//     constructor(
//         value: number,
//         label: string,
//         children: NumberGraphNode[] = [],
//         parent: NumberGraphNode | null = null,
//
//     ) {
//         super(value, children, parent);
//         this.label = label;
//         this.fm = new Map<string, number>();
//     }
// }

function countSubTrees(n: number, edges: number[][], labels: string): number[] {
    const graph = new NumberGraph(n);
    for (const edge of edges) {
        graph.addEdge(edge[0], edge[1]);
    }
    const ans = new Array<number>(n).fill(0);

    countSubTreesHelper(graph.root, labels, ans);

    return ans;
};

function countSubTreesHelper(root: NumberGraphNode, labels: string, ans: number[]): Map<string, number> {
    const fm = new Map<string, number>();
    for (const child of root.children) {
        const childFm = countSubTreesHelper(child, labels, ans);
        for (const [key, value] of childFm) {
            fm.set(key, (fm.get(key) || 0) + value);
        }
    }
    fm.set(labels[root.value], (fm.get(labels[root.value]) || 0) + 1);
    ans[root.value] = fm.get(labels[root.value]) || 0;
    return fm;
}

const n = 7;
const edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]];
const labels = "abaedcd";

console.log(countSubTrees(n, edges, labels));