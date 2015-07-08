// listener




		
var tabs = document.getElementsByClassName('tabs');


for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", handle_tab_click);
}

function handle_tab_click() {
	document.getElementById("about").style.display = 'none';
	document.getElementById("contact").style.display = 'none';
	document.getElementById("portfolio").style.display = 'none';
	// this = li object
	// example: <li class="tabs"><a href="#about">About</a></li>
	// this.childNodes gives array of anchor tag.
	// this.childNodes[0] <a href="#about">About</a>
	// "#about"
	var content_id = this.childNodes[0].getAttribute('href').slice(1);
	
	document.getElementById(content_id).style.display = 'block';
}
//
//.addEventListener("click", function(){
//	//get var link = href.value
//  var link = document.getElementsByTagName('li');
//  console.log(link);
//  var selectedLink = link[0].childNodes[0].getAttribute('href');
//  console.log(selectedLink);
//});
//
//
// function getHash(url) {
//   var hashPos = url.lastIndexOf ( '#' );
//   return url.substring( hashPos + 1);
// }