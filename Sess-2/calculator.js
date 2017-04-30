class Calculator {
	constructor(layerName) {
		this.layer = document.getElementById(layerName);
		window[layerName + "_calculator"] = this;
		
		this.layer.innerHTML = 
			"Tollid: <input type='text' id='" + layerName + "_box' /> "+
			"<input type='button' value='Sentimeetriteks' "+
			"onClick='" + layerName + "_calculator.calculate();' /> "+
			"<div id='" + layerName + "_vastus'></div>";
		
		this.box = document.getElementById(layerName + "_box");
		this.responseArea = document.getElementById(layerName + "_vastus");
	}
	
	calculate() {
		this.responseArea.innerHTML = parseFloat(this.box.value) * 2.54;
	}
}

class Calculator2 {
	constructor(layerName) {
		this.layer = document.getElementById(layerName);
		window[layerName + "_calculator"] = this;
		
		this.layer.innerHTML = 
			"Raadius: <input type='text' id='" + layerName + "_box' /> "+
			"<input type='button' value='Ringi pindala' "+
			"onClick='" + layerName + "_calculator.calculate();' /> "+
			"<div id='" + layerName + "_vastus'></div>";
		
		this.box = document.getElementById(layerName + "_box");
		this.responseArea = document.getElementById(layerName + "_vastus");
	}
	
	calculate() {
		this.responseArea.innerHTML = (Math.pow(parseFloat(this.box.value), 2) * Math.PI).toFixed(2);
	}
}