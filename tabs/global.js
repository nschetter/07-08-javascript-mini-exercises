
/*
 * function init()
 *
 * sets up the tabs.
 */ 
function init(){
  var tabListItems = document.getElementById('tabs').childNodes;
  // loops through all the li elements in the tabs unordered list   (.childNodes grabs all li's in ul)
  for (var i = 0; i < tabListItems.length; i++) {
	// For each li element,
    if ( tabListItems[i].nodeName == "LI") {
      // it calls the getFirstChildWithTagName() helper function to retrieve the a link element inside.
      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A');
	  // Then it calls the getHash() helper function to extract the part of the link's URL after the hash;
	  // this is the ID of the corresponding content div. 
      var id = getHash( tabLink.getAttribute('href'));
	  // The link element is then stored by ID in the tabLinks array, 
      tabLinks[id] = tabLink;
	  // and the content div is stored by ID in the contentDivs array.
      contentDivs[id] = document.getElementById(id);
    }
  }
  
  var i = 0;
  // It assigns an onclick event handler function called showTab() to each tab link,
  for (var id in tabLinks) {
    tabLinks[id].onclick = showTab;
	//and highlights the first tab by setting its CSS class to 'selected'.
    tabLinks[id].onfocus = function() {this.blur()};
    if (i == 0) tabLinks[id].className = 'selected';
    i++;
  }
  var i = 0;
  // It hides all content divs
  for (var id in contentDivs) {
	// except the first by setting each div's CSS class to 'tabContent hide'.
    if (i != 0) contentDivs[id].className = 'tabContent hide';
    i++;
  }
}

















// function select_tab
//
//
// 
// return li#tab
function select_tab(){
	return liArray
}

function showTab(){
  
}

/* function display_text
 *
 * tab - compare tab with li#tab1 clicked 
 *
 * return changing text in div#display-window
 */ 

function display_text(tab) {
	var tab = select_tab()
	if (select_tab() == "tab-1") {
		document.getElementById("display-window").innerText = "This is Tab 1";
	} else if (select_tab() == "tab-2") {
		document.getElementById("display-window").innerText = "This is Tab 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	} else {
		document.getElementById("display-window").innerText = "This is Tab 3. more stuff";
	}
};