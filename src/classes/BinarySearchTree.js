class Node {
    data;

    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    getData(){
        return this.data;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data, null, null);

        if (this.root === null){
            this.root = newNode;
            // return;
        } else {

        let currentNode = this.root;
        let parent;

        while(true){
            parent = currentNode;
            if (data < currentNode.data){
                // go left
                currentNode = currentNode.left;
                if (currentNode === null){
                    console.log("left - ", data)

                    parent.left = newNode;
                    break;
                }
            } else {
                // go right
                currentNode = currentNode.right;
                if (currentNode === null){
                    console.log("right - ", data)

                    parent.right = newNode;
                    break;
                }
            }
        }
    }
    }

    // inOrder(node){
    //     if (!node){
    //         return;
    //     }

    //     this.inOrder(node.left);
    //     console.log(node.getData());
    //     this.inOrder(node.right);
    // }
}

const inOrder = (node) =>{
    if (!(node === null)){
        inOrder(node.left);
        console.log(node.getData());
        inOrder(node.right);
    }
}

// export default BinarySearchTree;

const nums = new BinarySearchTree();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

// console.log("nums::: ", nums)

console.log("Inorder traversal: ");
inOrder(nums.root);