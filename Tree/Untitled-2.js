// let newnode = document.getElementById("newnode");
// newnode.addEventListener("click", addnode.bind(this, newnode));

// let node = 1;

// function addnode(data) {
//     const tree = document.querySelector(".tree");

//     // Create the new node element
//     const nd = document.createElement("div");
//     nd.id = `child${node}`;
//     nd.classList.add("node");

//     // Populate the node with details and a line connector
//     nd.innerHTML = `
//         <div id="line"></div> 
//         <span class="detail">
//             <h2>Name: ${data.name}</h2>
//         </span>
//     `;

//     // Insert the new node before the clicked node (which is 'newnode')
//     tree.insertBefore(nd, newnode);

//     // Create the 'Add' button (image) on the right of the node
//     const imgRight = document.createElement("img");
//     imgRight.src = "add.png";
//     imgRight.id = `newnodeRight${node}`;
//     imgRight.classList.add("draggable", "add-node");
//     imgRight.alt = "Add Node (Right)";
//     imgRight.style.position = "absolute"; 
//     imgRight.style.left = `${nd.offsetLeft + nd.offsetWidth + 100}px`; 
//     imgRight.style.top = `${nd.offsetTop + nd.offsetHeight / 2 - 25}px`;

//     // Append the 'Add Node' button on the right of the node
//     tree.appendChild(imgRight);

//     // Create the connecting line for the right button
//     const lineRight = document.createElement("div");
//     lineRight.className = "line";
//     tree.appendChild(lineRight);
//     adjustLine(nd, imgRight, lineRight);

//     // Add click event to the right button to create child nodes
//     imgRight.addEventListener("click", () => {
//         addnode(nd);  // Add node to the right
//         tree.removeChild(imgRight);  // Remove the right button after node creation
//     });

//     // Append the 'Add Node' button at the bottom of the node

//     // Create the connecting line for the bottom button
//     const lineBottom = document.createElement("div");
//     lineBottom.className = "line";
//     tree.appendChild(lineBottom);
//     adjustLine(nd, newnode, lineBottom);

//     // Add click event to the bottom button to create child nodes

//     // Increment node counter
//     node++;
// }

// // Function to adjust the line between two nodes
// function adjustLine(from, to, line) {
//     var fT = from.offsetTop + from.offsetHeight / 2;
//     var tT = to.offsetTop + to.offsetHeight / 2;
//     var fL = from.offsetLeft + from.offsetWidth / 2;
//     var tL = to.offsetLeft + to.offsetWidth / 2;

//     var CA = Math.abs(tT - fT);
//     var CO = Math.abs(tL - fL);
//     var H = Math.sqrt(CA * CA + CO * CO);
//     var ANG = 180 / Math.PI * Math.acos(CA / H);

//     if (tT > fT) {
//         var top = (tT - fT) / 2 + fT;
//     } else {
//         var top = (fT - tT) / 2 + tT;
//     }
//     if (tL > fL) {
//         var left = (tL - fL) / 2 + fL;
//     } else {
//         var left = (fL - tL) / 2 + tL;
//     }

//     if (
//         (fT < tT && fL < tL) ||
//         (tT < fT && tL < fL) ||
//         (fT > tT && fL > tL) ||
//         (tT > fT && tL > fL)
//     ) {
//         ANG *= -1;
//     }
//     top -= H / 2;
//     line.style["-webkit-transform"] = "rotate(" + ANG + "deg)";
//     line.style["-moz-transform"] = "rotate(" + ANG + "deg)";
//     line.style["-ms-transform"] = "rotate(" + ANG + "deg)";
//     line.style["-o-transform"] = "rotate(" + ANG + "deg)";
//     line.style["-transform"] = "rotate(" + ANG + "deg)";
//     line.style.top = top + "px";
//     line.style.left = left + "px";
//     line.style.height = H + "px";
// }


