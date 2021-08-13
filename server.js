var mockServer = require('mockserver-node');
var port = 1080


mockServer.start_mockserver({
    serverPort: port,
    trace: true
}).then(
    function () {
        console.log("started MockServer");
    },
    function (error) {
        console.log(JSON.stringify(error));
    }
);

mockServer.stop_mockserver({
    serverPort: 1080
})