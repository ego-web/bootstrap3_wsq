var gulp = require("gulp"),
browserSync = require('browser-sync')

gulp.task('server', function () {
/*  browserSync({
    port: 6070,
    server: {
      baseDir: 'app'
    }
  });*/

  browserSync({
    proxy: "bootstrap3_wsq/app"
  });

});


gulp.task('watch', function(){
  // gulp.watch('src/**/*.less', ['less']);
  gulp.watch([
    'app/*.html',
    'app/css/**/*.css',
    'app/js/**/*.js'
    ]).on('change', browserSync.reload);
})
gulp.task('default', [ 'server', 'watch' ]);
