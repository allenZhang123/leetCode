#461. Hamming Distance

##Original Problem

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```
##Solution

“汉明距离”，一个较为著名的问题，给定两个整数，求出这两个数字的二进制中位数不同的个数。比如上面的1和4，在第0位和第2位数字不同，因此这个汉明距离就是2。

解法： 比较两个二进制数字中不一样的数据，其实可以直接将两个数字取异或，然后再求出异或结果的二进制形式中有多少个1即可。

[有多种办法判断二进制中多少个1](./算法.md)

```
var hammingDistance = function(x, y) {
    var z = x ^ y;
    var count = 0;
    var flag = 1;
    while (flag) {
        if(flag & z){
            count++;
        }
        flag = flag << 1;
    }
    return count;
};
```
#476. Number Complement

##Original Problem

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

```
Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. 
So you need to output 2.
```

```
Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. 
So you need to output 0.
```

##Solution

**思路：** 
如果我们能知道该数最高位的1所在的位置，就可以构造一个长度和该数据所占位置一样长的一个掩码mask，然后概述和mask进行异或即可。

例如：5的二进制是101，我们的构造的掩码为mask=111，两者异或则为010，即是所要的结果。

```
var findComplement = function(num) {
    var temp = num;
    var mask = 1;
    while (temp > 0)
    {
        temp = temp >> 1;
        mask = mask << 1;
    }
    return num ^ (mask-1);
};
```
#557. Reverse Words in a String III

##Original Problem
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

##Solution
将字符串先打断为单词数组，再将单词打断为字母数组，然后将字母数组翻转，最后拼接成字符串。

```
var reverseWords = function(s) {
	// 单词数组
    var arr = s.split(' ');
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
    	 // 字母数组
        var arrWord = arr[i].split('');
        // 字母数组翻转
        arrWord.reverse();
        // 字母数组拼接
        tempArr.push(arrWord.join(''));
    }
    return tempArr.join(' ');
};
```
#561. Array Partition I

##Original Problem

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4.
```

Note:

n is a positive integer, which is in the range of [1, 10000].

All the integers in the array will be in the range of [-10000, 10000].

##Solution

就是给2n个数分组，两两一组，使用所有组中小的那个数加起来和最小。 

那么就是先将所有数排序，然后就是以排序后的值2个一组分组，然后取的就是两个中前一个的索引对应的值。

```
var arrayPairSum = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var result = 0;
    for (var i = 0; i < nums.length; i+=2) {
        result += nums[i];
    }
    return result;
};
```

#566. Reshape the Matrix

##Original Problem

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
```
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
```

Example 2:

```
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
```
 
Explanation:

There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.

##solution 



```
var matrixReshape = function(nums, r, c) {
    // create a queue
    var queue = [];
    for (var i = 0; i < nums.length; i++) {
        queue = queue.concat(nums[i]);
    }
    
    // 判断是否重塑矩阵条件
    if(queue.length !== r * c) {
        return nums;
    }
    
    // 将queue排序成新的矩阵
    var result = [];
    for (var a = 0; a < r; a ++) {
        result[a] = [];
        for (var j = 0; j < c; j ++) {
            result[a].push(queue.shift());
            //result[a][j] = queue.shift(); // no speed diff
        }
    }
    return result;
};
```
#575. Distribute Candies

##Original Problem

Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

Example 1:

```
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 
```

Example 2:

```
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 
```

Note:

The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].

##Solution

设糖果总数为N，种类为M
 
妹妹分得的糖果数量为N/2 

为了使妹妹得到的种类数最多，优先将每个种类的糖果分一个给妹妹。
 
如果N/2 >= M , 妹妹每种糖果都可以拿到一个 

如果N/2 < M，妹妹最多只能拿到N/2种糖果。

```
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
    // 糖果种类大于糖果数量一半时，妹妹糖果最多一半种糖果
    if (kinds > candies.length / 2) {
        return candies.length / 2;
    } else {
    // 当糖果种类数量不足一半时，妹妹糖果最多kinds种
        return kinds;
    }
};
```
#500. Keyboard Row

##Original Problem

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

![](https://leetcode.com/static/images/problemset/keyboard.png)

Example 1:

```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```
Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

##Solution

找出某字符串，此字符串的每一个字母都要在键盘的同一行

```
var findWords = function(words) {
  var keyArr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  var result = [];
  for (var i = 0; i < words.length; i++) {
    for (var z = 0; z < keyArr.length; z++) {
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
```

#412. Fizz Buzz

##Original Problem

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

```
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```
##Solution

```
var fizzBuzz = function(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0 && i % 5 !==0) {
      arr.push('Fizz');
    } else if (i % 3 !== 0 && i % 5 ===0) {
      arr.push('Buzz');
    } else {
      arr.push('' + i);
    }
  }
  return arr;  
};
```

#496. Next Greater Element I

##Original Problem

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```
Example 2:
```
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
```
Note:

All elements in nums1 and nums2 are unique.

The length of both nums1 and nums2 would not exceed 1000.

##Solution

找到nums1[i]在nums2中想等的元素nums2[j]，并判断nums2[j]之后的元素是否大于nums1[i],选出第一个大于nums1[i]的元素，若素有元素都不大于nums1[i]，则输出-1

```
var nextGreaterElement = function(findNums, nums) {
  var result = [];
  for (var i = 0; i < findNums.length; i++) {
    var flag = false;
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] === findNums[i]) {
        for (var z = j+1; z < nums.length; z++) {
          if (nums[z] && nums[z] > findNums[i]) {
            result.push(nums[z]);
            flag = true;
            break;
          }
        }
      }
    }
    if (!flag) {
      result.push(-1)
    }
  }
  return result;
};
```