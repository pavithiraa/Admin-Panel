import React,{useState} from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "./helpers";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <rect width="50" height="40" x="-10" onClick={toggleNode} />
    <text fill="green" strokeWidth="1" x="10" y="30">
      {nodeDatum.data}
    </text>
  </g>
);

 
  
export default function BinaryTree() {
  // const [tree, setTree] = useState([]);
  const [translate, containerRef] = useCenteredTree();
  class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.children = [];
      this.children[0] = {
        data: left
      };
      this.children[1] = {
        data: right
      };
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        // console.log("this.root")
        return;
      } else {
        const searchTree = function (node) {
          if (data < node.data) {
            if (node.children[0].data === null) {
              node.children[0] = new Node(data);
              return;
            } else if (node.children[0].data !== null) {
              return searchTree(node.children[0]);
            }
          } else if (data > node.data) {
            if (node.children[1].data === null) {
              node.children[1] = new Node(data);
              return;
            } else if (node.children[1] != null) {
              return searchTree(node.children[1]);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
    findMin() {
      let current = this.root;
      while (current.children[0].data != null) {
        current = current.children[0];
      }
      return current.data;
    }
    findMax() {
      let current = this.root;
      while (current.children[1].data != null) {
        current = current.children[1];
      }
      return current.data;
    }
    find(data) {
      let current = this.root;
      while (current.data !== data) {
        if (data < current.data) {
          current = current.children[0];
        } else {
          current = current.children[1];
        }
        if (current.data == null) {
          return null;
        }
      }
      return current;
    }
    edit(data,newData){
      console.log("inside bst edit",data,newData)
      let current=this.root;
   while(current.data!==data){
     if(data<current.data){
       current=current.children[0];
     }
     else {
       current=current.children[1];
     }
     if(current.data==null){
       return null;
     }
   }
   console.log("current node for edit",current)
     current.data=newData;
     
   return current;
   }
    isPresent(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return true;
        } else if (data < current.data) {
          current = current.children[0];
        } else if (data > current.data) {
          current = current.children[1];
        }
      }
      return false;
    }
    // remove(data) {
    //   const removeNode = function (node, data) {
    //     if (node == null) {
    //       return null;
    //     }
    //     if (data === node.data) {
    //       // no children
    //       if (node.children[0].data === null && node.children[1].data == null) {
    //         return null;
    //       }
    //       // no left child
    //       if (node.children[0].data === null) {
    //         return node.children[1];
    //       }
    //       // no right child
    //       if (node.children[1].data === null) {
    //         return node.children[0];
    //       }
    //       // has two children
    //       var tempNode = node.children[1];
    //       while (tempNode.children[0].data !== null) {
    //         tempNode = tempNode.children[0];
    //       }
    //       node.data = tempNode.data;
    //       node.children[1] = removeNode(node.children[1], tempNode.data);
    //       return node;
    //     } else if (data < node.data) {
    //       node.children[0] = removeNode(node.children[0], data);
    //       return node;
    //     } else {
    //       node.children[1] = removeNode(node.children[1], data);
    //       return node;
    //     }
    //   };
    //   this.root = removeNode(this.root, data);
    // }
    remove(data){
      const removeNode=function(node,data){
        if(node==null){
          return null;
        }
        if(data===node.data){
          // no children
          if(node.children[0].data==null && node.children[1].data==null){
            return {};
          }
          // no left child
          if(node.children[0].data==null){
            node.children[0]={}
            return node.children[1];
          }
          // no right child
          if(node.children[1].data==null){
             node.children[1]={}
            return node.children[0];
          }
          // has two children
          var tempNode=node.children[1];
          while(tempNode.children[0].data!==null){
            tempNode=tempNode.children[0];
          }
          node.data=tempNode.data;
          node.children[1]=removeNode(node.children[1],tempNode.data);
          return node;
        }else if(data < node.data){
          node.children[0]=removeNode(node.children[0],data);
          return node;
        } else{
          console.log("node inside remove",node)
         
            node.children[1]=removeNode(node.children[1],data);

          
          return node;
        }
      }
      this.root=removeNode(this.root,data);
    }
  }
  const bst = new BST();
  bst.add(4);
  bst.add(2);
  bst.add(6);
  // bst.edit(6,25)
  // console.log(JSON.stringify(bst))
  var t=[];
  t.push(bst.root)
  console.log("my tree is",t);
  const [tree,setTree]=useState(t)
  const [value,setValue]=useState();
  const [editValue,setEditValue]=useState();
  // useEffect(()=>{
  //   setTree(t);
  // },[])
  console.log("tree in app",tree)

  const addNode=(e,value)=>{
    e.preventDefault();
       console.log("value inside addNode",value);
       bst.add(value)
       console.log("after add",JSON.stringify(bst.root))
       setTree(bst.root)
       setValue();
  }
  const deleteNode=(e,value)=>{
    e.preventDefault();
       console.log("value inside deleteNode",value);
       bst.remove(value)
       console.log("after removal",JSON.stringify(bst.root))
       setTree(bst.root)
       setValue();
  }
  const editNode=(e,value,newValue)=>{
    e.preventDefault();
       console.log("value, newValue inside editNode",value,newValue);
       bst.edit(value,newValue)
       console.log("after edit",JSON.stringify(bst.root))
       setTree(bst.root)
       setValue();
       setEditValue();
  }
  console.log("tree",JSON.stringify(bst.root))
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        pathFunc="elbow"
        data={tree}
      //  onNodeClick={(nodeDatum)=>console.log("nodeDatum",nodeDatum)}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
      />
      {/* <Bst/> */}
      <div style={{marginTop:"-60px"}}>
        <input type="number" 
        placeholder="enter new value"
        onChange={e=>setValue(e.target.value)}/>
        <button onClick={(e)=>addNode(e,value)}>Add</button>
        <button onClick={(e)=>deleteNode(e,value)}>Delete</button>
       <p> <input type="number" 
        placeholder="enter your value"
        onChange={e=>setEditValue(e.target.value)}/>
        <button onClick={e=>editNode(e,value,editValue) }>Edit</button>
        </p>
      
      </div>
    </div>
  );
}
