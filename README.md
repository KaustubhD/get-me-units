Imperial-Metric conversion microservice
==================

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)


Objectives
-------------------
- [x] I will help prevent the client from trying to guess(sniff) the MIME type.
- [x] I will prevent cross-site scripting (XSS) attacks.
- [x] I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
- [x] I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
- [x] I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
- [x] I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
- [x] If my unit of measurement is invalid, returned will be 'invalid unit'.
- [x] If my number is invalid, returned with will 'invalid number'.
- [x] If both are invalid, return will be 'invalid number and unit'.
- [x] I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
- [x] My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
- [x] All 16 unit tests are complete and passing.
- [x] All 5 functional tests are complete and passing.


Testing
-------------------
For testing, the ```NODE_ENV``` variable needs to be set to testin the **.env** file


Live Project
-------------------
[\ ゜o゜)ノ](https://get-me-units.glitch.me)
