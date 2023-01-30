class TrieNode {
    children;
    isEnd;
    public value;

    public get hasChildren(): boolean {
        return this.children.size > 0;
    }

    constructor(value = null) {
        this.children = new Map();
        this.isEnd = false;
        this.value = value;
    }
}

class Trie<T> {
    private readonly root: TrieNode<T>;

    constructor() {
        this.root = new TrieNode<T>();
    }

    /**
     * Inserts a word into the trie.
     * @param word
     */
    public insert(word: Iterable<T>): void {
        let current = this.root;
        for (const letter of word) {
            if (!current.children.has(letter)) {
                current.children.set(letter, new TrieNode(letter));
            }
            current = current.children.get(letter)!;
        }
        current.isEnd = true;
    }

    /**
     * Returns true if word is in the trie.
     * @param word
     */
    public search(word: Iterable<T>): boolean {
        let current = this.root;
        for (const letter of word) {
            if (!current.children.has(letter)) {
                return false;
            }
            current = current.children.get(letter)!;
        }
        return current.isEnd;
    }

    /**
     * Returns true is word was found and removed, false otherwise.
     * @param word
     */
    public delete(word: T[]): boolean {
        let current = this.root;
        for (const letter of word) {
            if (!current.children.has(letter)) {
                return false;
            }
            current = current.children.get(letter)!;
        }
        if (!current.isEnd) {
            return false;
        }
        current.isEnd = false;
        return true;
    }

    /**
     * Returns true if word is a prefix of at least one word in the trie.
     * @param prefix
     */
    public startsWith(prefix: T[]): boolean {
        let current = this.root;
        for (const letter of prefix) {
            if (!current.children.has(letter)) {
                return false;
            }
            current = current.children.get(letter)!;
        }
        return true;
    }
}