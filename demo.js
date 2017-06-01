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

/*But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
For numbers which are multiples of both three and five output “FizzBuzz”.*/
var fizzBuzz = function(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0 && i % 5 !==0) {
      arr.push('Buzz')
    } else if (i % 3 !== 0 && i % 5 ===0) {
      arr.push('“Fizz”')
    } else {
      arr.push(i)
    }
  }
  return arr
};

var findNums = [2,4], nums = [1,2,3,4]
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

var grid = [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]];
var islandPerimeter = function(grid) {
  var perimeter = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i !== 0 && grid[i-1][j] === 1) perimeter -= 2;
        if (j !== 0 && grid[i][j-1] === 1) perimeter -=2;
      }
    }
  }
  return perimeter;
};

var findMaxConsecutiveOnes = function(nums) {
  var obj = {};
  var count = 0;
  var flag = 0;
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
var argu = [1,1,0,1,1,1];

var arr = [1,3,4,6,1,3,4,6,0];
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

var detectCapitalUse = function(word) {
  var allUp = true;
  var centerUp = false;
  if (word[0].toLowerCase() === word[0])
    allUp = false
  if (word.length > 1) {
    for (var i = 1; i < word.length; i ++) {
      if (word[i].toLowerCase() === word[i])
        allUp = false;
      else
        centerUp = true;
    }
  }
  if (allUp)
    return true;
  else if (!allUp && !centerUp)
    return true
  else if (!allUp && centerUp)
    return false
};

var detectCapitalUse = function(word) {
  var allUp = true;
  var centerUp = false;
  if (word[0].toLowerCase() === word[0])
    allUp = false;
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

var arr = [4,3,2,7,8,2,3,1];
var findDisappearedNumbers = function(nums) {
  var obj = {};
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  for (var i = 1; i <= nums.length; i++) {
    if (obj[i] === undefined) {
      result.push(i)
    }
  }
  return result;
};

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
  if (minLength === length1) {
      minArr = list1;
      maxArr = list2;
  } else {
    minArr = list2
    maxArr = list1
  }
  for (var i = 0; i < minLength; i++)
    obj[minArr[i]] = i;
  for (var j = 0; j < maxLength; j++) {
    if (obj[maxArr[j]] !== undefined) {
      var num = obj[maxArr[j]] + j
      // 相等索引情况是否存在
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
var list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
var list2 = ["KFC","Shogun","Burger King"]

var s = "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor"
var t = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
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
var s = 'a';
var t = 'aa'
var findTheDifference = function(s, t) {
  var tmp = 0;
  for(var i=0;i<s.length;i++) {
    tmp = tmp ^ s.charAt(i);
    console.log(s.charAt(i));
    console.log(tmp);
  }
  for(var i=0;i<t.length;i++) {
    tmp = tmp ^ t.charAt(i);
    // console.log(tmp);
  }
  return tmp;
};
console.log(findTheDifference(s, t));
