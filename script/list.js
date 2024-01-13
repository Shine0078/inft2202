/*
	Name: Samuel Abraham
	Course : Web Development - CSS
	Student id: 100870571
	Program : Computer Programming 
	Descriptions: this file contain the list.js website
	Date: 2024-01-12
*/

// ADDING ITEMS TO START AND END OF LIST                        #END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemContent = document
// Add text node to element
newListItem.appendChild(listItemContent);
// Add element end of list
groceryList.appendChild(newListItem);


// ADD NEW ITEM START OF LIST                                     #START OF LIST
// Create element
const NewListItems = document.createElement("Tomato");
// Create text node
const ListItemsContent = document
// Add text node to element
NewListItems.appendChild(ListItemsContent);
// Add element to list
groceryList.appendChild(NewListItems);

// All <li> elements
var listItems = groceryList.getElementsByClassName("apple");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
for (let i = 0; i < listItems.length; i++) {    
// Change class to cool
    listItems.item(i).classList.add("cool");
  
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var heading = document.querySelector("h2");
// h2 text
// No. of <li> elements
var itemCount = groceryList.getElementsByTagName("li").length;
// Content
var headingContent = "Buy groceries -->Total Items: " + itemCount ;
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = headingContent;