const _=require('lodash');

const items=[4,[5,[3,2]]];
const newItems=_.flattenDeep(items);
console.log(newItems);