let count = 0
let counter_hold = 0
let pause_button = document.querySelector('#pause')
let counter_disp = document.querySelector('#counter')
let main_timer
let plus_button = document.querySelector('#plus')
let minus_button = document.querySelector('#minus')
let heart_button = document.querySelector('#heart')
let like_list = document.querySelector(".likes")
let numbers_liked = {}
let comment_form = document.querySelector('#comment-form')
let comment_field = document.querySelector('#comment-input')


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
		heart_button.disabled = true
		counter_hold = count
		clearInterval(main_timer)
		pause_button.innerText = "resume"
	} else {	
		plus_button.disabled = false
		minus_button.disabled = false
		heart_button.disabled = false
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
	if (numbers_liked[count]) {
		numbers_liked[count] += 1
		let li = document.getElementById(count)
		li.innerHTML = `${count} has been liked ${numbers_liked[count]} times`
		like_list.appendChild(li)
	} else {
		numbers_liked[count] = 1
		let li = document.createElement('li')
		li.setAttribute("id", `${count}`)
		li.innerHTML = `${count} has been liked ${numbers_liked[count]} time`
		like_list.appendChild(li)
	}

// Add comments via form
comment_form.addEventListener("submit", function(e){
	const new_comment = document.createElement('p') //creates a new paragraph for each comment
	new_comment.innerText = comment_field.value // sets the individual comment string equal to what is written in the comment field
	e.currentTarget.reset() // clears the form after submitting it
})
	

})
