
# BEER HERE

## Description:
1.  An app where users can look up breweries in any city.
There is a list of cities that users can choose from, or search for a city on their own.

## Deployment:
TBA

## Wireframes:

https://media.git.generalassemb.ly/user/35453/files/c17e4e80-b8af-11eb-8906-e7a5a53a0626

## Technology Used:

Javascript, HTML, CSS, React.js

## API:
OpenBrewery DB: 
https://www.openbrewerydb.org/

## Major Hurdles/Unresolved issues:
1. Struggling to setup the search form to target the text input. Currently getting a way too large view of the function I think, and probably not being able to find the text in the search bar. Submitted problem issue for resolution. Edit: ➡️ Trying to use the react-giphy-seacher repo for clarification on the not functioning search function.
EDIT 2: Restructured search components so that handleSubmit and handleChange are on app level and can pass down as props. This also allows the searchbar to save the value of the searchbar input ✅

#### Priorities:
#####  SEARCH BAR NOTES: 
 1. Current search bar input is checked at every single new string being entered. (just changing the handle change on the click breaks things). Need to change so that search only happens once go button is clicked.
 1. Need to setup spacing and edge case projection.
 ➡️ ➡️ Would prevent !@#$%^&*() symbols from being used & return a error message to the user.
#### Viewer Notes:
1. Current view only lists 25 results. Need to create option to keep searching for other results.
1. Need to create scroll bar to view other results.

#### Unsorted notes:
1. There is a ``` index.js:1 Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`. ``` issue listed in my console.log, but does not critically break code as of right now. I do ## Sources:
1. Created react App with : https://github.com/facebook/create-react-appneed to address it in the future.






# Future Plans
## MVP Goals
1. Website to actually pull the API information. ✅
1. website to display brewery information. ✅
1. Website to actually search cities for breweries. 
1. Website to actually display breweries from the list of preselected cities. ✅
## Bronze:
1. aesthetics, functioning logo that refreshes the page.
1. link to the website. ✅
1. Scroll bar in Viewer.
1. Add styling to make presentable.

## Silver:

## Gold:

1. Set up GPS and link to google maps for directions.