function f() {
    let a= 2;
    if(true){
        let b = 3;
    }
    console.log(b);
}
f();
//报错的原因:let 只作用于块级作用域内，即if语句之外，b并没有定义。