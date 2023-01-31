class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = new Node("head")
    }

    find(item){
        let currentNode = this.head;

        while (currentNode && currentNode.value !== item){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    /**
     * @todo throw an error if unable to insert
     * @param {*} newItem 
     * @param {*} item 
     */
    insert(newItem, item){
        const newNode = new Node(newItem);
        const currentNode = this.find(item);

        if (currentNode){
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }

    // remove(item){

    // }

    getData(){
        let currentNode = this.head;
        const dataStore = [];

        while(currentNode.next){
            dataStore.push(currentNode.next.value);
            currentNode = currentNode.next;
        }

        return dataStore;
    }
    
}

export default LinkedList;