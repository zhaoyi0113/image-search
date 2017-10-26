# Image Search

This project is created by `reactjs` with `redux` as state manager. `blueprintjs` is used as css framework. It uses `Google search engine API` to search images from google. It has daily limits for free account. Please check the daily limit from [Usage Limit](https://developers.google.com/webmaster-tools/search-console-api-original/v3/limits). Mock data will be shown if it reaches daily usage limit.

## Installation

This application is managed by `webpack2` and `yarn` is a recommanded node cli compare to `npm`. Follow below steps to install and launch this application:

- yarn install
- yarn start

If you launch the project successfully, you can open browser to access `http://localhost:8080`. Click anywhere on this page and search the images from the popup dialog. The image will be inserted in the web page when you click on the search result list.

## Project Structure

 - `app/actions`  it defines actions used to query restful API
 - `app/reducers`   the data received from restful will be reduced to store states
 - `app/components`   react UI components are defined here
 - `app/assets`    style file
