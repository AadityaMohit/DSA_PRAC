// Array implementation of stack
class stack {
    constructor() {
        this.items=[];
    }


    AddElement(data)
    {
        this.items.push(data);
    }

    RemoveElement()
    {
        if(this.items.length==0)
        {
            console.log("Stack is empty");
        }
        else{
            this.items.pop();
        }
    }

    Traverse()
    {

        let i=0;
        if(this.items.length==0)
        {
            console.log("Stack is empty");
        }
        else {
           for ( i=0 ; i<this.items.length ; i++)
           {
            console.log(this.items[i]);
         
           }
        }
    }
}

const object = new stack();
object.AddElement(10);
object.AddElement(20);
object.AddElement(30);
object.RemoveElement();
object.Traverse();

// Linked list implementation of stack

class Node{
    constructor(data) {
        this.data=data;
        this.next=null ;
    }

    A 
}

class LinkedList{
    constructor()
    {
        this.head=null;
    }

    AddElement(data)
    {
        const newNode = new Node(data);
        if(this.head==null)
        {
            this.head=newNode;
        }
        else
        {
            let current = this.head;
            while(current.next!=null)
            {
                current=current.next;
            }
            current.next=newNode;
        }
    }
}