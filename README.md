# Harry Potter JavaScript Application

## Objective 

Build a small web application with HTML, CSS, and JavaScript that loads data from an external API, and enables users to click each data card for more details.

For this application, I used the Harry Potter API found here: https://www.potterapi.com/

## How To Use

Originally, I used the Harry Potter API from this resource: https://www.potterapi.com/. But recently, it has come to my attention that the API is under construction by its creator. Therefore, I opted to temporarily use the API from this resource: http://hp-api.herokuapp.com/. The issue with this is that the API URL I am using to fetch the data is an insecure resource and will not load over HTTPS.

In order to still view the application without any risks, please view the whole repo locally, via http-server by following these instructions:

- Download the zip file by clicking on the green button that says `CODE` right above this github repository
- Open the zip file to extract the folder
- Using your code editor of choice, open the folder
- Within the terminal, install http-server: `npm install --global http-server`
- Within the terminal, type `http-server` and click on any of the local hosts that are presented
- You should now be able to view the application and interact with it

## Technical Information

- Loads data from an external API
- Displays a list of items specified from the API
- Enables the viewing of more details upon clicking an item
- Uses CSS styling
- JavaScript code is formatted using ESLint and Prettier
- Uses a complex UI pattern - modals
- The app is deployed to GitHub Pages
