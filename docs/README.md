# react-indecision-app-demo
React.js Indecision App Demo

##  Pre-requisites.

 - Install Node.JS
 - Clone repo from github:  [https://github.com/StuLast/react-expenses-app](https://github.com/StuLast/react-expenses-app)

##  Development Setup
1.  Before running any builds or dev servers, you'll need to update the node-sass module for you dev system:
```npm rebuild node-sass```

2. Run local dev server:  (You'll need to do a workaround for the moment, to build a dist folder in the public_html.  See step 4).
```npm run dev-server```

3. Run local production build (for code/filesize review):
```npm run build:dev```

4. Run webpack build for production:
```npm run build:prod```

##  Test Suite

1.  To run the test suite
```npm test -- --watch``` - for automated testing whilst developing
```npm test -- --watch --verbose``` - for automated testing whilst developing but with each test listed in output
```npm test``` - for one-off testing and CI/CD pipelines

## Live Demo

You can see a live version of this demo on <a href="http://react-expensologist-demo-app.herokuapp.com/dashboard." target="_blank">http://react-expensologist-demo-app.herokuapp.com/dashboard</a>.  It's important to note that this is a demo app only.  Data is not persisted for any length of time and is frequently cleared out or overwritten.

## License

This app is currently covered by a limited use license.  Visit <a href="/react-expenses-app/LICENSE.md"> docs/LICENSE.md </a> for more info.
