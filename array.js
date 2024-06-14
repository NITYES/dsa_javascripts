// //closet sum

// // console.log("logging file")
// // let arr=[2,3,48,1];

// // function closetSum(arr,target){
// //     let closet=Infinity;

// //     for(let i=0;i<arr.length-2;i++){
// //         let left=i+1;
// //         let right=arr.length-1;

// //         while(left< right){
// //             let sum=arr[i]+arr[left]+arr[right];
// //             if(Math.abs(target-sum) < Math.abs(target-closet)){
// //                 closet=sum;
// //             }

// //             if(sum < target){
// //                 left++;
// //             }else{
// //                 right--;
// //             }
// //         }
// //     }
// //    console.log("closet-->",closet)
// //     return closet
// // }

// // closetSum(arr,48)

// //add two number

// // function addTwoNumber(arr,target){
// //     let map={};
// //     for(let i=0;i<arr.length;i++){
// //        if(map[target-arr[i]] >=0){
// //          return [i,map[target-arr[i]]]
// //        }else{
// //         map[arr[i]]=i
// //        }
// //     }
// // }

// // console.log(addTwoNumber([1,2,4,6,3,4],10))

// //maxproduct array

// function maxProductArray(arr){
//     let max=arr[0];
//     let min=arr[0];
//     let ans=arr[0];

//     for(let i=1;i<arr.length;i++){
//         let c1=max * arr[i];
//         let c2=min * arr[i];

//         max=Math.max(arr[i],Math.max(c1,c2));
//         min=Math.min(arr[i],Math.min(c1,c2));

//         ans=Math.max(ans,max)

//     }
//   console.log("answer",ans)
//     return ans
// }

// // console.log(maxProductArray([-3,2,-3,0,6,2]))

// //maximumSum Array

// function foursum(arr1,arr2,arr3,arr4){

// function twosum(A,B){
//     let len=A.length;
//     let map=new Map();
//     for(let i=0;i<len;i++){
//       for(let j=0;j<len;j++){
//            let c=A[i] + B[j];
//            map.set(c, map.get(c)+1|| 1)
//       }
//     }

//     return map
// }

// let sum1=twosum(arr1,arr2);
// let sum2=twosum(arr3,arr4);

// let total=0;
// sum1.forEach((v,k)=>{
//   let offset=0-k;
//   sum2.forEach((v,k)=>{
//     if(offset==k){
//         total +=1;
//     }
//   })
// })

// return total;

// }

// // console.log(foursum([1,2],[-2,-1],[-1,2],[0,2]))

// var maxProfit = function(prices) {
//   let i=0;
//   let profit=0;
//   console.log("length--",prices.length-1)
//   while(i< prices.length-1){
//       console.log("i",i)
//       let buyingprice=prices[i];
//       let remaining=prices.slice(i+1);
//       console.log("remaining---",remaining);
//       let sellingprice=Math.max(...remaining);
//       console.log("selling price",sellingprice,buyingprice)
//       let diff=sellingprice - buyingprice;
//       if(diff > profit){
//           profit=diff
//       }
//       i++;
//   }
//   return profit
// }

// //console.log(maxProfit([7,1,5,3,6,4]))

// function mergearray(arr1,arr2,m,n){
//   let i=m-1;
//   let j=n-1;
//   let k=m+n-1;

//   while(i >= 0 && j >=0){
//         let el1=arr1[i];
//         let el2=arr2[j];
//           if(el1 > el2){
//             arr1[k]=el1;
//             i--;
//             k--

//           }else{
//              arr1[k]=el2;
//              j--;
//              k--

//           }
//   }

//   while(i>=0){
//     arr1[k--]=arr1[i--];
//   }

//   while(j>=0){
//     arr1[k--]=arr2[j--]
//   }

//   console.log("----",arr1)

// }

// //mergearray([2,3,5,0,0,0],[1,2,3],3,3)

// function movezero(arr){
//  let i=0;
//  while(i < arr.length){
//   let j=i+1;
//   if(arr[i]==0){
//      while(j < arr.length){
//       if(arr[j] !==0){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//          break;
//       }
//       j++;
//      }
//   }
//   i++;
//  }
// }

// //movezero([0,1,2,3,0,5,9,0,0,0,3,7])

// function runningsumof1darray(arr){
//   let sum=[];
//   for(let i=0;i<arr.length;i++){
//    sum[i] =i >0 ? arr[i] + sum[i-1] : arr[i]
//   }
// }

