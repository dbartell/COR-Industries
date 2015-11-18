# COR-Industries

###General Info
-------------------------------------------
COR-Industries is a local business in Lehi, UT. They provide a service where they order oversized truck load permits for each state a load travels through. I created an web app that is mobile compatible for the drivers to use as they walk around their trucks measuring and weighing their loads. 

###Purpose
-------------------------------------------
The Purpose of this web app is to reduce the time of the permit application process that the employees deal with. Previously the employee would fax the driver a sheet of paper where they need to print off the sheet and fill out the page with all the loads dimensions and then fax it back. The drivers handwriting is usually bad and the paper is crupled up and has stains on it. We have reduced the time with this web app by 50% and it is in a ledgible format for the employee to quickly start applying for those permits with each state.

### User Experience
-------------------------------------------
(MOBILE COMPATIBLE) I created dropdowns using JQuery with forms, inputs, and buttons, that the driver can fill-out and quickly send to the database where the employee can instantly read the permit application and start applying for those permits in each state. The employee then can delete the permit or print it off in PDF form, or of course keep the application.


|Technologies|Used|
|-------|-------|
|MongoDB| I used mongoLabs to create an online database where the business can store their permit applications|
|Express|Express made writing our server easier by doing the hard stuff|
|Angular|Angular was used to create front end web application as well getting data with $http, moving that data around and providing functionality to the html.|
|Node|Node was used as for the web server.|
|Mongoose|Mongoose was used to help model Schema's|
|bcryptjs|Bcryptjs is used for it's password hash algorythm. |
|bady-parser|Body parser is used as middleware that returns objects in req.body or returns an error to the callbacks.|
|cors|Allows for http requests from different domain than the one that served the request.|
|express-sessions|Used to save the user info to the session in server once logged in.|
|passport|Passport was used to authenticate the user.|
