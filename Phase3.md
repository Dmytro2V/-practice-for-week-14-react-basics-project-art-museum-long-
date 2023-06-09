Art Museum pt.3

1 user recently completed this Reading
Here's a breakdown of the steps you'll be taking in this phase (more detailed instruction below):

Create <Route> in App.js for the home page.
Create <Route> in App.js for 404 errors/unknown paths.
Make two more routes in the App component:

(1) One for the home page at / and

(2) One for "Page Not Found" 404 errors.

The home page should display a <h2> with the text "Harvard Art Museum" and a description (<p>) with the text "Look, but Don't Touch. Please select a Gallery in the navigation bar."

And one more for route for displaying an <h2> "Page Not Found" when none of the routes in App matches the current path. To make the final "Page Not Found" route, you will need to utilize React Router's Switch component. Nice to have some decent documentation, isn't it?

Test this out by navigating to a route like /not-found. You should see "Page Not Found" and not "Harvard Art Museum". At /galleries/:galleryId, you should see the name of the gallery and not "Harvard Art Museum".