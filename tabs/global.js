var liArray = document.querySelectorAll("li");


liArray.addEventListener(MouseEvent.CLICK, showTab);

function init(){
  var tabListItems = document.getElementById('tabs').childNodes;
  for (var i = 0; i < tabListItems.length; i++) {
    if ( tabListItems[i].nodeName == "LI") {
      var tabLink = getFirstChildWithTagName( tabListItems[i], 'A');
      var id = getHash( tabLink.getAttribute('href'));
      tabLinks[id] = tabLink;
      contentDivs[id] = document.getElementById(id);
    }
  }
  var i = 0;
  
  for (var id in tabLinks) {
    tabLinks[id].onclick = showTab;
    tabLinks[id].onfocus = function() {this.blur()};
    if (i == 0) tabLinks[id].className = 'selected';
    i++;
  }
  var i = 0;
  
  for (var id in contentDivs) {
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