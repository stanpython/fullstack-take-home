# Take Home Exercise
You will have a week to complete the following take-home exercise. Please choose Javascript, Ruby on Rails, or Python as your language to code the following. When submitting please include the following:

* A Readme for how to run the application and any tests (including any dependencies that must be downloaded).

* Any comments to explain particular logic or call out something cool!


To submit your exercise, please email your code g-zipped to [sara@join-real.com](mailto:sara@join-real.com). Also please email with any questions you may have. Happy Coding!

---

## Exercise: Course Sign-up
Create an application (Frontend and Backend) that allows people to sign up for courses. Courses are structured in the following way: 

*  Each course has 4 sessions, and each session's content is released on a weekly basis. 

* A new section of the course is opened for sign up every 2 weeks.

* There is a cap of 10 people per course section.


## Requirements
* Javascript, Ruby on Rails, or Python preferred.

* A basic `create-react-app` project is included to use for Frontend template, though feel free to use what you are comfortable with! (We are not judging design).

* All session titles and description should be viewable to users before sign up.

* A session's content should be viewable only by people who have signed up for the course. 

* The session's content should not be viewable until it's release date

### Bonus Requirements (Not required for submission!)
* Only the section closest to its start date should be active for sign up until it is full. 
    * (i.e. if a course has a section starting January 1 and January 14, users can only sign up for January 1 until full).

* A user should only be able to sign up for 1 section of the course at a time.

### Note: Create-React-App
If you use the `create-react-app`, you must have `npm` or `yarn` installed. To run the app:
```
yarn && yarn start

-OR-

npm i && npm start 
```

