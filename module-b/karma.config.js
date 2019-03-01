module.exports = function(config) {
    config.set({
        basePath: '',
        port: 8124,
        colors: true,
        autoWatch: false,
        singleRun: false, // for debugging
        logLevel: config.LOG_DEBUG,

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
            bundlerOptions: {
                entrypoints: /Test\.ts$/
            }
        },

        frameworks: ["mocha", "karma-typescript"],
        files: [
            "node_modules/mocha/mocha.css",
            "node_modules/module-a/src/*.ts", // otherwise module-a seems to not be included
            "src/**/*.ts",
            "test/**/*.ts"
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots", "karma-typescript"],
        browsers: ["Chrome"]
    });
};