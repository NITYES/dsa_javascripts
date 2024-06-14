// TRAVERSE A 2D ARRAY
// let [[1,2,3],[4,5,6],[7,8,9]]==> 1,2,3,4,5,6,7,8,9
function traverse2DARRAY(array){
  
    let row=array.length;
    let column=array[0].length;

    // 1.[[1,2,3],[4,5,6],[7,8,9]]==> 1,2,3,4,5,6,7,8,9
    // for(let i=0;i<row;i++){
    //     for(let j=0;j<column;j++){
    //           console.log(array[i][j])
    //     }
    // }

    //2.  [[1,2,3],[4,5,6],[7,8,9]]==> 1,4,7,2,5,8,3,6,9
    
    // for(let i=0;i<row;i++){
    //         for(let j=0;j<column;j++){
    //             console.log(array[j][i])
    //         }
    // }
    
    //3.  [[1,2,3],[4,5,6],[7,8,9]]==> 7,4,1,8,5,2,9,6,3
    //  for(let i=0;i<row;i++){
    //         for(let j=column-1;j>=0;j--){
    //             console.log(array[j][i])
    //         }
    // }

    //4.  [[1,2,3],[4,5,6],[7,8,9]]==> 1,2,3,6,5,4,7,8,9

   let zigzag=0;             
    for(let i=0;i<row;i++){
          const head=zigzag % 2 == 0 ? `let j= 0;j<column;j++` : `let j=column-1 ;j>=0;j--` ;
         if(zigzag % 2 == 0){
              for(let j= 0;j<column;j++){
                       console.log(array[i][j])
              }
         }else{
           for(let j=column-1 ;j>=0;j--){
                        console.log(array[i][j])

           }
         }
         zigzag++;
    }  

} 

//traverse2DARRAY([[1,2,3],[4,5,6],[7,8,9]])


function printDiagonal(array){
         let row=array.length;
    let column=array[0].length;

    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(i==j){
                console.log(array[i][j])
            }
        }
    }
}

//printDiagonal([[1,2,3],[4,5,6],[7,8,9]])

function printUpperTrianglr(array){
         let row=array.length;
    let column=array[0].length;

    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(i==j){
                console.log(array[i][j])
            }
        }
    }
}

printUpperTrianglr([[1,2,3],[4,5,6],[7,8,9]])