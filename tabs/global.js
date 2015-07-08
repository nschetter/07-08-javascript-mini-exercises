/*
 * DECLARING VARIABLES that have arrays 
 */

var tabLinks = new Array();
var contentDivs = new Array();


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



/*
 * function showTab()
 *
 * whenever a tab link is clicked. It highlights the selected tab and shows the associated content div. 
 * It also dims all other tabs and hides all other content divs
 *
 * returns Boolean
 */ 
function showTab() {
	  // The function extracts the selected ID from the clicked link's href attribute and stores it in selectedId.
      var selectedId = getHash( tabLink.getAttribute('href') );
	  // It then loops through all the IDs.
      for ( var id in contentDivs ) {
		  // Highlight the selected tab, and dim all others.
        if ( id == selectedId ) {
          tabLinks[id].className = 'selected';
          contentDivs[id].className = 'tabContent';
		  // Also show the selected content div, and hide all others.
        } else {
          tabLinks[id].className = '';
          contentDivs[id].className = 'tabContent hide';
        }
      }

      // Stop the browser following the clicked link and adding the link to the browser history.
      return false;
    }
    
//This helper function returns the first child of a specified element that matches a specified tag name. init() calls this function to retrieve the a (link) element inside each list item in the tabs list.
/* function getFirstChildWithTagName 
 *  
 * element - specified element inside each list item
 * tagName - specified tag name of the element
 *           
 * Returns first child of element matching tagName  
 */    
function getFirstChildWithTagName(element, tagName) {
  for (var i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeName == tagName)
      return element.childNodes[i];
  }
    };


//The getHash() helper function returns the portion of a URL after any hash symbol. Used by init() and showTab() to extract the content div ID referenced in a tab link.

function getHash(url) {
  var hashPos = url.lastIndexOf ( '#' );
  return url.substring( hashPos + 1);
    };














