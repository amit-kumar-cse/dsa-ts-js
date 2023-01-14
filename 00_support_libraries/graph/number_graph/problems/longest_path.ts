///You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.
//
// You are also given a string s of length n, where s[i] is the character assigned to node i.
//
// Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.
//
//
//
// Example 1:
//
//
// Input: parent = [-1,0,0,1,1,2], s = "abacbe"
// Output: 3
// Explanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3. The length of this path is 3, so 3 is returned.
// It can be proven that there is no longer path that satisfies the conditions.
// Example 2:
//
//
// Input: parent = [-1,0,0,0], s = "aabc"
// Output: 3
// Explanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3. The length of this path is 3, so 3 is returned.
//
//
// Constraints:
//
// n == parent.length == s.length
// 1 <= n <= 105
// 0 <= parent[i] <= n - 1 for all i >= 1
// parent[0] == -1
// parent represents a valid tree.
// s consists of only lowercase English letters.

// Path: 00_support_libraries/graph/number_graph/problems/longest_path.ts

///https://leetcode.com/problems/longest-path-with-different-adjacent-characters/

import { NumberGraph, NumberGraphNode } from '../number_graph';

class Response {
    constructor(
        public maxPathLength: number,
        public maxRootPathLength: number,

        public label: string
    ) { }
}

function longest_path(n: number, parent: number[], s: string): number {
    const graph = new NumberGraph<string>(n);
    for (let i = 1; i < parent.length; i++) {
        graph.addEdge(parent[i], i);
    }

    graph.addProperties(s);

    const ans = longestPathHelper(graph.root);

    return Math.max(ans.maxPathLength, ans.maxRootPathLength);
}

function longestPathHelper(root: NumberGraphNode<string>): Response {
    if(root.children.length === 0) {
        return new Response(1, 1, root.property!);
    }
    const responses: Response[] = [];
    for(const [i, child] of root.children.entries()) {
        responses[i] = longestPathHelper(child);
    }

    let maxInnerPath = 0;
    let maxRootPath = 0;

    //maxInnerPath is max of
        //max of all inner paths
        //if there are 2+ branches with different characters.
            // 2 + max + 2nd max
        // if there is one branch
            // 1 + max
        //1


    //max root path is max of
        // 1 + max Path for any non matching
        // 1
    const childrenWithLabelSwitch =  responses.filter(x => x.label !== root.property).sort((a: Response, b: Response) => b.maxRootPathLength - a.maxRootPathLength);
    maxRootPath = 1 + childrenWithLabelSwitch.length > 0 ? childrenWithLabelSwitch[0].maxRootPathLength : 0;

}