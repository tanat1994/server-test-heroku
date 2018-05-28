
// const asyncFunc = (cb1, cb2) => {
//   cb1('a');
//   cb2('b');
// };
//
// const cb = (str) => {
//   console.log('CB:' + str);
// };
//
// asyncFunc(cb, cb);

// const asyncFunc = (cb1, cb2) => {
//   cb1('AAA');
//   cb2('BBB');
// };
//
// asyncFunc((str) => {
//   console.log('cb1'+str);
// }, (str) => {
//   console.log('cb2'+str)
// });

// setTimeout(() => {
//   console.log('Step 1');
// }, 3000);
// console.log('Step 2');


myAsyncFunc = (callback) => {
  callback();
};

callbackFunc = () => {
  console.log('this is callback function');
};

myAsyncFunc(callbackFunc);
