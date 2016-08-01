var gulp = require('gulp');

gulp.task('task1',['task2', 'task3'] , function() {
  console.log('I am task 1');
});

gulp.task('task2', function() {
  console.log('I am task 2');
});

gulp.task('task3', function() {
  console.log('I am task 3');
});
