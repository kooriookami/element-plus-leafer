import gulp from 'gulp';
import shell from 'gulp-shell';
import { deleteAsync } from 'del';

gulp.task('clean', () => {
  return deleteAsync(['dist']);
});
gulp.task('tsc', shell.task('vue-tsc'));
gulp.task('buildFull', shell.task('vite build -- full'));
gulp.task('buildLib', shell.task('vite build -- lib'));
gulp.task('copy', () => {
  return gulp.src(['LICENSE', 'README.md', 'packages/package.json']).pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('clean', 'tsc', 'buildFull', 'buildLib', 'copy'));
