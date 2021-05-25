
# BEER HERE

## Description:
1.  An app where users can look up breweries in any city.
There is a list of cities that users can choose from, or search for a city on their own.

## Deployment:
Check it out here! https://jok-beerhere.herokuapp.com/

## Wireframes:

https://media.git.generalassemb.ly/user/35453/files/c17e4e80-b8af-11eb-8906-e7a5a53a0626

## Technology Used:

Javascript, HTML, CSS, React.js

## API:
OpenBrewery DB: 
https://www.openbrewerydb.org/

## Major Hurdles/Unresolved issues:
1. Struggling to setup the search form to target the text input. Currently getting a way too large view of the function I think, and probably not being able to find the text in the search bar. Submitted problem issue for resolution. 
    ➡️ EDIT 1: Trying to use the react-giphy-seacher repo for clarification on the not functioning search function.
    ➡️ EDIT 2: Restructured search components so that handleSubmit and handleChange are on app level and can pass down as props. This also allows the searchbar to save the value of the searchbar input ✅
1. Created a function that would change all uppercase letters to lowercase and replaces white space with underscores, but doesn't work for the 3rd word. Why? 
    ➡️ EDIT 1: switched out replace method with replaceAll method, which targets the 2nd white space and resolves the issue ✅
1. Current search bar input is checked at every single new string being entered. (just changing the handle change on the click breaks things). Need to change so that search only happens once go button is clicked. 
    ➡️ Edit : I realized that I wasn't actually taking the handleChange object into the handleSubmit. Once the URL was setup (following issue), it was resolved. ✅
2. Need cleanedInput directly be set to the value of Cities so that the URL updates automatically. Feels like previous question and this question are linked in a significant way.
    ➡️ Edit: Took the event.target.value, ran it through the cleanup operation(I had to remove it ) ✅
3. Attempted to reduce things down to just 1 fetch call, but realized that because the variable used for the list only has onChange with no onSubmit, any change in the state(like every single keypress of a city name) will call the fetch. Unless I want to build a handleSubmit for the list component, I'm better off leaving it as it is.
1. Had some confusion retrofitting website to have mobile formatting.
    ➡️ Edit: Replaced name value of website link with "View Website" in order to have cards not stretch too far.
    ➡️ Changed card sizes to non-flexible values to keep card sizes consistent. But after catching this, I am considering if I should truncate the URL again.
1. Started with placeholder logo. Need to make clickable and lead to "home page status" (refresh the page?)
     ➡️ Edit: Realized everything exists on 1 page, no need for homepage link functionallity.

#### Priorities:
#####  SEARCH BAR NOTES: 
 1. Need to setup spacing ✅ and edge case projection.❓
 1. Adjusted positioning of searchbar.
#### Viewer Notes:
1. Current view only lists 25 results. Need to create option to keep searching for other results.
1. Need to create scroll bar to view other results.
1. Added phone number styling and made it conditional for visiblity.

#### Unsorted notes:
1. There is a ``` index.js:1 Warning: Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined`. ``` issue listed in my console.log, but does not critically break code as of right now. Will address in the future.

## Resources:
1. Created react App with : https://github.com/facebook/create-react-appneed 
1. Added phone number with : https://www.elegantthemes.com/blog/wordpress/call-link-html-phone-number#:~:text=Adding%20an%20HTML%20Phone%20Number%20Call%20Link%20to%20your%20Website&text=Href%3Dtel%3A%20creates%20the%20call,the%20number%20it%20will%20call
1. Added phone number styling with: https://stackoverflow.com/questions/4313841/insert-a-string-at-a-specific-index & https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
1. Added Titillium Web Font: https://fonts.google.com/specimen/Titillium+Web#pairings




# Future Plans
## MVP
1. Website to actually pull the API information. ✅
1. website to display brewery information. ✅
1. Website to actually search cities for breweries. ✅
1. Website to actually display breweries from the list of preselected cities. ✅
## Bronze:
1. aesthetics, functioning logo that refreshes the page.
1. link to the website. ✅
1. Scroll bar in Viewer.
1. Add styling to make presentable.
1. Add code to make website not so long in the cards.
1. Setup edge case protection (Would prevent symbols from being used & return a error message to the user.)

## Silver:

## Gold:

1. Set up GPS and link to google maps for directions. (Maybe an embedded Google map with a pin on those directions?)