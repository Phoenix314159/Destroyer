function destroyer(arr) {
  
  var x = Array.from(arguments);
  var arr2 =[];
  var y = x[0];
  
  for(var i=0; i<arr.length; i++){
    
    if(x.indexOf(arr[i]) === -1){
        arr2.push(y[i]);   
    }
  }
 return arr2;
}
