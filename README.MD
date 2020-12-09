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

## Limitations

This version does not include hot reloading. You can do that by setting up the [webpack-dev-server](https://github.com/webpack/webpack-dev-server). Otherwise, when you make changes just refresh the page.

## Included packages
The below packages are already included. Add any additional packages using `npm install`.

## Tools
nodemon\
concurrently


## Front end
react\
react-dom\
react-icons\
react-loading\
styled-components

## Backend
express\
cors\
morgan\
helmet\
dotenv

## Webpack & Babel
babel/core\
babel/runtime\
babel-plugin-styled-components\
babel/plugin-transform-runtime\
babel/preset-env\
babel/preset-react\
webpack\
webpack-cli\
babel-loader\
css-loader\
style-loader\
html-webpack-plugin

