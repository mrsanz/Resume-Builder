module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('grunt-notify')(grunt);

  grunt.initConfig({
    config :  {
        path : 'src/',
        src: 'resume.md',
        dest: 'build/index.html'
	},
    markdown : {
        all: {
            files: [{
                    expand: true,
                    cwd:'src/',
                    src: '*.md',
                    dest: 'build/',
                    ext: '.html'
                }
            ],
            options: {
                template: 'src/template.jst'
            }
        }    
    },
    copy : {
            files: {
                expand: true,
                cwd: 'src',
                src: ['stylesheets/**','bower_components/**'], 
                dest: 'build/'
            }
        
    },
    clean : {
        build: ['build']
    }
      

  });

  grunt.registerTask('default', ['clean:build', 'markdown','copy']);

};
