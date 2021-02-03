// Check for Children Sum Property in a Binary Tree

class Node {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

// return 1, if children sum OK
function isSumProperty(node) {
    
    let leftdata;
    let rightdata;

    //base case
    if(node===null || (node.left===null && node.right===null))
        return true;
    
    // recursive case
    leftdata = node.left!=null ? node.left.val:0;
    rightdata = node.right!=null ? node.right.val:0;

    if(node.val===(leftdata+rightdata) && isSumProperty(node.left) && isSumProperty(node.right)){
        return true;
    }
}

let bt = new Node(10);
bt.left = new Node(8);
bt.right = new Node(2);
bt.left.left = new Node(3);
bt.left.right = new Node(5);
bt.right.left = new Node(2);

if(isSumProperty(bt)) 
        console.log("The given tree satisfies the",  
                    "children sum property ")  
    else
        console.log("The given tree does not satisfy", 
                   "the children sum property ") 

