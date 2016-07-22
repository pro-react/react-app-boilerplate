Important Update
================

Facebook released a tool to create React Apps with no need for configurations or boilerplates. If you're just begining to learn React, you might want to use create-react-app instead of using this boilerplate project.

```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start

```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<img src='https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67' width='600' alt='npm start'>

For more information on create-react-app, take a look at [Dan Abramov's blog post ](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) and the [Github repository](https://github.com/facebookincubator/create-react-app)

Behind the scenes, create-react-app uses Webpack and Babel. 

You might still want to use this boilerplate if you want to see how Webpack and Babel can be manually configured in a project.

React App Boilerplate
=====================

Quickstart project template for learning React.

### Objective

This boilerplate is purposefully simple to show the minimal setup needed to create React projects with Webpack and Babel. It aims to be a starting point for learning React, with low cognitive load and as such avoids having many separate config files and advanced configuration options, while providing a solid foundation for new React projects.

### Usage
**Clone this repository**
```
git clone git@github.com:pro-react/react-app-boilerplate.git
```

**Install**
```
npm install
```

**Start the application in development mode**
```
npm start
```

Open http://localhost:8080 in your browser.

Static files are served from the `public` folder, project JavaScript files are bundled from the `app` folder.

**When ready, build for production**
```
npm run build
```

This will generate a minimized bundle.js file on the `public` folder.


### Missing Features

This boilerplate focuses solely on transforming and bundling javascript files - all other static files are served directly from the public folder without any processing. While useful for learning React, this setup doesn't use Webpack and Babel in their full capabilities - which include transforming and bundling projects assets (such as stylesheets), modularizing CSS, hot reloading and etc. Please refer to [Pro React Appendix A](http://www.pro-react.com/materials/) to learn more about Webpack. If you are looking for a feature-rich bootstrap for React, take a look at [React App Advanced Boilerplate](//github.com/pro-react/react-app-advanced-boilerplate).


### Dependencies

* React & React-DOM
* Webpack & webpack-dev-server
* Babel Core
* Babel Loader (With "es2015" and "react" presets)
