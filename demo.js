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
console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]));
