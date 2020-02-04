Steps to follow for tonight’s homework:
- Install packages
install any required packages (if you are not sure check your classwork's package json for the dependencies you'll need)
- config/environment.js
Set up the file (do look up how we did it in class you’re not expected to know the syntax for this)
call your database whatever you want your collection to be called
- index.js
require express, port - get the app running first (console.log). Check everything is working using $ yarn start
- index.js
Set up mongoose, databaseURI - make sure this connects. If they both work don’t forget to add your body-parser next. 
- logger
Set up the logger file. 
- index.js 
import the logger and check everything is working (don’t worry about the router yet)
- models
don’t forget to require mongoose!
Make the schema (and model), keep it simple!
- db/ seeds.js
Make seeds file and test that it builds (3 seeds is enough)
Don’t forget to import your model. 
Add the 'seed' script in your package.json (check the classwork's package json;
Don’t forget to run this command for the seeds to be added to the DB:
$ yarn seed 
- router & controllers 
Make routes and each controller - INDEX and CREATE are required, 
SHOW, UPDATE, DELETE are bonus
Only write one route at one time and test in insomnia in between. 
- index.js
don’t forget to import the router! 
---
The file structure should look like this:
-> config
   — environment.js
   — router.js
-> controllers
   — js file for your controllers
-> db
   — seeds.js
-> models
   — js file for your models
-> index.js