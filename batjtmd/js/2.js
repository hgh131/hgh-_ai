//数组对象
const arr=['1','2','3'];
console.log(typeof arr);
const date = new Date(); 
console.log(typeof date);
//如何区分Object对象的类型？
//[object Array]
//[object Date]
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

function getType(value){
    //string api 的选择    
    //split+substring
    return Object.prototype.toString.call(arr).slice(8,-1);
    return Object.prototype.toString.call(date);   
    //return Object.prototype.toString.call(value);
}
var str1;
str1=getType(arr);
console.log(str1);
console.log(typeof str1);