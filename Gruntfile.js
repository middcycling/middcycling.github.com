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
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Define tasks
  grunt.registerTask('build', [
    'compass'
  ]);

  // Register tasks
  grunt.registerTask('default', ['build']);

}