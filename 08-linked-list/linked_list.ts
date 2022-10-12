class LLNode<T> {
  value: T;
  next: LLNode<T> | null;

  constructor(value: T, next: LLNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
    private head: LLNode<T> | null = null;
    private tail: LLNode<T> | null = null;
    
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