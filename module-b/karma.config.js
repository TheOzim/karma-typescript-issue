module.exports = function(config) {
    config.set({
        basePath: '',
        port: 8124,
        colors: true,
        autoWatch: false,
        singleRun: true, // for debugging
        logLevel: config.LOG_DEBUG,

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
            bundlerOptions: {
                entrypoints: /Test\.ts$/
            },
            coverageOptions: {
                exclude: [/Test\.ts/, /module-a/, /index\.ts/]
            }
        },

        frameworks: ["mocha", "karma-typescript"],
        files: [
            "node_modules/mocha/mocha.css",
            "../module-a/src/**/*.ts", // otherwise module-a seems to not be included
            "src/**/*.ts",
            "test/**/*.ts"
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"],
            "../module-a/**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots", "karma-typescript"],
        browsers: ["Chrome"]
    });
};