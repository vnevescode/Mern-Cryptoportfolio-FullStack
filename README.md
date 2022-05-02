# Mern-Cryptoportfolio-FullStack

# Project Description

This is a MERN(Mongo,Express,React,Node) project that simulate a crypto currency portfolio app. In the project we can see the total amount in USD for all crypto coins the user have. It is possible too, add new ones, update values and delete, simulating a admin dashboard.

The project is divided into backend files and the frontend files. At the backend files, we have the server files with middlewares, api routes and calls to the externall api from coingecko. All the data from server is access using API endpoints. At the side of frontend, we have a app using React JS that consuming the Node Js API data using the Axios. 

# How to Install and Run the Project

Clone or Download de files. 

BackEnd-Part
To start the backend run "npm install" and "npm start". 

* The backend server use Atlas Mongo DB credentials, in the variable MONGO_CONNECT. To access this you need to create a account and a cluster on the Atlas Mongo DB and use the link for access there like this "mongodb://<userName>:<password>@apicluster-shard-00-00.tcmbh.mongodb.net:27017,apicluster-shard-00-01.tcmbh.mongodb.net:27017,apicluster-shard-00-02.tcmbh.mongodb.net:27017/CrudAPI?ssl=true&replicaSet=atlas-l03geb-shard-0&authSource=admin&retryWrites=true&w=majority
Or connect with a local MongoDb database.

Another option could be only download the Front-End version of the entire project that use API link from Heroku from the backend part already deployed. 

Link here -> ""
  
FrontEnd-Part
To start the frontend run "npm install" and "npm start". 
  
  
