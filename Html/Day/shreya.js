//  var  function scope
var b =30;    // global varibale
 function myfun(){
    var a =20 ;
    
    if(a===20){//start
        var k = 40;
        let c = 30 ;
        const d =30
        console.log(a)
    }//end
    console.log(k);
    console.log(d);

 }
