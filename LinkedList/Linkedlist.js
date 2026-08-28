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



    Search(data)
    {
         let current=this.head;
        while(current!=null)
        {
            if(current.data==data)
            {
                console.log("Data found in linked list")
            }
            current=current.next;

        }

    }

    InsertAtBeg(data)
    {
          const newNode = new Node(data);
          newNode.next = this.head;
          this.head = newNode;
 
    }

    InsertAtEnd(data)
{
    const newNode= new Node(data);
    if(this.head===null)
    {
        this.head=newNode;
    }
    else{
        let current=this.head;
        while(current.next!==null)
        {
            current=current.next;
        }
        current.next=newNode;

    }


}

FindLastNode()
{
    let current=this.head;
    while(current.next!=null)
    {
        current=current.next;

    }
    console.log("Last node is",current.data)
    return current;
}

InsertAtPosition(data,position)
{
    let newNode=new Node(data);
    let current=this.head;
    let positionCounter=0;

    if(current==null)
    {
console.log("List is empty");
    }
    while(current!=null && positionCounter<position-2)
{
    current=current.next;
    positionCounter++;
}
newNode.next=current.next; 
current.next=newNode;
    }

    FastAndSlowPointer()
    {
        let slow=this.head;
        let fast=this.head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    
    }
    console.log("Middle node is", slow.data);
}

}

// Create a linked list
const list = new LinkedList();

// Add nodes
list.append(5);
list.append(10);
list.append(20);
list.Search(10);
list.InsertAtBeg(1);
list.InsertAtEnd(25);
list.FindLastNode();
list.InsertAtPosition(15,5);
    list.FastAndSlowPointer();
// Traverse
list.traversal();