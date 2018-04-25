# Component Hierarchy

**SplashContainer**
- SplashMain

**AuthContainer**
- AuthForm

**HomeContainer**
- EntryContainer
- Sidebar

**EntryContainer**
- MoodForm
- ActivityForm

**Sidebar**
- TrackMood
- YearlyMood
- Customize
- Profile

**MoodForm**
- MoodList

**ActivityForm**
- ActivityList

**TrackMood**
- BarGraph

**YearlyMood**
- YearGrid
- PieChart

**Profile**
- UserInfo

**Customize**
- NewMood
- NewActivity

**NewMood**
- AllMoods

**NewActivity**
- AllActivities


<!-- ## Routes

|Path   | Component   |
|-------|-------------|
| "/join" | "SplashContainer" |
| "/signin" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook" | "NotebookIndexContainer" |
| "/home/notebook/:notebookId" | "NotebookShowContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookShowContainer" |
| "/home/tag | "TagIndexContainer" |
| "/home/tag/:tagId" | "TagShowContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagShowContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" | -->