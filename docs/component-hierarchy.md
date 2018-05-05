# Component Hierarchy

**Splash**
- Splash 
- SplashNav
- SplashGreeting

**Session**
- AuthForm

**Home**
- Home
- MoodForm
- ActivityForm 

**Dashboard**
- Dashboard
- Legend
- Monthly
- Yearly

**Note**
- Note
- NoteModal

**Profile**
- Profile
- ProfileModal

**Customize**
- Customize
- CustomizeMood
- CustomizeActivity


## Routes

|Path              | Component         |
|------------------|-------------------|
| /                | Splash            |
| /signup          | AuthForm          |
| /login           | AuthForm          |
| /home            | Home              |
| /dashboard       | Dashboard         |
| /new             | Dashboard         |
| /note/:id        | Note              |
| /profile/        | Profile           |
| /custom          | Customize         |
| /custom/mood     | CustomizeMood     |
| /custom/activity | CustomizeActivity |
