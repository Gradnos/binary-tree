class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{

    buildTree(arr){



    }

    insert(value){
        if(!this.root) return this.root = new Node(value);
        
        let current = this.root;


        while(true){
            if(value > current.value){
                if(current.right === null) return current.right = new Node(value);
                current = current.right;
            } else if(value < current.value){
                if(current.left === null) return current.left = new Node(value);
                current = current.left;
            } if(current.value === value) return;

        }



    }







}

let tree = new Tree();

console.log(tree.insert(5));
console.log(tree.insert(5));
console.log(tree.insert(2));
console.log(tree.insert(1));
console.log(tree.insert(3));
console.log(tree.insert(9));
console.log(tree.insert(10));
console.log(tree);