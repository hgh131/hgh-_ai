const hxt = {
    name: 'hxt',
    age: 18,
    tall: 187,
    hometown: '山东临沂',
    isSingle: true
};
const pyc ={
    name:'彭奕淳',// key value String
    age: 21, // Number 数值类型
    hometown: '新余',
    isSingle: true, // Boolean 布尔类型
    // 送花
    // 形参
    sendFlower: function (girl) {
        console.log(pyc.name + '给' + girl.name + '送了99朵玫瑰')
        girl.reciveFlower(pyc)
    }
}


const xm = {
    happinesslevel:36,
    name: '小美',
    reciveFlower:function(sender){
        console.log(xm.name+'收到了'+sender.name+'99朵玫瑰')
        if(xm.happinesslevel>98){
            console.log('硕果走一波')
        }else{
            console.log('fuck away');   
        }
    }

}    
const gm={
    hometown:'新余',
         reciveFlower:function(sender){
            /*if(sender.name=='彭奕淳'){
                console.log('我们在一起吧');
                return;
            }*/
                console.log('收到了'+sender.name+'99朵玫瑰'),
            xm.reciveFlower(sender)
         }
         
}
pyc.sendFlower(gm)

// 数组     