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

#463. Island Perimeter


##Original Problem

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

```
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
```

Explanation: The perimeter is the 16 yellow stripes in the image below:


![](https://leetcode.com/static/images/problemset/island.png)

##Solution

方法： 遍历1的个数乘以4是总边数，再减去相邻边条数乘以2，得到的便是周长

```
var islandPerimeter = function(grid) {
  var perimeter = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        // 过滤掉相邻边
        if (i !== 0 && grid[i-1][j] === 1) perimeter -= 2;
        if (j !== 0 && grid[i][j-1] === 1) perimeter -=2;
      }
    }
  }
  return perimeter;
};
```

#292. Nim Game

##Original Problem

You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. **Write a function to determine whether you can win the game given the number of stones in the heap**.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

##Solution

这是博弈论中极为经典的尼姆游戏。有总数为n的石头，每个人可以拿1~m个石头，两个人交替拿，拿到最后一个的人获胜。究竟是先手有利，还是后手有利？

```
1个石子，先手全部拿走； 
2个石子，先手全部拿走； 
3个石子，先手全部拿走； 
4个石子，后手面对的是先手的第1，2，3情况，后手必胜； 
5个石子，先手拿走1个让后手面对第4种情况，后手必败； 
6个石子，先手拿走2个让后手面对第4种情况，后手必败； 
……
```

容易看出来，只有当出现了4的倍数，先手无可奈何，其余情况先手都可以获胜。 （石子数量为4的倍数）

后手的获胜策略十分简单，每次取石子的数量，与上一次先手取石子的数量和为4即可； （石子数量不为4的倍数）先手的获胜策略也十分简单，每次都令取之后剩余的石子数量为4的倍数（4*0=0，直接拿光），他就处于后手的位置上，利用上一行的策略获胜。

```
var canWinNim = function(n) {
    // 若n是4的倍数，则后手必可以胜，其他情况先手都可以必胜
    if (n % 4 === 0) 
        return false;
    return true;
};
```
#485. Max Consecutive Ones

##Original Problem 

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

Note:

The input array will only contain 0 and 1.

The length of input array is a positive integer and will not exceed 10,000

##Solution

```
var findMaxConsecutiveOnes = function(nums) {
  var obj = {}; // 存放每次1连续出现的次数
  var count = 0; // 记录每次1连续出现的次数
  var flag = 0; // 用于标志0出现次数
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
      if (i === nums.length -1) {
        obj[flag] = count;
      }
    } else {
      obj[flag] = count;
      count = 0;
      flag += 1;
    }
  }
  var max = 0;
  for (var item in obj) {
    if (obj[item] > max) {
      max = obj[item];
    }
  }
  return max;
};
```
#136. Single Number

##Original Problem

Given an array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

##Solution

###S1
将数组的每个值与0取非，获得只有1个的数值

```
var singleNumber = function(nums) {
    var result = 0;
    // 将result与nums每个值取非，得到只出现一次的数
    for (var i = 0; i < nums.length; i ++) {
        result = result ^ nums[i];
    }
    return result;
};
```
###S2

用循环一次计算出每个数值出现的次数

```
var singleNumber = function(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
      if (obj[nums[i]] === undefined) {
        obj[nums[i]] = 1;
      } else {
        obj[nums[i]] = 2;
      }
    }
    console.log(obj);
    for (var item in obj) {
      if (obj[item] === 1) {
        return item
      }
    }
};
```

#521. Longest Uncommon Subsequence I

##Original Problem

Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Example 1:

```
Input: "aba", "cdc"
Output: 3
Explanation: The longest uncommon subsequence is "aba" (or "cdc"), 
because "aba" is a subsequence of "aba", 
but not a subsequence of any other strings in the group of two strings. 
```

Note:

Both strings' lengths will not exceed 100.

Only letters from a ~ z will appear in input strings.

##Solution

```
var findLUSlength = function(a, b) {
    // 相等返回-1， 不相等返回较长字符串
    if (a === b) {
        return -1;
    } else if (a.length > b.length) {
        return a.length;
    } else {
        return b.length;
    }
};
```

#520. Detect Capital

##Original Problem

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".

All letters in this word are not capitals, like "leetcode".

Only the first letter in this word is capital if it has more than one letter, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

Example 1:

```
Input: "USA"
Output: True
```
Example 2:

```
Input: "FlaG"
Output: False
```
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

##Solution

若全是大写 true； 若不全是大写，只要中间出现大写就是false.

```
var detectCapitalUse = function(word) {
  var allUp = true;
  var centerUp = false;
  // 首先判断第一个字母是否是大写
  if (word[0].toLowerCase() === word[0])
    allUp = false;
  // 在判断其他
  if (word.length > 1) {
    for (var i = 1; i < word.length; i ++) {
      if (word[i].toLowerCase() === word[i])
        allUp = false;
      else
        centerUp = true;
    }
  }
  if (allUp || (!allUp && !centerUp))
    return true;
  else
    return false;
};
```

#448. Find All Numbers Disappeared in an Array

##Original Problem

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

#Solution

将数组放进map中，然后将每个值一一对应

```
var findDisappearedNumbers = function(nums) {
  var obj = {};
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  for (var j = 1; j <= nums.length; j++) {
    if (obj[j] === undefined) {
      result.push(j);
    }
  }
  return result;
};
```

#599. Minimum Index Sum of Two Lists

##Original Problem

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:

```
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
```

Example 2:

```
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
```
Note:

The length of both lists will be in the range of [1, 1000].

The length of strings in both lists will be in the range of [1, 30].

The index is starting from 0 to the list length minus 1.

No duplicates in both lists.

##Solution

找出两个数组中相等的字符串，并计算相等字符串的索引值，输出最小所引值得字符串。

```
var findRestaurant = function(list1, list2) {
  var length1 = list1.length;
  var length2 = list2.length;
  var obj = {};
  var minLength = length1 < length2 ? length1 : length2;
  var maxLength = length1 > length2 ? length1 : length2;
  var minArr = [];
  var maxArr = [];
  var result = {};
  var temp = [];
  // 标记较长数组和较短数组
  if (minLength === length1) {
      minArr = list1;
      maxArr = list2;
  } else {
    minArr = list2;
    maxArr = list1;
  }
  // 将较短数组放进map中
  for (var i = 0; i < minLength; i++)
    obj[minArr[i]] = i;
  // 循环较长数组，并与map中的值比较是否相等
  for (var j = 0; j < maxLength; j++) {
    if (obj[maxArr[j]] !== undefined) {
      // 计算相等选项的索引和
      var num = obj[maxArr[j]] + j;
      // 如果map中已经存在此值，则将索引相等的值合并成数组
      if (result[num] !== undefined) {
        temp.concat(result[num]);
        temp.push(maxArr[j]);
      } else {
        temp = [maxArr[j]];
      }
      result[num] = temp;
    }
  }
  var minIndex = 9999;
  for (var item in result) {
    // 选出最小值
    if (minIndex > Number(item)) {
      minIndex = Number(item);
    }
  }
  return result[minIndex];
};
```
#Maximum Depth of Binary Tree

##Original Problem 

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

##Solution

找出二叉树中最长的分支

```
// 递归
var maxDepth = function(root) {
    if (root === null) 
        return 0;
    var branchLeft = maxDepth(root.left);
    var branchRigth = maxDepth(root.right);
    return branchLeft > branchRigth ? branchLeft + 1 : branchRigth + 1;
};
```

#389. Find the Difference

##Original Problem

Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

```
Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
```

##Solution

**方法一**
将字符串打断为数组，然后统计每个字符的出现次数，比较两个数组中字符的出现次数

```
var findTheDifference = function(s, t) {
  var sArr = s.split('');
  var tArr = t.split('');
  var mapS = {};
  var mapT = {};
  var length = tArr.length > sArr.length ? tArr.length : sArr.length;
  for (var i = 0; i < length; i++) {
    if (i < sArr.length) {
      if (mapS[sArr[i]] !== undefined) {
        mapS[sArr[i]] = mapS[sArr[i]] + 1;
      } else {
        mapS[sArr[i]] = 1;
      }
    }
    if (i < tArr.length) {
      if (mapT[tArr[i]] !== undefined) {
        mapT[tArr[i]] = mapT[tArr[i]] + 1;
      } else {
        mapT[tArr[i]] = 1;
      }
    }
  }
  for (var item in mapT) {
    if (mapS[item] === undefined || (mapS[item] !== undefined && mapS[item] < mapT[item])) {
      return item;
    }
  }
};
```
**方法二**

将字符串取非

```
var findTheDifference = function(s, t) {
    var temp = 0;
    for (var i = 0; i < s.length; i ++) {
        temp = temp ^ s[i];
    }
    for (var j = 0; j < t.length; j ++) {
        temp = temp ^ t[j];
    }
    return temp;
};
```

#226. Invert Binary Tree

##Original Problem 

```
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

to

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

##Solution

**递归算法**

```
var invertTree = function(root) {
    if (root === null) {
        return root;
    }
    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
```

**非递归算法**

```
var invertTree = function(root) {
    var tree_queue = [];  
    if (root === null)  
        return root;  
    tree_queue.push(root);  
    while(tree_queue.length > 0){  
        var pNode = tree_queue.shift();  
        var pLeft = pNode.left;  
        pNode.left = pNode.right;  
        pNode.right = pLeft;  
        if (pNode.left)  
            tree_queue.push(pNode.left);  
        if (pNode.right)  
            tree_queue.push(pNode.right);  
    }  
    return root; 
};
```
#492. Construct the Rectangle

##Original Problem

For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

1. The area of the rectangular web page you designed must equal to the given target area.

2. The width W should not be larger than the length L, which means L >= W.

3. The difference between length L and width W should be as small as possible.

You need to output the length L and the width W of the web page you designed in sequence.

Example:

```
Input: 4
Output: [2, 2]

Explanation: 
The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. 
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
```
Note:

The given area won't exceed 10,000,000 and is a positive integer

The web page's width and length you designed must be positive integers.

##Solution

**正确解法**

```
var constructRectangle = function(area) {
  // 开平方根
  var sqrtNum = parseInt(Math.sqrt(area));
  while (area % sqrtNum !== 0) {
    sqrtNum --;
  }
  var arr = [];
  arr.push(sqrtNum);
  arr.push(area/sqrtNum);
  return arr;
};
```

**错误解法**

双层循环，当数值足够大时，超出计算机计算范围

```
var constructRectangle = function(area) {
  var arr = [];
  var min = 10000000
  for (var i = 0; i < area; i++) {
    for (var j = 0; j < area; j++) {
      if (i * j === area && i >= j) {
        if (min > (i - j)) {
          min = i  - j;
          arr.push(i);
          arr.push(j);
        }
      }
    }
  }
  return arr;
};
```

#383. Ransom Note

##Original Problem

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

##Solution

ransom的字符在magazine中可以找到并且没有重复使用则返回true,否则返回false;

```
var canConstruct = function(ransomNote, magazine) {
  var magazineNum = {};
  // 统计magazine中字符的个数
  for (var i = 0; i < magazine.length; i++) {
    if (magazineNum[magazine[i]] !== undefined) {
      magazineNum[magazine[i]] += 1;
    } else {
      magazineNum[magazine[i]] = 1;
    }
  }
  // 将ransom中字符与magazine中字符对应
  for (var j = 0; j < ransomNote.length; j++) {
    if (magazineNum[ransomNote[j]] === undefined || magazineNum[ransomNote[j]] <= 0) {
      return false;
    } else {
      magazineNum[ransomNote[j]] = magazineNum[ransomNote[j]] - 1;
    }
  }
  return true;
};
```