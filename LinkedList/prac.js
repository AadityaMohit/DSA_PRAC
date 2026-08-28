class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class LinkedList{

    constructor()
    {
        this.head=null;
    }

    append(data)
    {
        if(this.head==null)
        {
            this.head=new Node(data);
        }
        else{
            let current=this.head;
            while(current.next!=null)
            {
            current=current.next;
            }
            current.next=new Node(data);
        }
    }


    traversal()
    {
        let current=this.head;
        while(current!=null)
        {
            console.log(current.data)
            current=current.next;
        }
        
    }
}

const obj=new LinkedList();
obj.append(5);
obj.append(10);
obj.append(20);
obj.traversal();