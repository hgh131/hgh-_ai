const zsf = {
    name: '张sf',
    age: 20,
    gender: '男',
    hobby: '吃饭睡觉打飞机',
    introduce: function(boy) {
        console.log('大家好，我叫'+boy.name+',今年'+boy.age+'岁,爱好是'+boy.hobby+'。');
    },
    sendFlower: function (girl) {
        console.log(zsf.name + '给' + girl.name + '送了99朵玫瑰')
        girl.receiveFlower(zsf)
    }
};
const goddess = {
    happinesslevel:36,//开心指数
    name: '黄q',
    age:18,
    gender:'女',
    isSingle:true,
    hometown:'赣州兴国',
    //可以加一些新的元素
    rnum:408,
  receiveFlower: function (sender) {
        console.log(this.name + '收到了' + sender.name + '的99朵玫瑰');
        if (this.happinesslevel > 98) {
            console.log('我们在一起吧！');
        } else {
            console.log('fuck away');
        }
    }

       }
       
       
const gm = {
    name: 'lyj',
    age:18,
    gender:'女',
    isSingle:true,
    hometown:'成都',
    rnum:408,
 receiveFlower: function (sender) {
        console.log('收到了' + sender.name + '的99朵玫瑰');
        goddess.receiveFlower(sender);
        setTimeout(() => { // 定时器
            goddess.happinesslevel = 99;
            goddess.receiveFlower(sender)
          }, 3000)
       }
       
    }
zsf.introduce(zsf);
zsf.sendFlower(goddess);
zsf.sendFlower(gm);