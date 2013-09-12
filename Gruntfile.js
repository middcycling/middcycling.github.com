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
        tasks: ['jade', 'string-replace'],
      },
      compass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass']
      }
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
    },
    'string-replace': {
      dev: {
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: '',      // Src matches are relative to this path.
          src: ['*.html', '_layouts/*.html'], // Actual pattern(s) to match.
          dest: '',   // Destination path prefix.
          ext: '.html',   // Dest filepaths will have this extension.
        }],
        options: {
          replacements: [{
            pattern: '\n---|',
            replacement: '---'
          }]
        }
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-string-replace');

  // Define tasks
  grunt.registerTask('build', [
    'compass',
    'jade',
    'string-replace' // Must come right after 'jade'
    ]);

  // Register tasks
  grunt.registerTask('default', ['build']);

}