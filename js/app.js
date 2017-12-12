function roundNum() {
         		
         		var num = document.getElementById("user_input1").value;
         		var round = document.getElementById("user_input").value;
         		var remainder = Math.round(num/round);
         
         		var superResult = round * remainder;
         
         			if (remainder == 0) {
         			superResult = round;
         		
         			}
         
         			if (num <=0 || round <=0) {
         				superResult = "Pick a Positive Number";
         			}
         
	       			document.getElementById('display').innerHTML = superResult;
	    	}