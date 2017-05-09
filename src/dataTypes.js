
function dataTypes(differentDataTypes){
  if (differentDataTypes){
    if (differentDataTypes.constructor === Boolean){
      return true;
    }else if (typeof differentDataTypes === 'number' && isFinite(differentDataTypes)){
    	if (differentDataTypes === 100) {return 'equal to 100';}else{
      return differentDataTypes < 100 ? 'less than 100': 'more than 100';}
    }else if (differentDataTypes.constructor === String){
      return differentDataTypes.length;
    }else if (differentDataTypes.constructor === Array){
      return differentDataTypes.length>0 || differentDataTypes.length<4 ? differentDataTypes[2]: undefined;
    }
  }else{
    if (differentDataTypes === null || differentDataTypes===undefined ){
      return 'no value';
    }else if (differentDataTypes.constructor === Boolean){
      return false;
    }else if (differentDataTypes.constructor === String){
      return 0;
    }
  }
  if (typeof differentDataTypes === 'function'){
   return differentDataTypes(callback) ? true: false; 
  }
}

