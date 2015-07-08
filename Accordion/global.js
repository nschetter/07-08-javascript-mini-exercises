
//store all h2 attrs (inside div#accordion) in a var and loop thru each, giving them a click


var tabs = document.getElementsByTagName('h2');
var contentDivs = document.getElementById("accordion").getElementsByTagName('div');


for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", handle_tab_click);
}	

function handle_tab_click() {
	contentDivs[0].style.display = 'none';
	contentDivs[1].style.display = 'none';
	contentDivs[2].style.display = 'none';
	contentDivs[3].style.display = 'none';
	var content_id = this.childNodes[0].getAttribute('href').slice(1);
	
	document.getElementById(content_id).getElementByTagName('div')[0].style.display = 'block';
}


