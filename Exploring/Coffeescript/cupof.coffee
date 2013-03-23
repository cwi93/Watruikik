$(document).ready ->
	#ik ben nu aan het editten *Chi-Wai
	#//////////test////////////

	
	# Function for clicking

	button = $ '#buttonOne'
	target = $ '#targetOne'
	
	button.click -> target.text "You have clicked the button!"


	# Function for counting

	buttonTwo = $ '#buttonTwo'
	targetTwo = $ '#targetTwo'

	buttonTwo.click ->

		one = $ '#numberOne'
		two = $ '#numberTwo'

		numberOne = parseInt(one.text(), 10)
		numberTwo = parseInt(two.text(), 10)

		targetTwo.text numberOne + numberTwo


	# Function for using if/else

	buttonThree = $ '#buttonThree'
	targetThree = $ '#targetThree'

	input = $ '#word'
	word = input.text().toLowerCase()

	buttonThree.click -> 

		if word isnt "apple"

			targetThree.text "No it doesn't"

		else

			targetThree.text "Yes it does!"


	# Function for using for-loop

	buttonFour = $ '#buttonFour'
	targetFour = $ '#targetFour'

	fruits = ["apple", "banana", "peach", "pineapple"]
	answer = "No it isn't" #Standard answer

	inputted = $ '#wordTwo'
	inputtedWord = inputted.text().toLowerCase()

	buttonFour.click ->

		for fruit in fruits

			if fruit is inputtedWord

				answer = "Yes it is!"

		targetFour.text answer


	# Function for associate arrays

	buttonFive = $ '#buttonFive'
	targetFive = $ '#targetFive'

	cities = 'dordrecht' : 'This is where I live', 'rotterdam' : 'This is where I study'

	cityInput = $ '#wordThree'
	cityName = cityInput.text().toLowerCase()

	buttonFive.click ->

		for city, what of cities

			if city is cityName

				alert what

	# Playing with functions

	
		
