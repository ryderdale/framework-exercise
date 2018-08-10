# Framework Exercise

This exercise will be considered successful when it:

- Fulfills all of the user stories
- Uses builtin components, directives, and filters
- Uses some kind of data binding (doesn't use direct DOM manipulation or save data to the DOM)
- Routes directly to "pages" in the Single Page App

- All post data will only be stored in memory
  - That is, a page refresh will clear all added posts, and that's fine
- You do _not_ have to make any ajax requests or actually contact an API

## User Stories

Feel free to style / theme / rename the app to make it something you might put on your portfolio.

**Users can create a post**

- Users can toggle the "New Post" form
- Users can create posts
  - Each post has a title, author, image, and description
- Users cannot create a new post if any of the inputs are blank
  - Fields should only appear invalid once they've tabbed off
- Users cannot click "Create Post" until the form is valid

**Users can view posts**

- Users see the number of comments correctly pluralized
  - i.e. "0 comments" or "1 comment"
- Users see posts dynamically reorder according to number of votes
- Users see the post's date/time displayed nicely
  - i.e. "Yesterday at 3:09pm", "4 minute ago", etc.

**Votes**

- Users can upvote
- Users can downvote
  - But not make it go lower than 0

**Filter**

- Users can filter based on the post title

**Sort**

- Users see posts ordered by votes (most first) by default
- Users can sort by Date or by Title

**Comments**

- Users can toggle comments
- Users can add comments

## Detailed Wireframes

**Posts**

Form toggle

![Form Toggle](img/frex-form-toggle.gif)

Validations

![Validations](img/frex-form-validations.gif)

Creating and viewing a post

![Creating and viewing a post](img/frex-create-post.gif)

**Votes**

Upvoting

![Upvoting](img/frex-votes.gif)

Downvoting

![Downvoting](img/frex-down-votes.gif)

**Filter**

![Filter](img/frex-filter.gif)

**Sort**

![Sort](img/frex-sort.gif)

**Comments**

![Comments](img/frex-comments.gif)
