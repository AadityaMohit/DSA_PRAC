// Node creation class
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }


}
// Node creation
let node2=new Node(10)
let node3=new Node(20)
let node1=new Node(5)

// Allocating the next pointer of each node
node1.next=node2;
node2.next=node3;
node3.next=null;

//  Adding head of the linked list
let head=node1;

// we created a pointer current which will point to the head of the linked list , so that we can traverse the linked list from head to end  without losing the head pointer means head will always point to the first node of the linked list and current will point to the current node of the linked list which we are traversing
let current = head;
// Traversing the linked list
while(current!=null)
{
    console.log('Manual traversal of linked list')
    if(current==null)
    {
        console.log("Linked list is empty")
    }
    console.log(current.data)
    current=current.next;
}
 
// lets wrap traveral in a method 

function Traversal(head)
{
    // traversal with method 
    let current = head; 
    while(current!=null)
    {
        console.log(current.data)
        current=current.next;
    }
}

Traversal(head)