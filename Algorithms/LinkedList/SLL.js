class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

class SLL{
    constructor(){
        this.head = null;
    }

    addFront(value){

        this.head = new Node(value, this.head);
    }

    removeFront(){

        let current = this.head;

        this.head = current.next;
    }

    frontValue(){

        let current = this.head;
        return current.data;
    }

    contains(value){

        let current = this.head;
        let count = 0;

        while (current) {
            if (current.data == value) {
              return true
            }
            count++;
            current = current.next;
          }

          return false;

    }

    length(){

        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
          }

          return count;

    }

    display() {
        let current = this.head;
    
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
    
}