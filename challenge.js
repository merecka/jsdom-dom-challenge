document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");


myTimer();

});



function myTimer() {
	let count = 0
	let counter_hold = 0
	let counter_disp = document.querySelector('#counter')
	let pause_button = document.querySelector('#pause')
	let resume_button = document.querySelector('#resume')
	let isPaused = false
	let main_timer = setInterval(function(){
			count++
			counter_disp.innerHTML = count
	}, 1000)


	pause_button.addEventListener("click", function() {
		if (pause_button.innerText == "pause") {
			counter_hold = count
			clearInterval(main_timer)
			pause_button.innerText = "resume"
			pause_button.attr("id", "resume")
		}
	})


	resume_button.addEventListener("click", function() {
		if (resume_button.innerText == "resume") {
			counter_hold = count
			clearInterval(main_timer)
			resume_button.innerText = "pause"
			resume_button.attr("id", "pause")
		}
	})

}

