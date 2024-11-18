
const sortableList = document.querySelector(".sortable-list");
const data = [
    {
      image: "images/img-1.jpg",
      name: "Kristina Zasiadko"
    },
    {
      image: "images/img-2.jpg",
      name: "Gabriel Wilson"
    },
    {
        image: "images/img-3.jpg",
        name: "Ronelle Cesicon"
    },
    {
        image: "images/img-4.jpg",
      name: "James Khosravi"
    },
    {
        image: "images/img-5.jpg",
        name: "Annika Hayden"
    },
    {
        image: "images/img-6.jpg",
        name: "Donald Horton"
    }
];

(function display() {
    data.forEach((item) => { 
      // Create a new <li> element
      let li = document.createElement("li");
      li.classList.add("item");
  
      // Set the inner HTML for the list item
      li.innerHTML = `
        <div class="details" draggable="true">
          <input type="text" value="${item.name}" readonly>
        </div>
        <i class="uil uil-draggabledots"></i>`;
  
      // Append the list item to the sortable list
      document.querySelector(".sortable-list").append(li);
  
      // Reference to the input field
      const input = li.querySelector("input");
  
      // Add dragstart event listener
      li.addEventListener("dragstart", () => {
        setTimeout(() => li.classList.add("dragging"), 0);
      });
  
      // Add dragend event listener
      li.addEventListener("dragend", () => li.classList.remove("dragging"));
  
      // Enable input editing on focus
      input.addEventListener("dblclick", () => {
        input.removeAttribute("readonly")
          input.focus(); // Automatically focus the input after enabling it
      });
  
      // Disable input editing on Enter key press
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
        input.setAttribute("readonly", "readonly");

        }
      });
    });
  })();
  



        
        
const initSortableList = (e) => {
    // e.preventDefault();
    const draggingItem = document.querySelector(".dragging");

    // Getting all items except currently dragging and making array of them
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Finding the sibling after which the dragging item should be placed
            let nextSibling = siblings.find(sibling => {
                return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
            });     

    // Inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
