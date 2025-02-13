const a=123
var b="hi"//should not be used
let c="hello"
let e=null
let d;
let f=Number(c)
console.log(typeof f)
console.table([typeof a,typeof b,typeof c,typeof d,typeof e,f]);
//DATA TYPE ->[PRIMITIVE(COPY)]NUMBER,STRING,BOOLEAN,UNDEFINED,NULL ,SYMBOL(TO MAKE SOME VARIABLE UNIQUE),BIGINT[NON-PRIMITIVE(REFERENCE)]->ARRAY,OBJECTS,FUNCTION
//BUT NULL TYPEOF IS OBJECT
//conversion from one datatype to another
//Number->"33"=33,"abc"=NaN,true=1,false=0
//String->33="33"..
//Boolean->1=true,0=false,""=false,"h"=true
