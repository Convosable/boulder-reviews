# Boulder Problem Reviews

Boulder Problem Review is an application that authenticates a user and allows the user to leave a review for a boudler problem, as well as create a new boulder problem if the one they want to review is not created. The user is also able to view their current projects as well as their completed climbs by visiting their profile page.

## Usage

To start the application: 

    Run the followinng command in your terminal to install all Ruby Gems and Dependencies:
        bundle install
    Run the following command in your terminal to install all Node.js Dependencies:
        npm install --prefix client
    Then run the following to set up the database:
        rails db:create
        rails db:migrate
        rails db:seed
    
    To start the server, run the following command:
        rails server // this will run on localhost:3000
    To view the application in the browser, run the following command:
        npm start --prefix client // this will run on localhost:4000

Enjoy!


## Future Updates

    - create a section where a user can update their personal information
    - create a friends ability to where a user can view another users profile if they are friends
    - add some kind of admin permissions to delete boulder problems or any reviews that may be inappropriate


