//power of n power(x,n)

function power(x,n){
    console.log('nnn',n)
    if(n==0) return 1
    const result=x * power(x,n-1);
    return result
}

console.log(power(2,4))

function gcf(index,current,result,arr,k){
    if(current.length==k) return result.push(current);
    for(let i=index;i<arr.length;i++){
        let temp=[...current];
        temp.push(arr[i]);
        gcf(i+1,temp,result,arr,k)
    }
}

function combination(n,k){
let arr=[]
 for(let i=1;i<=n;i++){
    console.log('i',i)
       arr.push(i);
 }
  const result=[];
  gcf(0,[],result,arr,k);
  return result;
}

// combination(1,1)


function guc(index,current,result,nums,sum,target){
   if(sum>target) return
   if(sum ==target)return result.push([...current]);
       for(let i=index;i<nums.length;i++){ 
          current.push(nums[i]);
          let sum2=sum+nums[i]
          guc(i,current,result,nums,sum2,target);
          current.pop()
       }

}

var combinationSum = function(candidates, target) {
    let result=[];
    guc(0,[],result,candidates,0,target);
    return result;
};

// console.log("result",combinationSum([2,3,6,7],7))

function check(arr){
    arr.sort();
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(i !=0 && arr[i]==arr[i-1]) continue;
        sum=sum+arr[i]
    }
    return sum
}

// console.log(check([1,1,2,4,5,7,3,4]))

function gml(index,currentstr,arr,max){
     // check duplicate or not
     console.log(index,currentstr,max)
     let set=new Set(currentstr);
     if(set.size != currentstr.length) return max
     max=currentstr.length;
     console.log(index,currentstr,max)
     for(let i=index;i<arr.length;i++){
         let newstr=currentstr+arr[i];
        console.log("new string",i,newstr,max)
        let g= gml(i+1,newstr,arr,max);
        console.log('maxgggggggggggg',g)
        max=Math.max(g,max)
     }

     return max

}

var maxLength = function(arr) {
    let max= gml(0,"",arr,0);
         console.log('rese',max)
     return max;
};

// maxLength(["uns","iq","uetiklghbvd",'oplhtufres'])


function subarrayUsingRecursion(arr,start,end,result){
   if(arr.length==end) return
   else if(start > end){
         subarrayUsingRecursion(arr,start,end+1,result)
  } else{
    result.push(arr.slice(start,end));
    subarrayUsingRecursion(arr,start+1,end,result)
   }
   return result
}

// console.log(subarrayUsingRecursion([1,2,3],0,0,[]))