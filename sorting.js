//1.   selection sortinh
// in this the we find the minimum and place at zero index , then we look for the substantial growth that can be looked

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
        for(let j=i;j<arr.length;j++){
             let min=arr[i];
             if(arr[j]< min){
                // swap the minimim and place max in place of j
                let temp=arr[j]
                arr[j]=min;
                arr[i]=temp
             }
        }
  }
   return arr
}

// let sortedarr=selectionSort([3,4,1,0,8,1,6,2]);
// console.log("sorted arr---------",sortedarr)

// merge sorting
// it is one of the efficient sorting algorith -- also  find the best time yo travel


// function merge(leftArr,rightArr){
//   // 
//   let sortedArray=[];
//   while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//           sortedArray.push(leftArr.shift())
//         }else{
//           sortedArray.push(rightArr.shift())
//         }
//   }
//   return [...sortedArray,...leftArr,...rightArr]
// }

 
// function mergeSort(arr){
// // base condition
// if(arr.length <= 1) return arr;
// let mid=Math.floor(arr.length/2);
// let leftArr=arr.slice(0,mid) // excluding the middle aelemts
// let rightArr=arr.slice(mid);
// let result=merge(mergeSort(leftArr),mergeSort(rightArr));
//  return result
// }

// let sortedarr=mergeSort([9,0,-3,6,1,8,8,3]);
// console.log(sortedarr)

var merge = function (intervals) {
  let sortarr = intervals.sort((a, b) => a[0] - b[0]);
  console.log(sortarr)
  let result = [];
  result[0] = intervals[0];
  for (let interval of sortarr) {
    let e1 = result[result.length - 1][1];
    let s2 = interval[0];
    let e2 = interval[1];
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }
   console.log('results',result)
  return result;
};

merge([
  [1, 3],
  [2, 6],
  [15, 10],
  [8, 18],
]);


