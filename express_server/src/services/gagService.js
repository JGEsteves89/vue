const fetch = require("node-fetch");

module.exports = {
    fetch_9gag_data: async function () {
        // get info from 9gag
        let response = await fetch(
            "https://9gag.com/v1/featured-posts",
            {
                "credentials": "omit",
                "headers":
                {
                    "accept": "application/json, text/plain, */*",
                    "sec-fetch-dest": "empty"
                },
                "referrer": "https://9gag.com/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "GET",
                "mode": "cors"
            });
        let data = await response.json();

        // decode the media links
        data.f

        return data;
    }
};