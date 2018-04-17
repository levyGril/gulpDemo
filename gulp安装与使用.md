# gulp安装与使用

1. 全局安装 gulp

    npm install gulp --global

2.  作为项目的开发依赖（devDependencies）安装

	npm install  gulp  --save-dev

3.  项目根目录下创建一个名为 gulpfile.js 的文件


```
 var gulp = require('gulp');
	
 gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log("ok");
 });
```

4. 运行

    gulp

   默认运行 default 任务
	
	