function populateRelationshipOptions() {
    const relationshipSelect = document.getElementById("relationship");

    // Clear existing options
    relationshipSelect.innerHTML = "";

    // Loop through the relations array and create an <option> for each one
    relations.forEach(relation => {
        const option = document.createElement("option");
        option.value = relation.toLowerCase();  // Use lowercase for the value
        option.textContent = relation;  // Set the display text
        relationshipSelect.appendChild(option);  // Append the option to the select dropdown
    });

    // Call the function to populate the "person" dropdown when the page loads
    updatePersonOptions();
}

// Function to update the "Person" dropdown based on the selected relationship
function updatePersonOptions() {
    const relationshipSelect = document.getElementById("relationship");
    const personSelect = document.getElementById("person");

    // Get the selected relationship value (in lowercase)
    const selectedRelation = relationshipSelect.value;

    // Clear existing options in the person dropdown
    personSelect.innerHTML = "";

    // If a valid relationship is selected, populate the person dropdown
        people.forEach(person => {
            const option = document.createElement("option");
            option.value = person.referenceNode ;
            option.textContent = person.name;
            personSelect.appendChild(option);  // Append the option to the "person" dropdown
        });
    }


    function adjustLine(from, to, line) {
        var fT = from.offsetTop + from.offsetHeight / 2;
        var tT = to.offsetTop + to.offsetHeight / 2;
        var fL = from.offsetLeft + from.offsetWidth / 2;
        var tL = to.offsetLeft + to.offsetWidth / 2;
    
        var CA = Math.abs(tT - fT);
        var CO = Math.abs(tL - fL);
        var H = Math.sqrt(CA * CA + CO * CO);
        var ANG = 180 / Math.PI * Math.acos(CA / H);
    
        if (tT > fT) {
            var top = (tT - fT) / 2 + fT;
        } else {
            var top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            var left = (tL - fL) / 2 + fL;
        } else {
            var left = (fL - tL) / 2 + tL;
        }
    
        if (
            (fT < tT && fL < tL) ||
            (tT < fT && tL < fL) ||
            (fT > tT && fL > tL) ||
            (tT > fT && tL > fL)
        ) {
            ANG *= -1;
        }
        top -= H / 2;
        line.style["-webkit-transform"] = "rotate(" + ANG + "deg)";
        line.style["-moz-transform"] = "rotate(" + ANG + "deg)";
        line.style["-ms-transform"] = "rotate(" + ANG + "deg)";
        line.style["-o-transform"] = "rotate(" + ANG + "deg)";
        line.style["-transform"] = "rotate(" + ANG + "deg)";
        line.style.top = top + "px";
        line.style.left = left + "px";
        line.style.height = H + "px";
    }

    function createTree(node) {
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
    
        // Adding expand button
        const expandBtn = document.createElement('span');
        expandBtn.classList.add('expand-btn');
        expandBtn.innerText = '+';
        nodeElement.appendChild(expandBtn);
    
        // Node title
        const nodeTitle = document.createElement('h2');
        nodeTitle.innerText = node.name;
        nodeElement.appendChild(nodeTitle);
    
        // If the node has children, create them recursively
        if (node.children && node.children.length > 0) {
            const childrenContainer = document.createElement('div');
            childrenContainer.classList.add('children');
    
            // Loop through each child and recursively add them to the container
            node.children.forEach(child => {
                const childNode = createTree(child);
                childrenContainer.appendChild(childNode);
            });
    
            nodeElement.appendChild(childrenContainer);
    
            // Toggle visibility of children on click
            expandBtn.addEventListener('click', () => {
                const children = childrenContainer;
                const isExpanded = children.style.display === 'block';
                children.style.display = isExpanded ? 'none' : 'block';
                expandBtn.innerText = isExpanded ? '+' : '-';
                expandBtn.classList.toggle('open', !isExpanded);
            });
        }
    
        return nodeElement;
    }
    
    // Function to render the tree
    function renderTree() {
        const treeContainer = document.getElementById('tree-container');
        
        // Render root node with special class 'root'
        const rootNode = createTree(treeData);
        rootNode.classList.add('root');
        
        treeContainer.appendChild(rootNode);
    }
    