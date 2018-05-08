# Component Hierarchy

**Splash** :sweat_drops:
- Splash 
- SplashNav

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

**Entry** :notebook_with_decorative_cover:
- Entry
- EntryModal

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
| /                | Home              |
| /signup          | AuthForm          |
| /login           | AuthForm          |
| /splash          | Splash            |
| /dashboard       | Dashboard         |
| /new             | Home              |
| /entry/:id       | Entry             |
| /profile/        | Profile           |
| /custom          | Customize         |
| /custom/mood     | CustomizeMood     |
| /custom/activity | CustomizeActivity |
