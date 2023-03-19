# Clicked

<br>

# Quick Compo

<br>

## Description

Connect people base in what they have in common. Answer a questionnaire and base on that it will show the other users that have the same things in common with you. Chat with them and and see your chat history, delete messages you dont want them to see.

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
| `/questionnaire`           | Questions | user only `<PrivateRoute>` | Some question pages user needs to answer.                               |                                       |
| `/clicks` | User List | user only `<PrivateRoute>` | Users List. Shows list of all users the user has in common with. |
| `/users/profile/:id`    | UserDetails    | user only `<PrivateRoute>` | Single user details.                                    |
| `/yourchats/`    | Message        | user only `<PrivateRoute>` | User can see all chats.    
                            |




## Components

Pages:

- Login

- Signup

- Home

- Profile
  
- EditProfile
  
- Questions (many question pages (6-8))

- Clicks
  
- ClickDetails
  
- All Chats
  



Components:

- ChatBox
- Private
- Navbar
- Footer
- QuestionCard


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
  author: {type: Schema.Types.ObjectId, ref:"User"},
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
```


**Chat model**

```javascript
    {
      userIds: [{type: Schema.Types.ObjectId, ref:"User"}],
      messages: [{type: Schema.Types.ObjectId, ref:"Message"}]
    },
    {
      timestamps: true,
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
| PUT         | `/api/questionnaire` | { [questionnaire] }       | 200            | 400          | questions user needs to answer in order to see his matchs. This route updates the users profile.                                             |
| DELETE      | `/api/messages/:id` |                              | 201            | 400          | delete messages.                                         |
| GET         | `/api/clicks`     |                              |                |              | show matched profiles                                         |
| GET        | `/api/clicks/:id`         | { name, img, description, questionnaire }  | 200            | 404          |                                                    |

| DELETE      | `/api/profile/:id`     |                              | 200            | 400          | delete your own profile                                                |
| PUT         | `/api/edit/profile`           |                              | 201            | 400          | Edit Profile                                                 |
| POST         | `/api/message/:chatId/:user`           |                              | 201            | 400          | Create chatroom with other user                                               |
| GET        | `/api/message`           |                              | 201            | 400          | Get message                                                |

| POST         | `/api/chat/:user1/:user2`           |                              | 201            | 400          | Chat                                                |
| GET         | `/api/chats/:userId`           |                              | 201            | 400          | All chats user have                                                |



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