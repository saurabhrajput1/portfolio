	/* $ sign means you are grabbing something from document object model (DOM)*/
	const $list = document.querySelectorAll("ul li");
	
	$list.forEach((node)=>{
		console.log("nodes: " + node);
		node.addEventListener("mousedown", function(event){
			//event.preventDefault();
			const value = node.innerText.trim();
			const $result = document.querySelector(".result-box");
			const resultText = $result.innerText.trim();
			/* Add logic for all the button action
			   e.g. C will clear all the text
			*/
			if(resultText == "0" || resultText== "undefined" || resultText== "Infinity"){
				$result.innerText = "";
			}
			
			if(value == "="){
				let solution = eval(resultText);
				$result.innerText = solution;
				return true;
			}
			
			if(value.toLowerCase() == "c" ){
				$result.innerText = "";
				return true;
			}
			
			$result.append(value);
			
			
			//$result.innerText = value; 
			//console.log("clicked value: "+ value);
		})
	})