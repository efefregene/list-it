var items;
window.onload = function () {
	items = localStorage.getItem('list') || [];
	if (items.length > 0)
		items = JSON.parse(items);

	showList(items);
	deleteItem();
	finishTask();


};
var check;

//Saves state and value to localStorage
function saveToLocStorage() {
	localStorage.setItem('list', JSON.stringify(items));
}

//creates the JSON of every new input and calls the showList(listItems) function
function addItem() {
	var date = new Date(),
	newTask = {
		time: date.toDateString(),
		value: document.getElementById("inputValue").value,
		check: false
	};
	items.push(newTask);
	saveToLocStorage();

	document.getElementById("inputValue").value = "";
	showList(items);

}
//Deletes an item when Close Button is clicked
function deleteItem() {
	var listItemsNew = document.getElementsByClassName('close');
	for (var j=0; j < listItemsNew.length; j++) {
		listItemsNew[j].addEventListener('click', function(ev) {
			var id = this.getAttribute('id');
			var deleted = items.splice(id, 1);
			
			saveToLocStorage();
			showList(items);
		});	
	}
}



//Shows the value, time and Close button for every list created
function showList(listItems) {
	var list = "";
	for (var i=0; i < listItems.length; i++) {	
		list += "<li class='list-item "+ (listItems[i].check ? 'checked' : '') +"' id='" + i + "'>"+ listItems[i].value + " &nbsp;&nbsp;" + "<span class='date'>"
		+ listItems[i].time  +"</span>"+ "<span class='close' id='"+i+"'>x</span></li>";
		listItems[i].check;
	}
	
	document.getElementById('list-body').innerHTML = list;
	deleteItem();

}
//Deletes the entire List Array
function deleteAll() {
	items = [];
	showList(items);
	saveToLocStorage();
}





// Add a "checked" symbol when clicking on a list item
function finishTask() {
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
	  if (ev.target.tagName == 'LI') {
	  	var id = ev.target.getAttribute('id');
	  	items[id].check = document.getElementById(id).classList.toggle('checked');
	  	saveToLocStorage();
	  }

	}, false);
}


////////////
////// Efe's Code to be looked at and laughed at
////////////

// function newItem(){
// 	var li = document.createElement("li");
// 	var inputText =document.getElementById("inputValue").value;
// 	var tex = document.createTextNode(inputText);
// 	li.appendChild(tex);
// 	if (inputText === ""){
// 		alert("Input an item");
// 	}
// 	else{
// 		document.getElementById("list-body").appendChild(li);
// 	}

// 	document.getElementById("inputValue").value = "";

// 	var allLi = document.getElementsByTagName("li");
// 	allLi.className = "task-list";
// 	var span = document.createElement("span");
// 	var signs = document.createTextNode("x");
// 	span.className = "close";
// 	span.appendChild(signs);
// 	li.appendChild(span);

	
	
// 	var close = document.getElementsByClassName("close");
// 		for (var i = 0; i < close.length; i++) {
// 	  		close[i].onclick = function() {
// 	    	this.parentElement.style.display = "none";
// 	  		}
// 	}	
// }
		
		/*localStorage.setItem('list', list-body);	
  		localStorage.setItem('html', JSON.parse(html));
		localStorage.setItem(key, value);

		var retrievedObject = localStorage.getItem('list');

		console.log('retrievedObject: ', JSON.parse(retrievedObject));*/