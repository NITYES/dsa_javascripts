
class Node{
    constructor(element){
        this.element=element;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }


    add(elements){
        const element=new Node(elements);
        let current;
        if(this.head==null){
            this.head=element;
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=element
        }
        this.size++;
    }

    insertAt(element,index){
        const node=new Node(element);
   // const node=new Node()
        if(index<0 || index > this.size){
            console.log('pleaseenter valid index')
        }else{
            if(index==0){
              //  this.head=node;
              console.log('inside tis')
                node.next=this.head;
                this.head=node
            }else{
             let current,previous;
             current=this.head;
             let it=0;
             while(it < index){
                it++;
                previous=current;

                current=previous.next;
             }

             previous.next=node;
             node.next=current
            }
            this.size++;
        }
    }

    removeFrom(index){
       if(index<0 || index >= this.size){
        console.log('please enter valid index');
       }else{
        if(index==0){
            this.head=null;
            this.size--;
        }else{
            let current,previous;
            current=this.head;
            let it=0;
            while(it<index){
                it++
              previous=current;
              current=previous.next
            }

            previous.next=current.next;

        }
                    this.size--;

       }
    }

    removeElement(element){
        let current=this.head;
        let prev=null;
        while(current != null){ // null defines linkedlist is empty or have reached the last nodes
            if(current.element==element){
                  if(prev==null){
                    this.head=current.next;
                  }else{
                    prev.next=current.next

                  }
                  this.size--
                  return current

            }
            prev=current;
            current=current.next
        }

        return -1

    }

}

const linkedlist=new LinkedList();

console.log('lisan',linkedlist);
linkedlist.add(12)
console.log('head',linkedlist.head)

linkedlist.insertAt(23,0)
linkedlist.insertAt(233,1)
linkedlist.add(300)
linkedlist.removeFrom(1)
linkedlist.removeElement(12)
linkedlist.add(2444)
console.log(JSON.stringify(linkedlist))




