var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return element.charAt(0) === "a";
  });
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(element) {
    var letter = element.charAt(0);
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1
  });
}

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element !== null;
  });
}

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    return element !== null && element !== false;
  });
}

var reverseWordsInArray = function(array) {
  return array.map(function(element) {
    return element.split('').reverse().join('');
  });
}

var everyPossiblePair = function(array) {
  var array = array.sort();
  var first = array[0];
  var rest  = array.slice(1);
  var pairs = rest.map(function (element) {
        return [first, element];
      });

  return pairs.concat(everyPossiblePair(rest));
}

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(element) {
    return array.indexOf(element) > 2;
  });
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
