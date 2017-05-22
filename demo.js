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
console.log(matrixReshape(arr, r, c));
