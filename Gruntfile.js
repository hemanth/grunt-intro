module.exports = function(grunt) {

	grunt.initConfig({
		greet: {
			en: "Hello!",
			kn: "Namaskara!"
		},
		uglify: {
			js:{
				files:{
					'dist/main.min.js':'js/main.js'
				}
			}
		},
		cssmin: {
			css:{
				files:{
					'dist/style.min.css': 'css/style.css'
				}
			}
		}
	});

    grunt.registerTask('greet', 'Greet the user!', function(user) {
    	console.log(grunt.config.get('greet').kn, user || 'Tom');
    });

    grunt.registerTask('default', ['greet']);

    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('cssmin', ['cssmin']);

    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

}