document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");

myTimer();

});

let counter = 0

function myTimer(count) {
	let isPaused = false
	let counter_disp = document.querySelector('#counter')
	let counter_hold = 0
	let pause = document.querySelector('#pause')

	setInterval(function(){	
			counter++
			counter_disp.innerHTML = counter
	}, 1000)



	pause.addEventListener("click", function()) {
		if (isPaused == false) {
			isPaused = true
			counter_hold = counter
		} else {
			isPaused = false
			counter = counter_hold
			counter_disp.innerHTML = counter
			setInterval(function(){	
				counter++
				counter_disp.innerHTML = counter
		}, 1000)
		}

	}
}


