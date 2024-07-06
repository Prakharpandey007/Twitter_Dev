# Twitter-Dev
Twitter_Dev Backend is a Node.js application built with Express, MongoDB, Passport.js, JWT, and AWS SDK. It follows the MVC architecture, consisting of controllers, middleware, models, and routes to implement CRUD operations for authentication, comments, likes, and tweets.

## Project Structure
```
Twitter_Dev_Backend
├── config              # Configuration files (e.g., database, passport configuration)
├── controllers         # Controllers for handling business logic
├── middleware          # Custom middleware functions
├── models              # Mongoose models for MongoDB
├── routes              # Route definitions
└── uploads             # Directory for uploaded files (handled by AWS SDK)

```
## Features
 ### Authentication
 - POST /api/auth/register: Register a new user.
 - POST /api/auth/login: Authenticate and login a user, returning a JWT token.
   
 ### Tweets
 - GET /api/tweets: Retrieve all tweets.
 - POST /api/tweets: Create a new tweet.
 - GET /api/tweets/ : Retrieve a specific tweet by ID.
 - PUT /api/tweets/ : Update a tweet by ID.
 - DELETE /api/tweets/ : Delete a tweet by ID.

  ### Comments
  - GET /api/tweets//comments: Retrieve all comments for a tweet.
  - POST /api/tweets/comments: Add a new comment to a tweet.
  -  PUT /api/tweets/comments: Update a comment for a tweet.
  -  DELETE /api/tweets/comments : Delete a comment for a tweet.

  ### Likes
 - POST /api/tweets/like: Like a tweet.
 - DELETE /api/tweets/like: Unlike a tweet.
  
## Middlewares
- authMiddleware: Middleware to verify JWT tokens and authenticate users.

## Installations
- Clone the Repository
  ```
  git clone https://github.com/your-username/Twitter_Dev_Backend.git
  cd Twitter_Dev_Backend

  ```
- Install Dependencies
  ```
  npm install

  ```
- Set Up Enviroment Variables
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/twitter_dev
JWT_SECRET=your_jwt_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region

```
- Start the server
  ```
  npm start
  ```
- Access the Api
  ```
  http://localhost:3000/api/
  ```

## Contributing
Contributions are welcome! If you'd like to contribute to Twitter_Dev Backend, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/add-new-feature).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/add-new-feature).
- Create a new Pull Request.

##License
This project is licensed under the MIT License - see the LICENSE file for details.



