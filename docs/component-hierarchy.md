# Component Hierarchy

**Splash** :sweat_drops:
- Splash 
- SplashNav
- SplashGreeting

**Session** :closed_lock_with_key:
- AuthForm

**Home** :house:
- Home
- MoodForm
- ActivityForm 

**Dashboard** :date:
- Dashboard
- Legend
- Monthly
- Yearly

**Note** :notebook_with_decorative_cover:
- Note
- NoteModal

**Profile** :name_badge:
- Profile
- ProfileModal

**Customize** :pencil2:
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
