> How to grunt without hurting your throat?

This repos is product of me helping my friend to get started with [Grunt](http://gruntjs.com/)

It includes a bare minimal code for getting started with grunt!

__What it includes?__

* A simple `greet` task.

* `uglify` task to uglify the js code in `js` dir.

* `cssmin` task for minifying css code in `css` dir.

__How to use it?__

```sh
$ git clone http://github.com/hemanth/grunt-intro.git

$ cd grunt-intro

$ npm install 

$ npm install -g grunt-cli

$ grunt
```

__Running tasks?__

```sh

$ grunt cssmin 

$ grunt uglify

# Combining both to one single task is H.W ;)
```

Check `dist` dir that got created after firing the above.

__What next?__

Worth reading:

* Grunt [Getting-Started](http://gruntjs.com/getting-started)

* Configuring [Tasks](http://gruntjs.com/configuring-tasks)

* Creating [Tasks](http://gruntjs.com/creating-tasks)

* [time-grunt](https://www.npmjs.org/package/time-grunt)

* [load-grunt-tasks](https://www.npmjs.org/package/load-grunt-tasks)
