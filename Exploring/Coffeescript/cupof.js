// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function() {
    var answer, button, buttonFive, buttonFour, buttonThree, buttonTwo, cities, cityInput, cityName, fruits, input, inputted, inputtedWord, target, targetFive, targetFour, targetThree, targetTwo, word;
    button = $('#buttonOne');
    target = $('#targetOne');
    button.click(function() {
      return target.text("You have clicked the button!");
    });
    buttonTwo = $('#buttonTwo');
    targetTwo = $('#targetTwo');
    buttonTwo.click(function() {
      var numberOne, numberTwo, one, two;
      one = $('#numberOne');
      two = $('#numberTwo');
      numberOne = parseInt(one.text(), 10);
      numberTwo = parseInt(two.text(), 10);
      return targetTwo.text(numberOne + numberTwo);
    });
    buttonThree = $('#buttonThree');
    targetThree = $('#targetThree');
    input = $('#word');
    word = input.text().toLowerCase();
    buttonThree.click(function() {
      if (word !== "apple") {
        return targetThree.text("No it doesn't");
      } else {
        return targetThree.text("Yes it does!");
      }
    });
    buttonFour = $('#buttonFour');
    targetFour = $('#targetFour');
    fruits = ["apple", "banana", "peach", "pineapple"];
    answer = "No it isn't";
    inputted = $('#wordTwo');
    inputtedWord = inputted.text().toLowerCase();
    buttonFour.click(function() {
      var fruit, _i, _len;
      for (_i = 0, _len = fruits.length; _i < _len; _i++) {
        fruit = fruits[_i];
        if (fruit === inputtedWord) {
          answer = "Yes it is!";
        }
      }
      return targetFour.text(answer);
    });
    buttonFive = $('#buttonFive');
    targetFive = $('#targetFive');
    cities = {
      'dordrecht': 'This is where I live',
      'rotterdam': 'This is where I study'
    };
    cityInput = $('#wordThree');
    cityName = cityInput.text().toLowerCase();
    return buttonFive.click(function() {
      var city, what, _results;
      _results = [];
      for (city in cities) {
        what = cities[city];
        if (city === cityName) {
          _results.push(alert(what));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
  });

}).call(this);
