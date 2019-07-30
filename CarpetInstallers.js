// JavaScript Document
document.onclick = calculate();


function calculate(){
	"use strict";
	var distance;
	var width;
	var Length;
	document.write("test");
	document.getElementById("distance").value = distance;
	document.getElementById("length").value = Length;
	document.getElementById("width").value = width;

	var area = Length*width;
	var price = area * 6;

	if (area >= 300){
		price -= price *(1/10);
	}

	if (distance > 0){
		price += 2.5 * distance;
	}
}

