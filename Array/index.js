const arr=[1,2,3,4,5,6,7,8,9,10];

function traverseArray(arr)
{
    for ( let i=0; i<arr.length ; i++)
    {
console.log(arr[i])
// space complexity is O(1) because we are not using any extra space and time complexity is O(n) because we are traversing the array once.
    }
}

// traverseArray(arr)


const TwoDimensionalArray = [[1, 2], [3, 4]];
const newArray=[[11,12]]

function traverseTwoDimensionalArray(arr) {
    // arr[0]=[90,80]
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);   // prints each row as a row
//Time complexity is O(n) because we are traversing the array once and space complexity is O(1) because we are not using any extra space. 
    }
    arr.unshift(newArray)  // adds new array to the existing array at the beginning of the array
    arr.push(newArray)  // adds new array to the existing array at the end of the array

    arr.splice(1, 0, newArray)  // adds new array to the existing array at the specified index
    arr.forEach((row)=>{
console.log(row)   // prints each row as a row  
    })
}

traverseTwoDimensionalArray(TwoDimensionalArray);