// Sample tree data
const relations = [
    "Parent",
    "Child",
    "Spouse",
    "Sibling",
    "Grandparent",
    "Aunt/Uncle",
    "Cousin"
];
// Define the relations array and people object

let node=0

const people = [
    {
        id: node,
        name: "Firstnode",
        gender: "",
        relationship:"",
        referenceNode: "newchild0",
    }
]

// Function to populate the relationship select options dynamically


// Call the function to populate the options when the page loads
window.onload = function() {
    populateRelationshipOptions();

    // Add event listener to update the "Person" dropdown when the relationship changes
    document.getElementById("relationship").addEventListener("change", updatePersonOptions);
};


// Function to create a node with its children

// Call the renderTree function to build the tree on page load
// renderTree();

let familyTree = [];  // To store the family members

// Reference to the form and family tree container
const familyForm = document.getElementById("family-form");
const familyTreeContainer = document.getElementById("family-tree");



// Function to update the family tree UI


// Function to handle form submission and add a new family member
familyForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const relationship = document.getElementById("relationship").value;
    const reference = document.getElementById("person").value;

    let member={
        id: node,
        name: name,
        gender: gender,
        relationship: relationship,
        referenceNode: reference,
    }
    // Add the new member to the family tree array
    // relations.push(member.relationship);
    console.log(member)
    people.push(member)
    // Update the family tree UI
    addnode(member);
    node++;

    // Clear the form fields
    familyForm.reset();
});

function addnode(data) {
    const tree = document.querySelector(".tree");

    // Create the new node element
    const nd = document.createElement("div");
    nd.id = `child${node}`;
    nd.classList.add("node");

    // Populate the node with details and a line connector
    nd.innerHTML = `
        <div id="detail">${data.id}:${data.referenceNode}</div> 
        <h2>Name: ${data.name}</h2>
    `;
    console.log(data.referenceNode)

    // Insert the new node before the clicked node (which is 'newnode')
    const referenceNode = document.getElementById(`${data.referenceNode}`);
    if (data.id>=1) {
    console.log(referenceNode)
    const referenceNodePosition = referenceNode.getBoundingClientRect();
        
    // Set the position of the new node (nd) same as the reference node
    nd.style.top = `${referenceNodePosition.top}px`;
    nd.style.left = `${referenceNodePosition.left}px`;
        // Remove the reference node from DOM
        referenceNode.parentNode.appendChild(nd);
        referenceNode.parentNode.removeChild(referenceNode);

        // Insert the new node before the reference node's position
    } else {
        // If no reference node is found, append as a root node (if first)
        tree.insertBefore(nd, document.getElementById(`${data.referenceNode}`));

    }

    let member={
        name:`New Child 1 of child${node}`,
        referenceNode:`child1ofchild${node}`
    }
    people.push(member)
    
    // Create the 'Add' button (image) on the right of the node
    const imgRight = document.createElement("img");
    imgRight.src = "add.png";
    imgRight.id = `${member.referenceNode}`;
    imgRight.classList.add("draggable", "add-node");
    imgRight.alt = "Add Node (Right)";
    imgRight.style.position = "absolute"; 
    imgRight.style.left = `${nd.offsetLeft + nd.offsetWidth + 100}px`; 
    imgRight.style.top = `${nd.offsetTop + nd.offsetHeight / 2 - 25}px`;

    let member2={
        name:`New Child 2 of child${node}`,
        referenceNode:`child2ofchild${node}`
    }
    people.push(member2)
    const imgbottom = document.createElement("img");
    imgbottom.src = "add.png";
    imgbottom.id = `${member2.referenceNode}`;
    imgbottom.classList.add("draggable", "add-node");
    imgbottom.alt = "Add Node (Right)";
    imgbottom.style.position = "absolute"; 
  
    // Append the 'Add Node' button on the right of the node
    tree.appendChild(imgRight);
    tree.appendChild(imgbottom);


    // Create the connecting line for the right button
    const lineRight = document.createElement("div");
    lineRight.className = "line";
    tree.appendChild(lineRight);
    adjustLine(nd, imgRight, lineRight);

    // Create the connecting line for the bottom button
    const lineBottom = document.createElement("div");
    lineBottom.className = "line";
    tree.appendChild(lineBottom);
    
    adjustLine(nd, imgbottom, lineBottom);
    
    updatePersonOptions()
console.log(people)
    // Add click event to the bottom button to create child nodes

    // Increment node counter
}


