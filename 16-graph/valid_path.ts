import NumberGraph from "../00_support_libraries/Number_graph";

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = new NumberGraph(n);
    for (const edge of edges) {
        graph.addBothDirectionEdge(edge[0], edge[1]);
    }
    return graph.hasPath(source, destination);
}

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));