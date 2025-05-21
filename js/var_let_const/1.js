//变量申明会提升到当前作用域，因为代码分为编译阶段和执行阶段
//变量提升是面试官喜欢1的，js开发者设计的
//但是它并不好，因为代码的执行结果和代码阅读顺序不一致，有歧义
showName() //驼峰式命名
console.log(myName);

var myName = '胡';
function showName() {
    let b=2;
    console.log(myName);
    console.log('函数执行了');
}