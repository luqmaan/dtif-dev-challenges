# Backend Challenge

Your task is to create an API that serves Austin transit data. This is an open‐ended challenge, so feel free to show off your creativity.

To complete this challenge you'll need to learn about [GTFS (General Transit Feed Specification)](https://developers.google.com/transit/gtfs/). A GTFS feed is a group of text files that contains infrequently changing transit data, like stops, routes, trips, and other schedule data. Transit agencies typically update their GTFS feed every few months.

For your convenience, we've checked in a [GTFS feed CapMetro published in June 2018](./gtfs-capmetro-june-2018). But, you can use [the latest GTFS feed from CapMetro](https://data.texas.gov/capital-metro) if you prefer.

Your challenge will be to figure out how to query the `.txt` files in [`gtfs-capmetro-june-2018`](./gtfs-capmetro-june-2018) and then build an API that serves that data.

You should be able to complete this challenge without using any transit specific libraries, but feel free to use one if you'd like. [awesome-transit](https://github.com/CUTR-at-USF/awesome-transit) is a community curated list of tools that can help you understand how to work with GTFS data.

## The API

Your API must provide a way to fetch the following data:

- List the available routes. You can fetch this data by querying `routes.txt`.
- List the trips for a specified route. You can fetch this data by querying `trips.txt`.
- List the stops for a specified trip. You can fetch this data by querying `trips.txt` and `shapes.txt`.

### Extra credit

This data is more challenging to query, but if you're enjoying this challenge try one of these:

- List the routes that stop near a location. Specify the location using `latitude` and `longitude`. You can fetch this data by querying `stops.txt`, `stop_times.txt`, and `trips.txt`.
- List the next five trips arriving at a particular stop. Specify the `stop_id` and `time`. You can fetch this data by querying `stops.txt`, `stop_times.txt`, and `trips.txt`.

## Resources

- GTFS (General Transit Feed Specification): https://developers.google.com/transit/gtfs/
- CapMetro Open Data: https://data.texas.gov/capital-metro
- awesome-transit: https://github.com/CUTR-at-USF/awesome-transit
- Us. If you are stuck, or need guidance, leave a comment to a line of code in Github or email us.

## Some Hints & Guidelines

- Build your API using any frameworks, tools, databases, or libraries you like.
- Write clean code. Bonus points for tests.
  - Your tests don't need to be extensive. Just check the basics. For example, does the routes query return more than 1 route?
- You must work on this alone. Do not share the code challenge with others.
