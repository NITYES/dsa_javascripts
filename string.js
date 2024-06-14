// // // //https://www.geeksforgeeks.org/find-the-minimum-distance-between-the-given-two-words/
// // // //https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/
// // // //replace every third elements from string with x

// // // function replaceString(str,n){

// // //     // let s=str.split("");
// // //     // console.log("split s",s)
// // //     // for(let i=0;i<s.length;i=i+n){
// // //     //     console.log("inside",i)
// // //     //       //replace
// // //     //     let s1= s.splice(i+n,0,"X");
// // //     //     console.log(s1)
// // //     // }

// // //     // console.log(s)
// // // let newstring="";
// // // //abcdfe
// // // //abXdfX
// // // for(let i=0;i<str.length;i=i+n){
// // //     let s=str.slice(i,i+n);
// // //     console.log(s)
// // //    if(s.length==n){
// // //         s=s.slice(0,n-1)+'X'
// // //     }
// // //     newstring +=s
// // // }
// // // return newstring

// // // }

// // // // console.log(replaceString('iamdonandehatare',3))
// // // //count number and alphabet in string

// // // function countAlphaNumeric(str){
// // //     let a=0;
// // //     let n=0;
// // //     for(let i=0;i<str.length;i++){
// // //         if(str[i].match(/[a-z]/i)){
// // //             a +=1;
// // //         }
// // //         if(!isNaN(str[i])){
// // //             n +=1;
// // //         }
// // //     }

// // //     return {a,n}
// // // }

// // // // console.log(countAlphaNumeric('dfg763tedgA'))

// // // //reverse a string

// // // function reverseString(str){
// // //     //  let s=str.split("");
// // //     // for(let i=0;i<s.length/2;i++){
// // //     //     [s[i],s[s.length-i-1]]=[s[s.length-i-1],s[i]]
// // //     // }
// // //     // return s.join("")

// // //     let reversestring="";
// // //     for(let i=str.length-1;i>=0;i--){
// // //         reversestring +=str[i]
// // //     }
// // //     return reversestring
// // // }

// // // // console.log(reverseString('iamdon'))
// // // //sort string

// // // function sortString(str){
// // //     console.log(str.charAt(2))
// // //     let s=str.split("");

// // //     s.sort((a,b)=>{
// // //         let achar=a.codePointAt(0);
// // //         let bchar=b.codePointAt(0);

// // //      //small 97 to 122 a,b,,....z

// // //      return   bchar - achar

// // //     })

// // //     return s

// // // }
// // // // console.log(sortString('hjfgysdabACD'))

// // // //count number of capital and amall aplhabet

// // // function countSmallCapital(str){
// // //     let s=0;
// // //     let c=0;
// // //     for(let i=0;i<str.length;i++){
// // //         let code=str[i].codePointAt(0);
// // //         if(code >= 97 && code <= 122){
// // //             s +=1;
// // //         }
// // //         if(code >= 65 && code <=90 ){
// // //             c +=1;
// // //         }
// // //     }

// // //     return { s,c}
// // // }

// // // // console.log(countSmallCapital('abcDFGHhjhTYUI'));

// // // function printRoman(number)
// // // {
// // //     let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
// // //     let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
// // //     let i=12;
// // //     let roman=""
// // //     while(number>0)
// // //     {
// // //     let div = Math.floor(number/num[i]);
// // //     console.log("div-->",div,i);
// // //     number = number%num[i];
// // //     console.log('number---->',number,i)
// // //     while(div--)
// // //     {
// // //         console.log("system---->",sym[i]);
// // //         roman +=sym[i]
// // //     }
// // //     i--;
// // //     }

// // //     return roman;
// // // }

// // // // console.log(printRoman(76));

// // // //print all occurence of word in array

// // // function allIndex(arr,str){
// // //     let occurence=[]
// // //     for(let i=0;i<arr.length;i++){
// // //         if(str == arr[i]){
// // //              occurence.push(i)
// // //         }
// // //     }

// // //     return occurence;
// // // }

// // // //minimum distance between two string
// // // //method 1
// // // function minimumstring(arr,word1,word2){
// // //     let word1index= allIndex(arr,word1)
// // //     let word2index=allIndex(arr,word2)
// // //     let min=Infinity;
// // //     for(let i=0;i<word1index.length;i++){
// // //         for(let j=0;j<word2index.length;j++){
// // //                let minum=Math.abs(word1index[i]-word2index[j]);
// // //                if(minum < min ){
// // //                 min=minum
// // //                }
// // //         }
// // //     }

// // //     return min;
// // // }

// // // //console.log(minimumstring(['good',"fghj","good","c","fghj",'water','good'],'good','water'))

// // // //method 2

// // // function minimumdistancebetweenstring(arr,word1,word2){
// // //     let d1=-1;
// // //     let d2=-1;
// // //     let distance=Infinity;

// // //    for(let i=0;i<arr.length;i++){
// // //        if(arr[i]==word1){
// // //         d1=i
// // //        }
// // //        if(arr[i]==word2){
// // //         d2=i
// // //        }

// // //        if(d1 != -1 && d2 != -1){
// // //        let min=Math.abs(d1-d2);
// // //        distance=Math.min(distance,min);
// // //     }

// // //    }

// // //   return distance

// // // }

// // // //console.log(minimumdistancebetweenstring(['delhi',"mumbai","goa","calcutta","delhi","banaras","mumbai",'patna',"goa","delhi","pune"],'delhi','pune'))

// // // //isomorphic string

// // // function ismorphic(str1,str2){

// // // }

// // // //console.log(ismorphic('wfca','yssy'));

