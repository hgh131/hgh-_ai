//全局的js代码在执行之前会有一个编译的过程。
if(false){
    var a = 1;
}
console.log(a);
if(false){
    let b = 2;
}
console.log(b);
//为什么用var可以执行，而用let就不行？
//答：这与 var 关键字的特性有关。在 JavaScript 里，
//var 声明的变量存在变量提升（hoisting）现象，即变量的声明会被提升到其所在作用域的最顶部，
//但赋值操作不会被提升。上述代码在执行时，由于变量提升,相当于申明被提升到作用域顶部。
