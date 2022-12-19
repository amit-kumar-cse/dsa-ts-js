class LLNode<T> {
  constructor(public value: T, public next: LLNode<T> | null = null) {}
}

class LinkedList<T> {
    private head: LLNode<T> | null = null;
    private tail: LLNode<T> | null = null;
    //it will be a good idea to maintain the size of the list also.
    
    constructor(values: T[]) {
        values.forEach(value => this.append(value));
    }

    public print(): void {
        let currentNode: LLNode<T> | null = this.head;
        console.log(`Here is the list`);
        while (currentNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(`Printing list is completed`);
    }

    public append(value: T): void {
        const newNode = new LLNode(value);
    
        if (this.tail) {
            this.tail.next = newNode;
        }   
        this.tail = newNode;
    
        if (!this.head) {
            this.head = newNode;
        }
    }
    
    public prepend(value: T): void {
        const newNode = new LLNode(value, this.head);
    
        this.head = newNode;
    
        if (!this.tail) {
            this.tail = newNode;
        }
    }
    
    public delete(value: T): void {
        if (!this.head) {
        return;
        }
    
        while (this.head && this.head.value === value) {
        this.head = this.head.next;
        }
    
        let currentNode = this.head;
    
        while (currentNode?.next) {
        if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
        }
    
        if (this.tail?.value === value) {
        this.tail = currentNode;
        }
    }
    
    public find(value: T): LLNode<T> | null {
        if (!this.head) {
            return null;
        }
    
        let currentNode: LLNode<T> | null = this.head;
    
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
        
            currentNode = currentNode.next;
        }
    
        return null;
    }
    
    public toArray(): T[] {
        const nodes: T[] = [];
    
        let currentNode: LLNode<T> | null = this.head;
    
        while (currentNode != null) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }
    
        return nodes;
    }

    public insert(val: T, k: number){
        let temp = new LLNode(val);
        if(this.head === null) {
            this.head = temp;
            this.tail = temp;
            return;
        }
		if(k <= 0) {
			temp.next = this.head;
			this.head = temp;
		}
    
        //handling the middle and end cases together :-D
		let itr = this.head;
        let index = 0;
		while(index < k-1 && itr.next !== null) {
			itr = itr.next;
			index++;
		}
        if(itr.next === null) {
            this.tail = temp;
        }
		temp.next = itr.next;
		itr.next = temp;
	};
}

const list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
list.print();