# Data structure and algorithims

### Day 1 & 2

#### Space and Time Complexity

* Example:Actual complexity of fibonnaci series : 1.6 ^n

1. What is time complexity
 function that tells us how time will grows as input size grows.
 **Note** :  Time complexity!== time taken
 Why it is important to have a relation between time and size?
 as it varies according to size for different algos like while 
 considering it for large amount of data: O(1) < O(logN) < O(N) 
2. What do we consider while thinking about complexity?
  1. worst time complexity
  example 10 user is not important compare to 2M users as
  it will increase chances to crash the website
  2. Large amount of data
  3. Ignore constants that doesnt mater as it all relies on 
  type of graph
  4. Always ignore less dominating terms 
    like in O(N^3 + logN) where logN is very small comparitevely 
    so O(N^3)
    example 2: O(N^3 +N^2+N) => ignoure n^2 and N as its dominating 
    compare to N^3 so => O(N^3) is complexity
3. Big O notation:
   1. word defination: example by O(N^3) big oh is the upper bound
   which means the algo cannot exceed more than N^3
   2. Mathematically: 
     f(N) = O(g(N))
     lim         f(N)/g(N)< Infinity
     N->infinity
3. Big omega: opposite of Big oh
   1. word defination: minimum take the complexity given or lowerr bound
