'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade'],
      },
      compass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass']
      },
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'jade',
          src: ['**/*.jade'],
          dest: '', // write to the home directory
          ext: '.html'
        }]
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Define tasks
  grunt.registerTask('build', [
    'compass',
    'jade'
  ]);

  // Register tasks
  grunt.registerTask('default', ['build']);

}