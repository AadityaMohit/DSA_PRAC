// Node represents each element of the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList manages the complete linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);

        // If list is empty
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Traverse to the last node
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        // Attach new node at the end
        current.next = newNode;
    }

    // Traverse the linked list
    traversal() {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Create a linked list
const list = new LinkedList();

// Add nodes
list.append(5);
list.append(10);
list.append(20);

// Traverse
list.traversal();