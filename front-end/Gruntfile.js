module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-uncss");
  grunt.initConfig({
    uncss: {
      dist: {
        files: {
          "dist/css/tidy.css": [
            "new.css",
            ["./src/components/atoms/Paginator.html"]
          ]
        }
      }
    }
  });
};
