let parseTree = function(fileText) {	
	var result = "put your result here";	
	//your code goes here	
	//Store all data in an array. Each line represents element of an array
	var arrayOfNodes = fileText.split("\n");
	var weight = 0;
	for(var i=0;i<arrayOfNodes.length;i++) {
		weight = weight + calculateWeight(arrayOfNodes[i], weight);
	}

	result = weight;
	return result;
}

var currentBranchId = function(data) {
	var tempArray = [];
	tempArray = data.split(",");
	return tempArray[0];
}

var calculateWeight = function(data, tempWeight) {
	var tempArray = [];
	tempArray = data.split(",");
	for(var j=0; j<tempArray.length; j++) {
		if(j>1 && tempArray[j]>0) {
			tempWeight=tempWeight+parseInt(tempArray[j]);
		}
	}
	return tempWeight;
}

let readFile = function (evt) {
	let file = evt.target.files[0]; 

	if (file) {
	  let reader = new FileReader();
	  reader.onload = function(e) { 
		document.getElementById('result').innerHTML = parseTree(e.target.result);
	  }
	  reader.readAsText(file);
	} else { 
	  document.getElementById('result').innerHTML = "Failed to load file";
	}
}

window.addEventListener("load", function () {
	document.getElementById('fileInput').addEventListener('change', readFile, false);
}, false);