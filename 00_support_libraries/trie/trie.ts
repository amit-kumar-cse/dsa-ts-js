class TrieNode<T> {
  public children: Map<T, TrieNode<T>>;
  public isEnd: boolean;
  public value: T | null;

    public get hasChildren(): boolean {
        return this.children.size > 0;
    }

  constructor(value: T | null = null) {
    this.children = new Map<T, TrieNode<T>>();
    this.isEnd = false;
    this.value = value;
  }
}

class Trie<T> {
    private readonly root: TrieNode<T>;

    constructor(seeds: Iterable<T>[] = []) {
        this.root = new TrieNode<T>();
        for (const seed of seeds) {
            this.insert(seed);
        }
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

    searchWithSpecialSymbols(word: T[], specialSymbols: Iterable<T>): boolean {
        const specialSymbolsSet = new Set<T>();
        for(const item of specialSymbols) {
            specialSymbolsSet.add(item);
        }
        return this.searchWithSpecialSymbolsHelper(this.root, word, 0, specialSymbolsSet);
    }

    private searchWithSpecialSymbolsHelper(currentNode: TrieNode<T>, word: T[], index: number, specialSymbolsSet: Set<T>): boolean {
        if(index >= word.length) {
            return currentNode.isEnd;
        }

        if(specialSymbolsSet.has(word[index])) {
            for(const childKey of currentNode.children.keys()) {
                const ans = this.searchWithSpecialSymbolsHelper(
                    currentNode.children.get(childKey)!,
                    word,
                    index+1,
                    specialSymbolsSet
                );
                if(ans === true) {
                    return true;
                }
            }
            return false;
        } else {
            if(!currentNode.children.has(word[index])) {
                return false;
            } else {
                return this.searchWithSpecialSymbolsHelper(
                    currentNode.children.get(word[index])!,
                    word,
                    index+1,
                    specialSymbolsSet
                );
            }
        }
    }
}