// // // //check valid pallindrome
// // // function cut(str,i){
// // //     let newstr= str.slice(0,i)+str.slice(i+i);
// // //     console.log('new str',newstr);
// // //     return newstr
// // // }

// // // function isPallindrome(str){
// // //   let l=str.length;
// // //   for(let i=0;i< l/2;i++){
// // //     if(str[i] !==str[l-1-i]){
// // //            let result= isPallindrome(cut(str,i)) || isPallindrome(cut(str,l-1-i));
// // //            return result
// // //     }
// // //   }
// // //   return true
// // // }

// // // function isAnagram(str1,str2){
// // //     console.log(str1.split("").sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)))
// // //     return str1.split("").sort().join() ==str2.split("").sort().join()
// // // }

// // // // console.log(isAnagram('abcc','cabc'))

// // //  var reverseWords = function(s) {
// // //     let reversestr="";
// // //     console.log("length-->",s.length)

// // //     for(let i=s.length-1;i>=0;i--){
// // //         if(s[i].charCodeAt() !==32 || reversestr.length>0){
// // //             //space
// // //             console.log(s[i])
// // //             let length=0;
// // //             while(s[i].charCodeAt() !== 32){
// // //                    length++;
// // //                    i--;
// // //             }
// // //             let slicedstring=s.slice(i+1,length);
// // //             console.log(slicedstring);
// // //             reversestr +=slicedstring
// // //         }

// // //     }
// // //     return reversestr
// // // };

// // // // console.log(reverseWords('the sky is blue'))

// // // function trimString(str){
// // //     let trimed="";
// // //     let word=false
// // //     for(i=0;i< str.length;i++){
// // //             if(str[i].charCodeAt() !== 32 || word){
// // //                 trimed +=str[i]
// // //             }else{
// // //                 space++;
// // //             }
// // //     }

// // //     console.log("trimed string",trimed,trimed.length)
// // // }

// // // // trimString('aa i am    a            ')

// // // var isPalindrome = function(s) {
// // //     //check alphabets or not
// // //     let newstring="";
// // //     for(let i=0;i<s.length;i++){
// // //         if(/[a-zA-Z]/.test(s[i])){
// // //               newstring+=s[i].toLowerCase();
// // //         }
// // //     }
// // //     console.log('new string',newstring)
// // //     if(newstring==""){
// // //         return true
// // //     }
// // //     if(newstring.length ==1){
// // //            return false
// // //     }
// // //     for(let i=0;i<newstring.length/2;i++){
// // //         if(newstring[i]!=newstring[newstring.length-1-i]){
// // //              return false
// // //         }
// // //     }
// // //   return true;
// // // };

// // // // isPalindrome('0N');

// // // function replaceandconcat(arr){

// // // }

// // // function checkurl(url,check){
// // //     const urlwithoutquery=url.split("?")[0];
// // //     const idlist=urlwithoutquery.split('/');
// // //     console.log(idlist)
// // //    const appendec= idlist.map((v)=>{
// // //           if(v.startsWith(":")){
// // //             return "*"
// // //           }
// // //           return v
// // //     })
// // //     const joined=appendec.join("/");
// // //     console.log('append',appendec,joined)
// // //    return urlwithoutquery==check
// // // }

// // // console.log(checkurl('/user/123/update','/user/*/update'));

// // // function trimString(s) {
// // //   let s1 = '';
// // //   let l=0
// // //   for (let i = 0; i <
// // //     s.length; i++) {

// // //     if (s[i] != ' ' || ((l > 0  && i <s.length-1 ) && s1[l - 1] != ' ')) {
// // //       s1 += s[i];
// // //       l++;
// // //     }
// // //   }
// // //   console.log(s1.length,`a${s1}a`)
// // //   return s1;
// // // }

// // // let s='  i am   good   boy   ';

// // // var convert = function (s, numRows) {
// // // const l=s.length
// // //   let traverse=0
// // //   let s1=""
// // //   const obj={}
// // //   while(traverse < s.length){
// // //   const randomnumber = Math.ceil(Math.random() * l -1 );
// // //   if(!obj[randomnumber]){
// // //            console.log(randomnumber, obj[randomnumber]);
// // //            obj[randomnumber]=s[randomnumber];
// // //            s1+=s[randomnumber];
// // //            traverse++
// // //   }
// // //   }
// // //  return s1
// // // };

// // // convert('abcdefg',3)

// // var strStr = function (haystack, needle) {
// //  console.log(6%5)
// //   console.log(5 % 5);
// //    console.log(4%5);
// // };

// // strStr('sadtut', 'tut');

function reversestring(reversed){

   for (let i = 0; i < reversed.length / 2; i++) {
     [reversed[i], reversed[reversed.length - 1]] = [
       reversed[reversed.length - 1],
       reversed[i],
     ];
   }
   return reversed
}


function pallindrome(s){
  for(let i=0;i<= s.length /2 ;i++){
    if(s[i]!= s[s.length-1-i]) return false
  }
  return true
}

// console.log(pallindrome('abad'))


function reverseString(str){
    let reverseString="";
   for(let i=str.length-1;i>=0;i--){
        reverseString+=str[i]
   }
   return reverseString;
}

// console.log(reverseString('googd'))

function reverseWord(sentence){
   const splited= sentence.trim().split(" ");
    let reverseString=""
    for(let i = splited.length-1 ; i >=0 ;i--){
      if(splited[i]){
             reverseString+=splited[i] + " " ;
      }
    }
   // console.log(reverseString.slice(0,reverseString.length - 1),reverseString.length);
    return reverseString.slice(0, reverseString.length - 1);
}

const veversedstring=reverseWord(' ia m       done   father');
console.log(veversedstring)


// let num=[1,2,5,3,7,2]
// console.log(num.sort())
// console.log(num)
