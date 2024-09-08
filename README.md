# Eclectic Carnival

![status: stable, version 1.1.0](https://img.shields.io/badge/stable-version%201.1.0-green)

![License: GNU General Publice License v3.0](https://img.shields.io/badge/license-GNU%20General%20Publice%20License%20v3.0-yellowgreen)

## Description

Eclectic Carnival is an Express.js & Mongoose API back end for a social network.

Users can create thoughts and other users can post reactions to the thoughts. Users can add other users as friends. EC utilizes asynchronous JavaScript functions and performs CRUD functions (Create, Read, Update, and Delete) on users, thoughts, and reactions.

When a user deletes their account, all their thoughts are also deleted.

It uses Luxon to return formatted datetimes. Luxon is the chosen successor to Moment.js. See more [here](https://momentjs.com/docs/#/-project-status/).

The app uses the `Mongoose`, `Express`, and `Luxon` Node.js packages.

### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

AS A developer of a social media website
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Demonstration](#demonstration)
5. [License](#license)
6. [Questions](#questions)

## Installation

To start using Eclectic Carnival, first clone [the repo](https://github.com/mjamesd/eclectic-carnival) to your server. Then run `npm i` to install all the dependent packages.

Next, open `connection.js` in the `config` folder. Supply your own MongoDB hostname and database name if applicable. Alternatively, [create an environment variable in your hosting platform](#add-mongodb_uri-to-heroku-config-vars) with the key `MONGODB_URI` and the hostname and database name of your MongoDb as the value.

You'll also have to whitelist the IP address (or allow access from anywhere) in the MongoDB Atlas dashboard. For production apps, you should use a proxy service for Heroku and whitelist the proxy IP address.

Lastly, you may seed the database by running the command `npm run seed`. If you are using Heroku, the seed file will automatically run when the app build is complete. To remove this behavior, edit the `package.json` file to comment out or remove the key-value pair for key `heroku-postbuild`.

### Add `MONGODB_URI` to Heroku Config Vars

Once you've set up the app in Heroku, go to Settings and add an entry to the Config Vars. Enter the key `MONGODB_URI`. You can find the value for this key in the MongoDB Atlas dashboard. First create a database. Go to your database, click "Connect", and choose "Drivers". Use the "Node.js" driver. Copy the connection string in step 3, then add "eclecticCarnivalDB" (or whatever you'd like to call the database) after ".net/", like so:

<pre><code>mongodb+srv://&lt;user>:&lt;password>@&lt;databasename>.&lt;something>.mongodb.net/<b>eclecticCarnivalDb</b>?retryWrites=true&w=majority&appName=&lt;databasename></code></pre>

## Usage

Open a terminal, navigate to the directory containing the `index.js` file. If you are _not_ building the app on Heroku, run `npm run seed` first. Lastly, run `npm run start` to start the app.

There are no HTTP endpoints for the app; it is strictly an API backend. Therefore, you will need to use an API client such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/). I created a collection of API requests in Insomnia and exported them. You can find them in the repo as "eclecticCarnival_Insomnia_collection.json". Import this collection into Insomnia and then you can interact with the app. If you are running your own build of the app, you will have to change the "host" variable in the Insomnia environment.

## Demonstration

You can try Eclectic Carnival live using the Insomnia request collection in this repo.

Alternatively, you may view these two videos for a demonstration of the API functionality:

-   [Part 1](https://drive.google.com/file/d/1_uKWSpw8DpPMZ2JhSGXiXMkPcHcvJJCx/view)
-   [Part 2](https://drive.google.com/file/d/11u7YTUj02hcCTjzgiGY_yrcV7KUtIcPn/view)

## License

This work is licensed under GNU General Publice License v3.0.

## Questions

Visit [the app's GitHub repo](https://github.com/mjamesd/eclectic-carnival).

To reach me with additional questions, email me at [mjamesd@gmail.com](mailto:mjamesd@gmail.com).
