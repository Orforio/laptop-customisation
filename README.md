# Laptop Customisation Tool

Install dependencies with `npm install`
Run with `npm run start`
Run unit tests with `npm run test`

## Notes

I wanted to build the app with modularity and future improvements in mind.
For example, I wanted the app to render the specs and part lists dynamically so in future this could be hooked up to
a database without the need for code changes depending on the number of specs or parts.

## Improvements

- Depending on how complicated the computer specs will get, it could have been a good idea to turn the Computer into model class, and leave the handling of part updates/cost calculation to that rather than doing it in the App component.

- The media queries could be turned into Sass mixins to avoid repetition.

- For unit testing I usually prefer Enzyme. React-Testing-Library has some very good ideas (such as selecting elements as a user would) but I feel it's more of an integration testing library than a unit testing one. I would also usually use mock data fixture factories on larger projects.
