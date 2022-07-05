const os=require('os');

const user=os.userInfo();
console.log(user );
console.log(os.uptime() );


// console.log()

const currenOS={

name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),

}

console.log(currenOS);
