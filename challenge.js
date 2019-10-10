let count = 0
let counter_hold = 0
let pause_button = document.querySelector('#pause')
let counter_disp = document.querySelector('#counter')
let main_timer
let plus_button = document.querySelector('#plus')
let minus_button = document.querySelector('#minus')
let heart_button = document.querySelector('#heart')
let like_list = document.querySelector(".likes")


document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");

myTimer(count);

});



function myTimer(x) {	
	main_timer = setInterval(function(){
			x++
			counter_disp.innerHTML = x
			count = x
	}, 1000)
}

// Pause button to pause the counter
pause_button.addEventListener("click", function() {
	if (pause_button.innerText == "pause") {
		plus_button.disabled = true
		minus_button.disabled = true
		counter_hold = count
		clearInterval(main_timer)
		pause_button.innerText = "resume"
	} else {	
		plus_button.disabled = false
		minus_button.disabled = false
		pause_button.innerText = "pause"
        myTimer(counter_hold)
	}
})

// Increase the counter
plus_button.addEventListener("click", function() {
	counter_hold = count
	clearInterval(main_timer)
	count++
	counter_disp.innerHTML = count
	myTimer(count)
})

// Decrease the counter
minus_button.addEventListener("click", function() {
	counter_hold = count
	clearInterval(main_timer)
	count--
	counter_disp.innerHTML = count
	console.log(count)
	myTimer(count)
})

// Click the heart (aka: "like") button
heart_button.addEventListener("click", function() {
	heart_button.onclick = clicks++
	let li = document.createElement('li')
	li.innerHTML = 
	like_list.appendChild()
})
