// Find maximum Element in an Array
console.log("Find maximum Element in an Array")
const arr = [1, 2, 3, 4, 5];
function findMax(arr)
{
    let max =arr[0];
    for ( let i=1 ;i<arr.length ; i++)
    {
        if ( arr[i] > max )
        {
            max=arr[i]
        }
    }
    console.log(max)
}
// findMax(arr) // returns 5


// Reverse an Array 

function reverseArray(arr)
{
console.log("Reverse an Array")
for(i=arr.length-1 ; i>=0 ; i--)
{
    console.log(arr[i])
}

}

// reverseArray(arr) // returns 5,4,3,2,1


// sum of  all elements in an array


function sumArray(arr) {
    let sum=0;
for(let i =0 ; i<arr.length ; i++)
{
    sum=sum+arr[i]
}
    console.log(sum)
}
// sumArray(arr) // returns 15


// count even or odd number in array 



function countEvenOdd(arr) {


let evenCount=0;
let oddCount=0;
for (let i=0 ; i<arr.length ; i++)
{
    if (arr[i]%2==0)
    {
        evenCount=evenCount+1
    }
    else
    {
        oddCount=oddCount+1
    }}
console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);
 
}

// countEvenOdd(arr) // returns Even numbers: 2, Odd numbers: 3


// check if array is sorted or not

function isSorted(arr) {
    let sorted=true;
    for ( let i = 0 ; i<arr.length-1; i++)
    {
if(arr[i]>arr[i+1])
    {
sorted=false;
    }

    }
    console.log(sorted);
}

isSorted(arr) // returns true



// second largest element in an array

function secondLargest(arr) {
// algorithm to find second largest element in an array , we r doing this in O(n) time complexity and O(1) space complexity

// we r doing nothing to find the second largest element we r just seeding the address of the firstlargest into the second largest whenever the line number 105 satisfy meand when ever a number coming greater than firstlargest we r considering it as second largest and seeding the address of firstlargest into second largest and then seeding the address of the new number into firstlargest.
let firstLargest=arr[0];
let secondLargest=arr[0];

for ( let i=1 ; i<arr.length ; i++)
{
    if (arr[i]>firstLargest)
    {
        secondLargest=firstLargest;
        firstLargest=arr[i];
    }
    else if (arr[i]>secondLargest)
    {
        secondLargest=arr[i];
    }
}
console.log(secondLargest);
}   

// secondLargest(arr) // returns 4


// Remove duplicates from an array

function removeDuplicates(arr) {
    // no auxiliary space is used in this algorithm so space complexity is O(1) and time complexity is O(n^2) because we are using nested loops to traverse the array.
for (let i=0 ; i<arr.length ; i++)
{
    for (let j=i+1 ; j<arr.length ; j++)
    {
        if (arr[i]==arr[j])
        {
            arr.splice(j,1)
            j--;
        }
    }

}

// OR 





}