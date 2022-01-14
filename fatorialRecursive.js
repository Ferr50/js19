function recursive(num){
	
  if(num == 0){
  	return 1;
  }
  
  if(num == 1){
  	return (1 * num)
  }else{
  		num = num * (recursive(num-1));
      return num;
  }  
  
}
console.log(recursive(0));
console.log(recursive(3));
console.log(recursive(6));
console.log(recursive(9));
console.log(recursive(12));