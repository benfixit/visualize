class Queue {
    #dataStore;

    constructor(){
        this.#dataStore = [];
    }

    enqueue(element){
        this.#dataStore.push(element);
    }

    dequeue(){
        if (this.#dataStore.length > 0){
            return this.#dataStore.shift();
        }
    }

    front(){
        return this.#dataStore[0];
    }

    back(){
        return this.#dataStore[this.#dataStore.length - 1];
    }

    empty(){
        return this.#dataStore.length === 0;
    }

    getData(){
        return this.#dataStore;
    }
}

export default Queue;