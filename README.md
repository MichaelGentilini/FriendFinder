# FriendFinder - Using Node and Express

### Overview
Friend Finder uses Express to handle routing and takes in results from the users' surveys and then compares their answers with those from other users

#### [Watch the Video](https://drive.google.com/file/d/1wLaSc7LmmHFYkKzo5B0i-75TnjXGxDou/view?) or Find it [Here](https://friendfinder-mg.herokuapp.com/)


### Paths

     - /
     - /api/friends
     - /api/friends/:name
     - /survey 

 - "/" The main page includes a Boostrap jumbotron with a button that goes to the survey as well as various links.

- "/api/friends" displays various friends that exist in JSON format.

- "/api/friends/name" was added so you can search to see if a name exists.
 
- "/survey" is includes the Bootstrap jumbotron as well as a card with the survey.    

	 
	1. The survey has 10 questions with answers ranging on a scale of 1 to 5.
	2. The user enters their name, a link to their photo, and their selections.
	3. Once the user enters their information, a Bootstrap modal presents the closest match.  
	4. The user's information is added to the list on /api/friends

### Things I Used
- deployed on [Heroku](https://friendfinder-mg.herokuapp.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Path](https://www.npmjs.com/package/path)
- [Bootstrap Modal](https://getbootstrap.com/docs/4.3/components/modal/) 


----------

#Find it:

[https://friendfinder-mg.herokuapp.com/](https://friendfinder-mg.herokuapp.com/)

[https://github.com/dallasappraiser/FriendFinder](https://github.com/dallasappraiser/FriendFinder)