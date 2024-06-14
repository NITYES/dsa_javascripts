

class Node{
    constructor(element){
         this.element=element;
         this.next=null;
         this.prev=null
    }
}


class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }


    // insertion before head
    addAtFront(element){
          let node=new Node(element);
          if(this.head !==null) {this.head.prev=node}
          node.next=this.head;
          this.head=node
          this.size++
    }

    // insertion in middle of node

    addNodeAtEnd(element){
        const node=new Node(element)
     if(this.head==null){
       this.head=node
     }else{
                let current=this.head;
          let previous=null;
           while(current !==null){
              
               previous=current
               current=current.next
                      }
                      previous.next=node
     }
     this.size++
    }

}

const ddl=new DoubleLinkedList();

ddl.addAtFront(1)
ddl.addAtFront(2)
ddl.addAtFront(3)
ddl.addAtFront(4);
ddl.addNodeAtEnd(10)



console.log(ddl)