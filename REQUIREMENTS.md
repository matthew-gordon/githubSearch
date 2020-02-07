React Native Code Exercise

Objective

The objective is to build a repository search application using the Github repository search API (https://developer.github.com/v3/search/#search-repositories) that displays the results of a query.
The list should be able to sort by relevance (score) and number as stars and should be able to filter by language.
Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

Requirements

1. Search Input
   - An input to type in the text to search github.
2. Search results
   - Show the results of the search.
3. Sort results
   - By relevance (score)
   - Stars
4. Filter results
   - By language
5. Detailed Result Page
   - A page that when a result is clicked shows a detailed screen of the repository.

Implementation

- The application should be built using React Native. Please do not use Expo.
- The application should be able to run on both Android and iOS devices.
- The application should have two screens:
  - Search screen
  - Details screen
- Please write your code in Javascript or Typescript

Evaluation

The solution will be evaluated against the following criteria:

1. Was the code able to be built and ran locally?
2. Code Quality - is the code clean, simple, commented, modern, well designed?
3. User Experience - how simple, intuitive, and clear is the UI?
4. Error handling - does the code handle potential errors gracefully?

Submission

- Host the source code in a public Github repository
- Send a link to the Github repository as well as your zipped binaries for both Android (.apk) and iOS (.ipa). If you don't have an Apple Developers License then just send an .apk.

Bonus

- Tests that demonstrate the code works correctly and handles anything that might be thrown at it.
