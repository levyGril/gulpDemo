/**
 * Created by levy on 2018/4/17.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

var path = {
    scripts:['js/index.js','js/main.js']
};

gulp.task('default', function() {
   // gulp.src('js/*.js')
   gulp.src(path)
       .pipe(uglify())
       .pipe(concat('all.min.js'))
       .pipe(gulp.dest('build'));
});
