
 // object .assign

 const target={a:1,b:2};
 const source={b:4,c:6};

 const returntarget=Object.assign(target,source);

 console.log( returntarget,target==returntarget );

 delete returntarget.a

 console.log(target,returntarget)
