## Anime Blaze

* This is an anime clone web application that provides an user-friendly experience and a pleasing user interface(UI). This project was made to make it easier to access anime and view your desired anime in a click of a button. The main selling point of the application is the ease of usage and the design of the frontend.

* The application has the following features :
    * Search Anime by Anime Name
    * Get Details of an Anime on Search or by clicking on a card.
    * View currently Top Airing Anime.
    * Get Trending Anime displayed as carousel in home page
    * Get list of Latest Episodes Across Anime's
    * Watch an anime by clicking the Watch Now Button
    * Adding Comments in the watch page of an anime.
    * Login and Authentication using Firebase.
    * Create a list of personalized anime.

## Implementation Details

* The project was implemented using `Nextjs` as it makes it easier to do routing between different pages and also has an inbuilt backend.
* The styling was done using `TailwindCss` to speed up the implementation of the application.
* `Firebase` was used for login/authentication and `FireStore` was used to store a personalized list of anime and also to store comments written for an anime. It was used as the backend of the application.
* The application is deployed on vercel.

## Challenges Faced

* Getting the right api's for getting various anime related details.
* Integrating multiple api's (Ex: Needed to get a cover image for the carousel using a different api and got the trending anime from another api).
* Implementing a good looking frontend that would set my project apart from other applications.

## Future Scope

* View anime based on genre.
* Get personalized content based on anime that a user watches.

## Instructions to Run the Application

* The application is up and running on vercel and the link to the website is available in the github repo.
* To run it locally, firebase needs to be setup and the keys need to be added to the .env file.
* Once firebase is setup, clone the repository to your local system.
* Make sure nodejs is present in your system. Run  `npm install`.
* After this , run `npm run dev` to startup the application.

Note - Use the application in Brave or in a browser with adBlocker.

