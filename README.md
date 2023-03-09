# Clicked

<br>

# Quick Compo

<br>

## Description

Connect people base in what they have in common. Answer a questionnaire and base on that it will show the other users that have the same things in common with you.

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of questions I have answered.
-  **Questions pages** - As a user I will need to see the list of different questions to answer.
- **Common profiles** - As a user I want to see more details of other user i have stuff in common and message them.

- **BONUS: chat** - As a user I want to be able to chat with the other user.

- **BONUS: like** - As a user I want to be able to like the user profile.
  

## Backlog

- add my geolocation


<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/login`                     | Login            | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | Signup           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | Home             | public `<Route>`           | Home page.                                                |
| `/profile`              | Profile         | user only `<PrivateRoute>` | User and player profile for the current user.             |
| `/profile/edit`         | EditProfile      | user only `<PrivateRoute>` | Edit user profile form.                                   |
| `/questions`           | Questions | user only `<PrivateRoute>` | Some question pages user needs to answer.                               |
| `/profile/updated`               | Profile with the questions the user answered   | user only `<PrivateRoute>` | Profile with the answer the user picked.                                         |
| `/users` | User List | user only `<PrivateRoute>` | Users List. Shows list of all users the user has in common with. |
| `/users/profile/:id`    | UserDetails    | user only `<PrivateRoute>` | Single user details.                                    |
| `/user/message/:id`    | Message        | user only `<PrivateRoute>` | User can get in contact with the other user.                                 |




## Components

Pages:

- Login

- Signup

- Home

- Profile
  
- EditProfile
  
- Questions (many question pages (6-8))

- ProfileUpdated

- Users
  
- UserDetails
  
- Message
  
- Error



Components:

- UserCard
- UsersCard
- Navbar
- Footer


## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Question Service**

  - `questionService` :
    - `.putQuestion(id)`
  

<br>


# Server / Backend


## Models

**User model**

```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  description: {type: String},
  questionnaire: {type: [String], required: true}  
}
```



**Message model**

```javascript
 {
   message: { type: [String], required: true },
 }
```


**Chat model**

```javascript
{
  chat: { type: String, required: true },

}
```



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| PUT         | `/api/question/:id` | { [questionnaire] }       | 200            | 400          | edit question                                              |
| DELETE      | `/api/matches/:id` |                              | 201            | 400          | delete the matched you dont like.                                         |
| GET         | `/api/matches`     |                              |                |              | show matched profile                                         |
| GET        | `/api/matches/:id`         | { name, img, description, questionnaire }  | 200            | 404          |                                                    |

| DELETE      | `/api/profile`     |                              | 200            | 400          | delete your own profile                                                |
| POST         | `/api/edit/profile`           |                              | 201            | 400          | Edit Profile                                                 |


<br>

## API's

<br>

## Packages

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

Marisha Deroubaix - <deroubaix> - <linkedin.com/in/marisha-deroubaix>

Eveline Coenegrachts - <evelinecoen> - <linkedin.com/in/eveline-coenegrachts>