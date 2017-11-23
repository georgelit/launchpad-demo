module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    openui5_preload: {
        component: {
            options: {
              resources: {
                cwd: '',
                prefix: '',
                src: [                                  
                  'webapp/controller/**/*.js',
                  'webapp/model/**/*.view.json',
                  'webapp/view/**/*.view.xml',
                  'webapp/i18n/**/*.properties'
                ]
              },
              dest: '',
              compress: true
            },
            components: true
          }
    }
  });
  grunt.loadNpmTasks('grunt-openui5');
  grunt.registerTask('default', ['openui5_preload']);
};