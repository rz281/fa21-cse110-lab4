question 12: 
a. student.name
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseload[0]

question 13:
a. '32' as a string, because 2 is converted from number to its exact representation in string for concatenation
b. 1 because the - is taken as a mathematical expression, thus '3' is converted to numerical 3 
c. 3 because 3 here is a number, null is taken to be 0, and 3 + 0 mathematically is 3
d. 3null because '3' here is a string, null is now string converted to  'null' and concatenate them together
e. 4, since it is taken as a mathematical expression because 3 is a number, true is then taken as 1, 1 + 3 = 4
f. 0, since null and false both map to 0 for number conversion, 0 + 0 = 0
g. 3undefined, because '3' is a string, undefined is converted to its string form 'undefined' and concatenated
h. NaN, because it is a mathematical expression, undefined number converted is the number Nan, and subtracting NaN results in NaN

question 14:
a. True, mathematical expression '2' number converted to 2, 2 > 1 is true
b. False, String comparisons go letter by letter, and '1' does not come after '2' 
c. True, string '2' becomes number 2
d. False, the operator === requires types to be the same
e. False, true as number conversion is 1, 1 == 2 is false
f. True, because Boolean(2) is a boolean and true is also a boolean thus same types, thus is true

question 15:
=== Checks that types are the same on both sides, while == will perform type conversion and then check equality 

question 17:
[2,4,6] is the output, the doSomething function is passed in as a parameter, and in the for loop each value from array is passed as a parameter to the doSomething function, and the output of the function is stored in newArr which is returned at the end, since the initial values of array are 1,2,3 and doSomething multiplies values by 2, the output is 2,4,6 thus the returned output.

question 19:
1
4
3
2
We see 2 is logged after 3 because the timeout call for 2 occurs, and then the timeout call for 3 occurs right after, 3 happens 'instantly' since 0 delay, while it still waits 1 second before logging 2 o console

