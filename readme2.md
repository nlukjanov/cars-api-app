![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
​
# Express API Authentication Lab
​
Taking the starter code provided add authentication to the existing API.
​
## Deliverables
​
You should submit a fully working API has authenticated routes and register and login endpoints. The API should return a JWT token at login, which can be used to access specific endpoints that would otherwise be unavailable.
​
You will need to make a user model, secure route middleware and authentication endpoints.
​
## Tips
​
* Work slowly toward your goal, and test frequently as you go.
* Do not copy / paste from code you have written during class, this will not help you understand how everything fits together.
* Use the seeds file to reset the database if you need.

Authentication Lab
Don't forget to install bcrypt & jsonwebtoken
1. Create the user model
- Build out the basic model
- Set up the virtual field for passwordConfirmation (watch the spelling)
2. Set up the user methods
- .pre('validate') to check for match between password and passwordConfirmation
- .pre('save') to hash password using bcrypt before saving to db
- Don't add the validatePassword yet.
- Export User mod
3. Make auth controllers
- Make the register function
- Hook up the route for register and TEST!
- If you are getting 'module' missing errors it's likely that there's an issue with your importing and exporting
- Make the login function
4. Validation
- Add secret to `config/environment.js` and require it
- Remember to make `validatePassword()` in the user model
- Hook up the route for login and TEST!
5. Make a secureRoute folder in lib
- Make a `secureRoute()` function
- Check to see if a token exists
- Check if token is valid
6. Import secure route to routes and add it to any routes that should be secure. Leave this as the last step so that testing can be easier