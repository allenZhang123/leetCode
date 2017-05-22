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
