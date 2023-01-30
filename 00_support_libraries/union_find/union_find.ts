interface IUnionFind<T> {
    union(val1: T, val2: T): void;

    find(val: T): T;

    print(): void;
}

class UnionFind<T> implements IUnionFind<T> {
    private readonly parent: Map<T, T>;
    private readonly rank: Map<T, number>;

    constructor() {
        this.parent = new Map<T, T>();
        this.rank = new Map<T, number>();
    }

    union(val1: T, val2: T): void {
        const root1 = this.find(val1);
        const root2 = this.find(val2);

        if (root1 === root2) {
            return;
        }

        const rank1 = this.rank.get(root1) ?? 0;
        const rank2 = this.rank.get(root2) ?? 0;

        if (rank1 < rank2) {
            this.parent.set(root1, root2);
        } else if (rank1 > rank2) {
            this.parent.set(root2, root1);
        } else {
            this.parent.set(root1, root2);
            this.rank.set(root2, rank2 + 1);
        }
    }

    find(val: T): T {
        if (!this.parent.has(val)) {
            this.parent.set(val, val);
            this.rank.set(val, 0);
            return val;
        }

        const parent = this.parent.get(val) ?? val;

        if (parent === val) {
            return val;
        }

        const root = this.find(parent);
        this.parent.set(val, root);
        return root;
    }

    print(): void {
        console.log(`Disjoint set print started`);
        console.log(`parents ------------>`);
        for (const [key, value] of this.parent) {
            console.log(`${key} -> ${value}`);
        }
        console.log(`ranks ------------>`);
        for (const [key, value] of this.rank) {
            console.log(`${key} -> ${value}`);
        }
        console.log(`Disjoint set print completed`);
    }
}

export {IUnionFind, UnionFind};