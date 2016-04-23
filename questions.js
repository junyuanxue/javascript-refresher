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
  return [[array[0], array[1]], [array[0], array[2]], [array[1], array[2]]];
}

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(element) {
    return array.indexOf(element) > 2;
  });
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  array = array.map(function(element) {
    return element.split('').reverse().join('');
  });
  return array.sort().map(function(element) {
    return element.split('').reverse().join('');
  });
}

var getFirstHalf = function(string) {
  var endIndex = Math.ceil(string.length / 2);
  return string.slice(0, endIndex);
}

var makeNegative = function(number) {
  return Math.abs(number) * (-1);
}

var numberOfPalindromes = function(array) {
  var palindromes = array.filter(function(string) {
    return string === string.split('').reverse().join('');
  });
  return palindromes.length;
}

var shortestWord = function(array) {
  var shortest = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  }
  return shortest;
}

var longestWord = function(array) {
  var longest = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}

var sumNumbers = function(array) {
  return array.reduce(function(sum, value) { return sum + value; }, 0);
}

var repeatElements = function(array) {
  return [array, array].reduce(function(a, b) {
    return a.concat(b);
  });
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  var sum = array.reduce(function(sum, value) { return sum + value; }, 0);
  return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var elements = [];
  for (var i = 0; i < array.length && array[i] <= 5; i++) {
    if (array[i] <= 5) {
      elements.push(array[i]);
    }
  }
  return elements;
}

var convertArrayToObject = function(array) {
  var object = {};
  for(var i = 0; i < array.length; i += 2) {
    object[array[i]] = array[i+1];
  }
  return object;
}

var getAllLetters = function(array) {
  var splitWords = array.map(function(word) {
    return word.split('');
  });

  var letters = splitWords.reduce(function(a, b) {
    return a.concat(b);
  });

  var uniqueLetters = letters.filter(function(letter, index, letters) {
    return letters.indexOf(letter) == index;
  });

  return uniqueLetters.sort();
}

var swapKeysAndValues = function(object) {
  newObject = {};
  for (var key in object) {
    newObject[object[key]] = key;
  }
  return newObject;
}

var sumKeysAndValues = function(object) {
  var array = [];
  for (var key in object) {
    array.push(parseInt(key));
    array.push(object[key]);
  }
  return array.reduce(function(sum, value) { return sum + value; }, 0);
}

var removeCapitals = function(string) {
  var noCaps = string.split('').filter(function(letter) {
    return letter !== letter.toUpperCase() || letter === ' ';
  });
  return noCaps.join('');
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return '0' + day + '/0' + month + '/' + year;
}

var getDomainName = function(string) {
  var domain = string.replace(/.*@/, "").replace(/.com/,"");
  return domain;
}

var titleize = function(string) {
  var words = string.split(' ');
  var title = [];
  for (i = 0; i < words.length; i++) {
    if (i > 0 && (words[i] === 'the' || words[i] === 'and' && words[i-1].slice(-1) !== '.')) {
      title.push(words[i]);
    } else {
      var cap = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      title.push(cap);
    }
  }
  return title.join(' ');
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
