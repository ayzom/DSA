/*
Given two strings, copy one string to other using recursion. 
We basically need to write our own recursive version of strcpy in C/C++

Examples:

Input : s1 = "hello"
        s2 = "geeksforgeeks"
Output : s2 = "hello"

Input :  s1 = "geeksforgeeks"
         s2 = ""
Output : s2 = "geeksforgeeks"
*/

function copys(s1, s2){
    let len = 0;
    s2 = s2.split("");
    while(len<s1.length) {
        s2[len] = s1[len];
        len++;
    }
    return s2.toString("");
}

let word = copys("akhilesh", "shyam");
console.log(word);