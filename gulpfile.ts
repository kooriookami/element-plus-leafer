import gulp from 'gulp';
import shell from 'gulp-shell';
import { deleteAsync } from 'del';

gulp.task('clean', () => {
  return deleteAsync(['dist']);
});
gulp.task('buildFull', shell.task('vite build -- full'));
gulp.task('buildModules', shell.task('vite build -- modules'));
gulp.task('copy', () => {
  return gulp.src(['LICENSE', 'README.md', 'packages/package.json']).pipe(gulp.dest('dist'));
});

export default gulp.series('clean', 'buildFull', 'buildModules', 'copy');
