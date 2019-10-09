document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");

myTimer();

});

let count = 0
let counter_hold = 0

function myTimer(count) {
	let isPaused = false
	let counter_disp = document.querySelector('#counter')
	let pause = document.querySelector('#pause')

	let main_timer = setInterval(function(){
			count++
			counter_disp.innerHTML = count
	}, 1000)



	pause.addEventListener("click", function() {
		if (isPaused == false) {
			isPaused = true
			counter_hold = count
			clearInterval(main_timer)
			isPaused = false
			myTimer(counter_hold)
		}

	})
}


