import MyQueue from "./myQueue";

class NumberGraph {
    private n: number;
    private adjacencyList: Map<number, Set<number>>;

    constructor(n: number) {
        this.n = n;
        this.adjacencyList = new Map();
    }

    addOneDirectionEdge(source: number, destination: number): void {
        if(!this.adjacencyList.has(source)) {
            this.adjacencyList.set(source, new Set());
        }
        this.adjacencyList.get(source)!.add(destination);
    }

    addBothDirectionEdge(source: number, destination: number): void {
        this.addOneDirectionEdge(source, destination);
        this.addOneDirectionEdge(destination, source);
    }

    hasPath(source: number, destination: number): boolean {
        const visited = new Set();
        const queue = new MyQueue<number>();
        queue.enqueue(source);
        visited.add(source);

        while(queue.size() > 0) {
            const current = queue.dequeue()!;
            if(current === destination) {
                return true;
            }
            visited.add(current);
            // console.log(`visited: ${visited}`);
            if(this.adjacencyList.has(current)) {
                for(const neighbour of this.adjacencyList.get(current)!) {
                    if(!visited.has(neighbour)) {
                        queue.enqueue(neighbour);
                    }
                }
            }
        }
        return false;
    }
}

export default NumberGraph;