
function BinaryTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;
  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) { 
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      } 
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function(key) {
      var newNode = new Node(key);
      if(root === null) {
        root = newNode;
      } else {
        insertNode(root, newNode);
      }
    
  };

  // Binary Tree Inorder Traversal LDR

  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  }

  // Binary Tree preorder traversal DLR

  var preOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
  }

  this.preOrderTraverse = function(callback) {
  preOrderTraverseNode(root, callback);

  }

  // Binary Tree postorder traversal LRD
  var postOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
  }
  this.postOrderTraverse = function(callback) {
  postOrderTraverseNode(root, callback);
  }

  // search
  var minNode = function(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node.key;
  }
  return null;
  }
  this.min = function() {
  return minNode(root);
  }
  var maxNode = function(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  return null;
  }
  this.max = function() {
  return maxNode(root);
  }

  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }
  this.search = function(key) {
  return searchNode(root, key);
  }
  var findMinNode = function(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }
  return null;
  }
  // remove

  var removeNode = function(node, key) {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    var aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux);
    return node;
  }
  }
  this.remove = function(key) {
  root = removeNode(root, key);
  } 

}
//setup
// var binaryTree = new BinaryTree();

// var nodesForAlien = [];
// var callback = function(node) {
//   nodesForAlien.push(node);
// }
// binaryTree.preOrderTraverse(callback);
// var alienNodeSelect = Math.floor(Math.random() * 9);
// nodesForAlien[alienNodeSelect].selected = true;


var callback = function(node) {
  console.log(node);
}

//initial alien
var nodesForAlien = [];
for (let i = 0; i < 10; i++) {
  nodesForAlien.push(Math.floor(Math.random()*281));
}

// nodesArray for selected
var nodesForSelected = [];
for (let i = 0; i < 10; i++) {
  nodesForSelected.push({selected:false});
}

// activate first alien
var alienNodeSelect = Math.floor(Math.random() * 9);
nodesForSelected[alienNodeSelect].selected = true;

var binaryTree = new BinaryTree();
nodesForAlien.forEach(function(key){
  binaryTree.insert(key)
});
//var alienX = nodesForAlien[alienNodeSelect].key;

// Game Section
var alienX = 20;
var alienY = 20;
var guessX = 0;
var guessY =0;
var shotsRemaining = 8;
var shotsMade = 0;
var gameState = "";
var gameWon = false;


var cannon = document.querySelector("#cannon");
var alien = document.querySelector("#alien");
var missile = document.querySelector("#missile");
var explosion = document.querySelector("#explosion");

var inputX = document.querySelector("#inputX");
var inputY = document.querySelector("#inputY");
var output = document.querySelector("#output");

var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keydownHandler, false);

function clickHandler() {
  validateInput();
}

function keydownHandler(event) {
  if (event.keyCode === 13) {
    validateInput();
  }
} 

function validateInput() {
  guessX = parseInt(inputX.value);
  guessY = parseInt(inputY.value);
  
  if (isNaN(guessX) || isNaN(guessY)) {
    output.innerHTML = "please enter a number";
  } else if (guessX > 300 || guessY > 300) {
    output.innerHTML = "X, Y must less than 300";
  } else {
    playGame();
  }
}

function playGame() {
  shotsRemaining = shotsRemaining -1;
  shotsMade = shotsMade + 1;
  gameSate = "remaining missile:  " + shotsRemaining;

  guessX = parseInt(inputX.value);
  guessY = parseInt(inputY.value);
  var alienNode = binaryTree.search(guessX);
  if (alienNode !== null && alienNode.selected  === true) {
    if (guessY > alienY && guessY <= alienY + 20) {
      gameWon = true;
      endGame();
    }
  } else {
    output.innerHTML = "You Missed! " + " " + gameState;
    if (shotsRemaining < 1) {
      endGame();
    }
  }
  if (!gameWon) {
    
    alienNodeSelect = Math.floor(Math.random() * 9);
    // nodesForAlien[alienNodeSelect].selected = true;
    alienX = nodesForAlien[alienNodeSelect];
    //console.log("here is alien X");
    alienY +=30;
  }

  render();
  console.log("X: " + alienX);
  console.log("Y: " + alienY);
}

function render() {
  alien.style.left = alienX + "px";
  alien.style.top = alienY + "px";

  cannon.style.left = guessX + "px";

  missile.style.left = guessX + "px";
  missile.style.top = guessY + "px";

  if (gameWon) {
    explosion.style.display = "block";
    explosion.style.style.left = alienX + "px";
    explosion.style.style.top = alienY + "px";

    alien.style.display = "none";
    missile.style.display = "none";
  }
}

function endGame() {
  if (gameWon) {
    output.innerHTML = "Hit! You save the earth!";
  } else {
    output.innerHTML = "failed!";
  }
  button.removeEventListener("click", clickHandler, false);
  button.disabled = true;

  window.removeEventListener("keydown", keydownHandler, false);
  inputX.disabled = true;
  inputY.disabled = true;
}
