class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{

    constructor(arr){
        if(!arr) return;
        console.log(arr);
        this.root = this.buildTree(arr, true);
    }


    #buildTree(arr, isFirst){
        if(arr.length < 2) return arr[0];
        if(isFirst) arr = [...new Set(arr)].sort((a,b) => a - b);
        console.log(arr);
        let midId = Math.floor(arr.length/2);
        
        let node = new Node(arr[midId]);
        node.left = this.buildTree(arr.slice(0, midId), false);
        node.right = this.buildTree(arr.slice(midId+1), false); 

        return(node);
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

let tree = new Tree([2,4,6,7,4,5,9,10,3]);
console.log(tree);
