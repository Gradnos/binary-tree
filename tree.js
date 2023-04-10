class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{

    constructor(arr){
        this.root = new Node();
        if(!arr) return;
        this.root = this.buildTree(arr, true);
    }


    buildTree(arr, isFirst){
        if(arr.length === 0) return null;
        if(arr.length === 1) return new Node(arr[0]);
        if(isFirst) arr = [...new Set(arr)].sort((a,b) => a - b);
        let midId = Math.floor(arr.length/2);
        
        let node = new Node(arr[midId]);
        node.left = this.buildTree(arr.slice(0, midId), false);
        node.right = this.buildTree(arr.slice(midId+1), false); 

        return(node);
    }

    insert(value){
        if(!this.root.value) return this.root = new Node(value);
        
        let current = this.root;


        while(true){
            if(value > current.value){
                if(current.right === null) return current.right = new Node(value);
                current = current.right;
            } else if(value < current.value){
                if(current.left === null) return current.left = new Node(value);
                current = current.left;
            } if(current.value === value) return null;

        }
    }


    delete(value){
        if(!this.root.value) return null;
        if(this.root.value === value) return this.root.value = null;
        let parent = this.root;
        let node;
        while(true){
            if(value > parent.value && parent.right){
                if(parent.right.value === value){
                    node = parent.right;
                    break;
                } else parent = parent.right;
            } else if(value < parent.value && parent.left){
                if(parent.left.value === value){
                    node = parent.left;
                    break;
                } else parent = parent.left;
            }
        }

        if(!node) return null;

        if(!node.right && !node.left){
            if(parent.left.value === value){
                parent.left = null;
                return value;
            } else if(parent.right.value === value){
                parent.right = null;
                return value;
            }
        }

        if(node.right && !node.left){
            node.value = node.right.value;
            node.right = null;
            return value;
        }

        if(node.left && !node.right){
            node.value = node.left.value;
            node.left = null;
            return value;
        }

        if(node.left && node.right){
            let afterP = node.right;
            let after;
            if(!afterP.left){
                node.value = node.right.value;
                node.right = null;
                return value;
            }

            while(afterP.left && afterP.left.left){
                afterP = afterP.left;
            }
            after = afterP.left;
            node.value = after.value;
            afterP.left = null;
            return value;
        }

        return null;
    }

    find(value){
        if(!this.root.value) return null;
        let current = this.root;
        while(current.value !== value){
            if(value > current.value){
                if(!current.right) return null;
                current = current.right;
            } if(value < current.value){
                if(!current.left) return null;
                current = current.left;
            }
        }
        return current;
    }

    levelOrder(fn){
        if(!this.root.value) return null;
        if(!fn){
            let arr = [this.root];
            let currentId = 0;
            let current = arr[currentId];
            while(current.left || current.right){
                if(current.left) arr.push(current.left);
                if(current.right) arr.push(current.right);
                currentId ++;
                if(currentId > arr.length - 1) break;
                current = arr[currentId];
            }
            return arr;
        }

        let arr = [this.root];
        let currentId = 0;
        let current = arr[currentId];
        while(true){
            fn(current);
            if(current.left) arr.push(current.left);
            if(current.right) arr.push(current.right);
            currentId ++;
            if(currentId > arr.length - 1) break;
            current = arr[currentId];
        }
        return null;
        
    }






}


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

let tree = new Tree([2,4,6,7,4,5,9,10,3]);
prettyPrint(tree.root);
tree.levelOrder(node => node.value = node.value * 2);
prettyPrint(tree.root);