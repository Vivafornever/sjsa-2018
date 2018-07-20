window.onload = function(){
	// var link = document.getElementsByTagName("a")[0];
	// console.log(link.href);

	// var img = document.getElementsById("first_image");
	// console.dir(img);
	// cosole.log(img);

//     var paragraphs = document.getElementsByTagName("p");

//     //vmetnuvanje na elementi pomegju, menuvanje redosled
//     document.body.insertBefore(paragraphs[2],paragraphs[0]);
//     console.log(paragraphs);
var list = document.getElementsByTagName("ul")[0];
console.dir(list.children);

for(var i = 0; i<list.children.length; i++){
	var single_item = list.children[i];
	for (var j = 0; j <single_item.children.length; j++){
		var single_item_inside = single_item.children[j];

//proveruvame dali child/ili bilo koe od children e LINK "A" i ako e da ni go otvori vo google.com

		if(single_item_inside.nodeName == "A"){
			single_item_inside.href = "https://www.google.com";
			single_item_inside.innerHTML = "<b>Google</b>";

		}
	}
}
var list = document.getElementsByClassName("my_list")[0];
console.dir(list.children);

for(var i = 0; i<list.children.length; i++){
	var single_item = list.children[i];


	for (var j = 0; j <single_item.children.length; j++){
		var single_item_inside = single_item.children[j];



		if(single_item_inside.nodeName == "IMG"){
			single_item_inside.src ="imgs/giraffe.jpg";
			single_item_inside.src ="imgs/mungos.jpg";
			
		    }
	    }
    }
    function count(selector){
    	return document.querySelectorAll(selector).length;
    }

    	
    	console.log(count("p"));
    	console.log(count(".animal"));

    	var name = document.querySelectorAll(".name")[0];
    	name.classList.add("red");
    	name.setAttribute("id","test");
    	name.style.color = "yellow";
    	name.style.fontSize = "50px";

    	var name = document.querySelectorAll("h1")[0];
    	var btn = document.querySelectorAll("button")[0];

    	btn.addEventListener("click", function(){
    		name.classList.toggle("show_name");

    	})

    
}