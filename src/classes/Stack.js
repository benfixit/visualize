class Stack {
    #dataStore;
    #top;

    constructor(){
        this.#dataStore = [];
        this.#top = 0;
    }

    push(element){
        this.#dataStore[this.#top++] = element;
    }

    pop(){
        if (this.#top > 0) {
            return this.#dataStore[--this.#top];
        }
    }

    peek(){
        return this.#dataStore[this.#top - 1];
    }

    clear(){
        this.#top = 0;
    }

    length(){
        return this.#top;
    }

    getData(){
        return this.#dataStore.slice(0, this.#top);
    }
}

export default Stack;