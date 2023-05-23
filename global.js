// console.log(global)
global.setTimeout(() => {
    console.log('in the time out')
    clearInterval(int)
}, 5000);

const int=setInterval(()=>{
    console.log('hello there')
},1000)