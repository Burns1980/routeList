let routeName = document.querySelector('#route');
let locationRt = document.querySelector('#location');
let rating= document.querySelector('#rating');
let grade = document.querySelector('#grade');
let style = document.querySelector('#notes');
// The button to submit a route
let addRoute = document.querySelector('.addRoute');
let tbody = document.querySelector('tbody');
addRoute.addEventListener('click', newRoute);

function newRoute(e) {
//  e.preventDefault();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  th.textContent = routeName.value;
  td1.textContent = locationRt.value;
  td2.textContent = rating.value + ' ' + grade.value;
  td3.textContent = style.value;
  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
}


// let tableEntry = {};
//
// //The expressions below create a new element based on the argument tag name and
// //sets the corresponding property value of tableEntry.
// tableEntry.rtName = document.createElement("th");
// tableEntry.location = document.createElement("td");
// tableEntry.rating = document.createElement("td");
// tableEntry.style = document.createElement("td");
//
// //These expressions adds/replaces the text inside the tags so it would now be the same
// //as in html: ex: tableEntry.rtName now equals <th>Yellow Spur</th>
// tableEntry.rtName.textContent = "Yellow Spur";
// tableEntry.location.textContent = "Eldorado Springs, CO";
// tableEntry.rating.textContent = "5.9 Grade III";
// tableEntry.style.textContent = "Face, Crack, Slab";
//
// //Append each element to to an element that already exists in the DOM. They are
// //appended as a child of getElementById, to the last child node.
// document.querySelector("#row4").appendChild(tableEntry.rtName);
// document.querySelector("#row4").appendChild(tableEntry.location);
// document.querySelector("#row4").appendChild(tableEntry.rating);
// document.querySelector("#row4").appendChild(tableEntry.style);
// //console.log(tableEntry.rtName);
