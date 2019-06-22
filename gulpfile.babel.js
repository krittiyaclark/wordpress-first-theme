// var gulp = require('gulp');

// gulp.task('default', defaultTask);
  
// function defaultTask(cb) {
//     console.log('Hey');
//     cb();
// }

// gulp.task('hello', function(cb) {
//     console.log('hello');
//     cb();
// })
  
// // function defaultTask(cb) {
// //     // place code for your default task here
// //     console.log('hey')
// //     cb();
// //   }
  
// //   exports.default = defaultTask
  
// //   function hello(hello) {
// //     // place code for your default task here
// //     console.log('hello')
// //     hello();
// //   }
  
// //   exports.hello = hello

import gulp from 'gulp';

export const hello = (done) => {
    console.log('hello')
    done();
}

export default hello;