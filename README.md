NOTA
=======================

This is a sample music application to demonstrate how to use angularJS in music streaming service. Its basically let users login to system with one of their social media accounts (facebook, twitter, github and etc) and have post on the chat page. (now you can log in with sample)

Right now it supports twitter and facebook for login, but soon other platforms will be added.

All login and chat stuff happens on client side but I had to use NodeJS and ExpressJS for routing and so on.

Here is a demo

Set up instructions

You need to have a firebase account and a facebook and/or twitter app in order to run the application. For more detailed instructions please take a look at Firebase Docs

Sign in to firebase and get your firebase url.
Then change the url in the config file under the web-app/scripts/configuration/config.js
You also need to have a facebook and/or twitter app and add oAuth key to your facebook/twitter app. Take a look at Documentation on Firebase
Installation

After you have done with your configuration:

npm install
node app.js
Open your browser and load the URL http://localhost:8080
TODO

[] Add other platforms too (goodle, github and etc..)
[] Layouts need some css
