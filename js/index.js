//Write your Javascript code here
console.log("Shoppinglist")

function plus(a,b){
    return a+b;
}

let result = plus(3,4);
console.log(result);

function findnode(id){
    let node = document.getElementById(id);
    node.style.color = "red";
    node.style.backgroundColor = "black";
    node.style.fontSize = "30px";
    node.style.fontWeight = "bold";

    //let nynode = document.createElement(type);
    //nynode.innerHTML = "I am a new node";
    //nynode.style.color = "blue";
    //document.body.appendChild(nynode);

    return node;
}

//let newnode = findnode("2","li");
//console.log("New node is:");
//console.log(newnode);

function CreateLiElement(itemId, className, item){
    let li = document.createElement("li");
    li.setAttribute("id",itemId);
    li.setAttribute("class",className);
    let textNode = document.createTextNode(item);
    li.appendChild(textNode);
    return li;
}

function ChangeClass(itemId,newClass){
    let item = document.getElementById(itemId)
    item.setAttribute("class",newClass)
    return item
}

let newli = CreateLiElement("4","healthy","Milk");
console.log("New li element:");
console.log(newli);

// Add the new <li> to the DOM, e.g., to the body or a <ul> element
document.body.appendChild(newli);

ChangeClass(2,"healthy");
console.log("Item class changed:");
console.log(document.getElementById(2));