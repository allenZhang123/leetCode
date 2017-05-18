#461. Hamming Distance

##原题

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
##解法

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

##原题

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

##解法

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

##原题
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

##解法
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


