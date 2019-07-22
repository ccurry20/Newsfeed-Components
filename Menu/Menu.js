/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  /*Pass the function an array as it's only argument.*/

/*Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/

/*Step 3: Using a DOM selector, select the menu button currently on the DOM.*/

/* Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself*/

/*Step 5: return the menu component.*/

/*Step 6: add the menu component to the DOM.*/
 
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const ul = document.createElement('ul');
  items.forEach(function(item) {
  var li = document.createElement('li');
  var text = document.createTextNode(item);
  li.appendChild(text);
  ul.appendChild(li);
  })
  //menuItems.forEach(item => {
    //for (var i = 0; i < items.length; i++) {
      //items[i] = document.createElement('li');
      //newMenu.textContent = item;
       //ul.appendChild(newMenu)
    
    //let newMenu = document.createElement('li');
    //newMenu.textContent = item;
    //ul.appendChild(newMenu);
  menu.appendChild(ul);
  return items; 
}
 
const toggleMenu = () => {
  menuBtn.classList.toggle("menu--open");
}

const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", toggleMenu);

const final = createMenu();
let header = document.querySelector(".header");
header.appendChild(final);
//document.querySelector(".header").appendChild(menu);




