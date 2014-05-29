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
                    expand: false,
                    src: 'src/*.md',
                    dest: 'build/',
                    ext: '.html'
                }
            ],
            options: {
                template: 'src/template.jst'
            }
        }    
    },
//      
//    marked: {
//        resume: {
//            files: {
//                src  : 'src/resume.md',
//                dest : 'build/resume-raw.html'
//            }
//        },
//         cover: {
//            files: {
//                  src  : 'src/coverletter.md',
//                 dest : 'build/coverletter-raw.html'
//            }
//        }
//    },
    concat: {
        files: {
            src : ['src/header.html','build/resume-raw.html','src/footer.html'],
            dest : 'build/resume.html'
        }
    },
    prettify: {
         options : {
              "indent": 4,
              "condense": true,
              "indent_inner_html": true
        },
        files: {
            src: 'build/resume.html' ,
            dest: 'build/index.html'
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
        build: ['build'],
        cleanup: ['build/resume.html','build/resume-raw.html']
    }
      

  });

  grunt.registerTask('default', ['clean:build', 'marked', 'concat', 'prettify', 'copy', 'clean:cleanup']);

};