// //runningsumof1darray([1,2,3,4,5])

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var pivotIndex = function(nums) {
//   let sum=0;
//   for(let i=0;i<nums.length;i++){
//       sum +=nums[i]
//   }
//   console.log("sum total",sum)
//   let leftsum=0;
//   let pivot=0;
//   console.log("pivot",pivot)
//   let pivotindex= -1;
//   while(pivot < nums.length){
//       leftsum = pivot > 0 ? leftsum + nums[pivot-1] : leftsum ;
//       let rightsum=sum-nums[pivot]-leftsum;
//       console.log("let and right sum---",leftsum,rightsum,nums[pivot],pivot);
//       if(rightsum==leftsum){
//           console.log("let and right sum--- found   ",leftsum,rightsum,nums[pivot])

//           pivotindex=pivot
//           console.log('found pivot',pivot,nums[pivot]);
//           break;
//       }
//       pivot++ ;
//   }

//   return pivotindex
// };

// // console.log(pivotIndex([-1,-1,0,0,-1,-1]))

//   function fibonaci(n){
//      let f0=0;
//      let f1=1;
//      for(let i=2;i<n-2;i++){
//       let a=f0 + f1;
//       f1=
//       fb=a;
//      }
//   }

//   function sortArrayofSquare(arr){

//     for(let i=0;i<arr.length;i++){
//       arr[i]=Math.pow(arr[i],2)
//     }

//     return arr.sort()

//   }

//   // sortArrayofSquare([1,2,-3,-4,5]);

// //best sorting alsorith

// // function pascaltriangle(n){
// //   let arr=new Array(n);
// //   for(let i=2;i<n;i++){
// //      for(let j=1;j < i+1;j++){
// //          arr[i][j]=['kk']
// //      }
// //   }

// // }

// // function subArraysumequal(arr,k){
// //   let prefixsum=[];
// //   prefixsum[0]=arr[0]
// //   for(let i=1;i<arr.length;i++){
// //     prefixsum[i]=prefixsum[i-1] + prefixsum[i];
// //   }

// //   for(let i=0;i<arr.length;i++){
// //        for(let j=0;j<arr.length;j++){
// //           let sum=
// //        }
// //   }

// // }

// // function Area(arr){
// //   let area=0;
// //   console.log("area")
// //   for(let i=0;i<arr.length-1;i++){
// //      for(let j=i+1;j<arr.length;j++){
// //       let a=(j-i) * Math.min(arr[i],arr[j]);
// //       console.log("area---",a)
// //       if(a>area){
// //         area=a
// //       }
// //      }
// //   }
// //   return area;
// // }

// //using two pointer approch
// function Area(arr){
// let ans=0;
//  let left=0;
//  let right=arr.length-1;
//  while(left < right){
//     let area =(right-left) *  Math.min(arr[left],arr[right]);
//     ans=Math.max(area,ans);
//     if(arr[left] > arr[right]){
//              right--;
//     }else{
//       left++
//     }
//  }
//   return ans;
// }

// // console.log(Area([1,8,6,2,5,4,8,3,7]));

// var RandomizedSet = function() {
//     this.arr=[]
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
//   console.log("array-->",this.arr)
//     if(!this.arr.includes(val)){
//          this.arr.push(val);
//          return true
//     }
//     return false
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//     let index=this.arr.indexOf(val);
//     console.log("index",index)
//     if(index > 0){
//       console.log("inside ")
//           this.arr.splice(index,1);
//           return true
//     }

//     return false;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {

//      let l=this.arr.length;
//      if(l>0){
//      const random= Math.floor(Math.random() * (l-1 - 0 + 1)) + 0;
//      return this.arr[random];
//      }
//   return false
// };

// // * Your RandomizedSet object will be instantiated and called as such:
// // ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
// // [[],[1],[2],[2],[],[1],[2],[]]
//   var obj = new RandomizedSet()
//   var param_1 = obj.insert(1);
//  var param_2 = obj.remove(2)

//    var param_3 = obj.insert(2);

//  var param_4 = obj.getRandom()

//   var param_5 = obj.remove(1)

//      var param_6 = obj.insert(2);

//       var param_7 = obj.getRandom()

//       console.log(param_1,param_2,param_3,param_4,param_5,param_6,param_7)

// // [null,true,false,true,2,true,false,2]

// // subarray sum equal to k

// function subarraysum(nums,k){
//   //------------------------
//   let map=new Map();
//   let sum=0;
//   map.set(0,1);

//   for(let i=0;i<nums.length;i++){
//     sum+=nums[i];
//     if(map.has(sum-k)){

//     }
//   }

// }

// // merge interval

// //Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// //Output: [[1,6],[8,10],[15,18]]
// //Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// var merge = function(intervals) {
//    let sortarr=intervals.sort((a,b)=>a[0]-b[0]);
//    console.log(sortarr)
//    let result=[]
//    result[0]=intervals[0]
//    ////////////////////////////////////////////////
//     for(let interval of sortarr){
//             let e1=result[result.length-1][1];
//             let s2=interval[0];
//             let e2=interval[1];
//            if(e1>=s2){
//                result[result.length-1][1]=Math.max(e1,e2)
//            }else{
//                result.push(interval)
//            }

//     }
//   }

//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ]);

// complete a loop

// function completeLoop(arr,i) {
//   let totaltraversestep = arr.length;
//   let currentstep = 0;
//   let index=i;
//   let availindex=arr.length-1;
//   while (currentstep <= totaltraversestep) {
//    // console.log(arr[index]);
//     console.log(arr[index],currentstep,index)
//     if(index==availindex){
//       console.log(index==availindex)
//       index=0
//     }else{
//     index++;
//     }
//     currentstep++
//   }
// }

// console.log(completeLoop([1, 2, 3, 4, 5],4))


function swapArray(arr){
    
 let l=arr.length-1;
  for(let i=0;i<= arr.length/2 ;i++){
    [arr[i],arr[l]]=[arr[l-i],arr[i]]
  }
  return arr
}

console.log(swapArray([1,2,3,4,5]))

