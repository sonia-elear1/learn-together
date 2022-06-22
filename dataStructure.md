# Data structure and algorithims
## Space and Time Complexity

#### Time Complexity
* Example:Actual complexity of fibonnaci series : 1.6 ^n

1. What is time complexity
 function that tells us how time will grows as input size grows.<br>
 **Note :  Time complexity!== time taken**
  1.  Why it is important to have a relation between time and size?
      as it varies according to size for different algos like while 
      considering it for large amount of data: O(1) < O(logN) < O(N) 
2. What do we consider while thinking about complexity?
      1. worst time complexity
        example 10 user is not important compare to 2M users as
      2. Large amount of data
      3. Ignore constants that doesnt mater as it all relies on 
         type of graph
      4. Always ignore less dominating terms 
         like in O(N^3 + logN) where logN is very small comparitevely 
        so O(N^3)<br>
        example 2: O(N^3 +N^2+N) => ignoure n^2 and N as its dominating 
        compare to N^3 so => O(N^3) is complexity
3. Big O notation:
      1. word defination: example by O(N^3) big oh is the upper bound
        which means the algo cannot exceed more than N^3
      2. Mathematically: 
          f(N) = O(g(N))<br>
         lim         f(N)/g(N)< Infinity<br>
         N->infinity
4. Big omega: <br>opposite of Big oh
    1. word defination: minimum take the complexity given or lowerr bound
5. Theta notation:
    1. word defination: if an algo has lower and upper bound as same complexity
6. little o notation:
    1. word defination: it also gives for worst case but it will give loose upper bound (means strictly lower to given complexity)
    f= O(g) => (f<=g) vs f = o(N) (f< g)
7. little Omega notation:
    1. word defination: big omega => f = omega(g) => f>=g
     but little omega means strictly lower bound =>
    f = omega(g) => f>g  
<br>

#### Space complexity
1. Input space +  Auxilary space(extra temporary space taken by an algorithm)

<br>

#### Questions

1. `for(i =1;i<=n;){
  for(j = 1; j<=k; j++){
    // some operation  taking time t
  }
  i = i+k;
}`
<br>
Solution: Inner loop O(Kt) time
ANS : O(Kt * TIME OUTER LOOP RUNNING)
TIME OUTER LOOP RUNNING: 1+xK times <= N
O(Kt * (N-1/K))=> O(Nt)

<br>

#### Complexity Analysis : Sorting Algorithms

1. Bubble Sort : <br>
 Worst and Average Time Complexity: O(N*N) <br>
 Best Case : O(N)
 Auxilary space: O(1)
2. Selection Sort
  Worst, Average and best : O(N*N)
  Auxilary space: O(1)
3. Insertion Sort:
  Worst, Average and best : O(N*N)
  Auxilary space: O(1)

#### Recursive Algorithms:

Recursive Programms doesnot have constant space complexity as function is calling again and again and
calls take some space in stack;
 




## Recursion


