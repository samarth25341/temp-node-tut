const {readFileSync,writeFileSync}= require('fs');

const first=readFileSync('./content/first.txt', 'utf8');
const second=readFileSync('./content/second.txt', 'utf8');


writeFileSync('./content/first.txt',`how are you ${first}`);



console.log(first);
console.log(second);




