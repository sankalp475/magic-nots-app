window.onload = (function(){
	shownNots();
}())
// if user add nots  set it to local storage 
let addbtn = document.getElementById('AddBtn');
addbtn.addEventListener('click',function(){
   
	let addtext = document.getElementById('Add_nots_text');
	let TitleElem = document.getElementById('set_nots_title')
	let nots = localStorage.getItem('nots');
	if(nots == null) {
		notsobj = [];
	} else {
		notsobj = JSON.parse(nots);
	}
    
	let ElemObj = {
		notstitle: TitleElem.value,
		notstext: addtext.value
	}
	notsobj.push(ElemObj);
	localStorage.setItem('nots', JSON.stringify(notsobj));
	if (addtext.value == null) {
		addtext.value = "enter some text to search"
	} else {
		addtext.value = "";
	}
	if (TitleElem.value == null) {
		TitleElem.value = "enter some text to search"
	} else {
		TitleElem.value = "";
	}
	shownNots();
})
// function to show element from local storage 
function shownNots() {
	let nots = localStorage.getItem('nots');
	if (nots == null) {
		notsobj = [];
	} else {
		notsobj = JSON.parse(nots);
	}
	let html = ``;
	
	notsobj.forEach(function(element,index) {
		html+= ` 
		    <div class="notsCard card my-3 mx-3" id="set_nots_style" style="width: 18rem;">
				<div class="card-body" id="_set_imp_nots">
					<h5 class="card-title">${element.notstitle}</h5>
					<p class="card-text">${element.notstext}</p>
					<button onclick="deleteNote(this.id)"  class="btn btn-primary" id="${index}">Delete nots</button>
					<i class="fa fa-star-o" style=" position: relative; left: 40%; "  id="icon" aria-hidden="true"></i>
				</div>
			</div>
		`;
	})
	let notselm = document.getElementById("set_nots_card");

	if(notsobj.length != 0) {
		notselm.innerHTML = html;
	} else {
		notselm.innerHTML = `
		   <p style="color:red; font-size: 1.3rem;"> No nots is hear add nots first</p>
		`;
	}
	
}
// function to delete node 
function deleteNote(index) {
	let nots = localStorage.getItem('nots');
	if (nots == null) {
		notsobj = [];
	} else {
		notsobj = JSON.parse(nots);
	}
	notsobj.splice(index, 1);
	localStorage.setItem('nots', JSON.stringify(notsobj));
	shownNots();
}

searchtext = document.querySelector('.searchtext');
searchtext.addEventListener('input', function(){
	let inputvalue = searchtext.value.toLowerCase();
	let notecards = document.querySelectorAll('.notsCard');
	Array.from(notecards).forEach(function(element){
		let cardtext = element.getElementsByTagName('p')[0].innerText;

		if (cardtext.includes(inputvalue)) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	})
	
})

let searchbox = document.querySelector('.form-inline');
searchbox.addEventListener('mouseout', function () {
	if (searchtext.value == null) {
		searchtext.value = "enter some text to search"
	} else {
		searchtext.value =  "";
	}
}) 


// seting it important ; 
let icon  = document.querySelectorAll('#icon');
let inpnots = document.querySelectorAll('#_set_imp_nots');





