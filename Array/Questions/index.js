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



// Rotate an array by d elements


function rotateArray(arr, d) {
    console.log(arr.length)
    if (arr.length === 0) {
        console.log(arr);
        return;
    }

    d = d % arr.length;
    console.log(d)

    function reversePart(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Left rotate by d using 3 reversals in O(n) time and O(1) space.
    reversePart(0, d - 1);
    // 0 se leke 1 tk
    reversePart(d, arr.length - 1);
    //  2 se leke 4 tk 
    reversePart(0, arr.length - 1);
    // 0 se leke 4 tk 

    console.log(arr);
}

// rotateArray(arr, 2) // returns [3,4,5,1,2]      

// Merge two sorted arrays
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
 function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Push any remaining elements from either array
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(mergedArray);
}

// mergeSortedArrays(arr1, arr2) // returns [1,2,3,4,5,6,7,8]

//  1. arr1 ko check kro wo shorted hai ya nhi 
// 2. agr nhi h to sort kro 
// 3. same process for 


// Majority Element in an Array
function majorityElement(arr) {
    let count = 0;
    let candidate = null;
    for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
        candidate = arr[i];
        count = 1;
    } else if (arr[i] === candidate) {
        count++;
    } else {
        count--;
    }
    
    }
    return candidate;
}
majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]) // returns 4

// Merge Two Sorted Arrays 
// Majority Element 
// Hard
// Trapping Rain Water 
// Product of Array Except Self 
// Maximum Subarray 
// Merge Intervals 
// First Missing Positive