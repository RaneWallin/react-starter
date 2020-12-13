# React Starter

This is a basic React starter project for people who don't want to use create-react-app. It allows you to easily update the webpack configuration without needing to eject the project. It also has a Node.js starter server to run the application. There is no need to create a separate server.

## Install

1. Fork the project
2. Clone your forked project
3. Go into the project directory
4. Install the project
    `npm install`
5. Start the project\
    a. Start the Node server in development mode
        `npm run server:dev`\
    b. Start webpack in another terminal window
        `npm run react:dev`
6. View project by navigating to `localhost:5150`

## Editing your project

The React app is in the `client/` folder. It is setup to inject the single page application into a `div` with the id of `root`. 

Webpack bundles the transpiled Javascript into `public/bundle.js`. It creates an `index.html` file using `public/index_template.html` as a template.

`public/index_template.html` is the place to put in any static javascript imports, analytics, metadata, etc. Don't forget to change the page title in the template.

The Node.js server is in the `server/` folder. The base version only serves static files from the `public/` directory.

## Limitations

This version does not include hot reloading. You can do that by setting up the [webpack-dev-server](https://github.com/webpack/webpack-dev-server). Otherwise, when you make changes just refresh the page.

## Included packages
The below packages are already included. Additional packages can be installed using `npm install`.

### Tools
`nodemon` - runs a development server \
`concurrently` - lets you run multiple npm commands in a single terminal


### Front end
`react`\
`react-dom`\
`styled-components` - component level styling

### Backend
`express`\
`cors` - easily configure cors headers\
`morgan` - pretty logs to the server console\
`helmet` - Adds additional security layers\
`dotenv` - imports environmental variables from `.env`

### Webpack & Babel
`babel/core`\
`babel/runtime` - allows `async`/`await` and other ES8+ features in the React app\
`babel-plugin-styled-components` - improved support for styled-components \
`babel/plugin-transform-runtime` - allows `async`/`await` and other ES8+ features in the React app\
`babel/preset-env` - transpiles ES6+\
`babel/preset-react` - supports React and JSX\
`webpack`\
`webpack-cli`\
`babel-loader` - Allows webpack to use babel to transpile the React app\
`style-loader` - gets CSS and resolves imports\
`css-loader` - inserts CSS into page\
`html-webpack-plugin` - use a template to define how`index.html` should look


## Changelog
### 0.1.1 - 12/10/2020
- Removed react-icons and react-loader. 
- Modified `.gitignore` so `index_template.html` will be tracked
- Added additional documentation.

### 0.1.0 - 12/09/2020
- Initial project
