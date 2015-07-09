
// store all h2 attrs (inside div#accordion) in a var
var tabs = document.getElementsByTagName('h2');

// array of all the divs that are inside accordion
var contentDivs = document.getElementById("accordion").getElementsByTagName('div');

// loop thru each, giving them a click
for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", handle_tab_click);
}	

// handle_tab_click loops thru each div and hides them.
// this loop will make sure that the first content will always show when page loads
for (var n = 1; n < contentDivs.length; n++) {
	contentDivs[n].style.display = 'none';
}

function handle_tab_click() {
	// handle_tab_click loops thru each div and hides them... all of them this time
	for (var n = 0; n < contentDivs.length; n++) {
		contentDivs[n].style.display = 'none';
	}
	
	// now we store the element (a div) after the h2 the user has clicked.
	var div_after_h2 = this.nextElementSibling;
	// using the div we have stored, we change the display to block!
	div_after_h2.style.display = 'block';
}

