// listener




		
document.getElementById('tabs').addEventListener("click", function(){
	//get var link = href.value
  var link = document.getElementsByTagName('li');
  console.log(link);
  var selectedLink = link[0].childNodes[0].getAttribute('href');
  console.log(selectedLink);
});

document.getElementById("about").style.display = 'block';
document.getElementById("contact").style.display = 'none';
document.getElementById("portfolio").style.display = 'none';
// function getHash(url) {
//   var hashPos = url.lastIndexOf ( '#' );
//   return url.substring( hashPos + 1);
// }