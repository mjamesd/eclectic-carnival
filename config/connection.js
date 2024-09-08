const { connect, connection } = require('mongoose');

// Add "MONGODB_URI" to Heroku Config Vars. It should be like this:
// mongodb+srv://<user>:<password>@<appname>.<something>.mongodb.net/eclecticCarnivalDb?retryWrites=true&w=majority&appName=<appname>
// You can find this in the MongoDB Atlas dashboard. Go to your database, click "Connect", and choose "Drivers". Use the "Node.js" driver.
// Copy the connection string in step 3, then add "eclecticCarnivalDB" (or whatever you'd like to call the database) after ".net/", like above.
// You'll also have to whitelist the IP address (or allow access from anywhere) in the MongoDB Atlas dashboard. For production apps, you should use a proxy service for Heroku and whitelist the proxy IP address.

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/eclecticCarnivalDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;