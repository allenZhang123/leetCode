var reverseWords = function(s) {
    var arr = s.split(' ');
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        var arrWord = arr[i].split('');
        arrWord.reverse();
        tempArr.push(arrWord.join(''));
    }
    return tempArr.join(' ');
};

var arrayPairSum = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    console.log(nums);
    var result = 0;
    for (var i = 0; i < nums.length; i+=2) {
        result += nums[i];
    }
    return result;
};

var matrixReshape = function(nums, r, c) {
    var queue = [];
    var i, j, result = [];

    // create a queue from nums
    for (i = 0; i < nums.length; i++) {
        queue = queue.concat(nums[i]);
    }

    // The reshaped matrix need to be filled with ALL the elements
    // so if r*c not equal to queue.length, it means new matrix cannot be formed, return original arr
    if (queue.length !== r * c) {
        return nums;
    }

    for (i = 0; i < r; i++) {
        result[i] = [];
        for (j = 0; j < c; j++) {
            result[i].push(queue.shift());
            // result[i][j] = queue.shift();   // no speed diff
        }
    }

    return result;
};
var arr = [[1,2], [3,4]];
var r = 1
var c = 4

var distributeCandies = function(candies) {
    // 首先找出一共有多少种类糖果
    var kinds = 0;
    var map = {};
    for (var i = 0; i < candies.length; i ++) {
        if(map[candies[i]] === undefined) {
            kinds += 1;
            map[candies[i]] = candies[i];
        }
    }
    console.log(kinds);
    console.log(candies.length);
    if (kinds > candies.length / 2) {
        return candies.length / 2;
    } else {
        return kinds;
    }
};

var findWords = function(words) {
  var keyArr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  var result = [];
  for (var i = 0; i < words.length; i++) {
    for (var z = 0; z < keyArr.length; z++) {
      console.log(keyArr[z]);
      var flag = true;
      for (var j = 0; j < words[i].length; j++) {
        if (keyArr[z].search(words[i][j].toLowerCase()) === -1) {
          flag = false;
        }
      }
      if (flag) {
        result.push(words[i]);
        break;
      }
    }
  }
  return result;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
