var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "path": "/some/path"
    },
    "httpOverrideForwardedRequest": {
        "httpRequest": {
            "path": "/some/other/path",
            "headers": {
                "Host": ["target.host.com"]
            }
        }
    }
}).then(
    function () {
        console.log("expectation created");
    },
    function (error) {
        console.log(error);
    }
);