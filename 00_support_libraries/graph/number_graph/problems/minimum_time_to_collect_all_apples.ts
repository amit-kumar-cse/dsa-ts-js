///Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.
//
// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

// Example 1:
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Example 2:
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
// Output: 6
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Example 3:
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
// Output: 0

// Constraints:
// 1 <= n <= 10^5
// edges.length == n-1
// edges[i].length == 2
// 0 <= ai < bi <= n-1
// fromi < toi
// hasApple.length == n

import {NumberGraph, NumberGraphNode} from "../number_graph";

class MinTimeResponse {
    constructor(
        public minTime: number,
        public appleCount: number,
        public nodeCount: number,
    ) { }
}

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    const graph = new NumberGraph(n);
    for (const edge of edges) {
        graph.addEdge(edge[0], edge[1]);
    }
    // graph.print();
    return minTimeToCollectAllApples(graph.root, hasApple).minTime;
}

function minTimeToCollectAllApples(root: NumberGraphNode, hasApple: boolean[]): MinTimeResponse {
    let minTime = 0;
    let appleCount = 0;
    let nodeCount = 0;
    if (hasApple[root.value]) {
        appleCount++;
    }
    for (const child of root.children) {
        const childResponse = minTimeToCollectAllApples(child, hasApple);
        minTime += childResponse.minTime;
        appleCount += childResponse.appleCount;
        nodeCount += childResponse.nodeCount;
    }
    if (appleCount > 0) {
        minTime += 2 * nodeCount;
    }
    return new MinTimeResponse(minTime, appleCount, nodeCount + 1);
}

const n = 7;
const edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]];
const hasApple = [false,false,true,true,true,false,false];

console.log(minTime(n, edges, hasApple));



