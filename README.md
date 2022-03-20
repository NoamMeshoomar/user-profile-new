# Getting Started
Welcome to Bridgify's Frontend home assignment!\
You're about to get a unique glimpse into our travel world.
Please read the instructions carefully.\

**Please contact us in case there's any instruction that isn't clear enough for you. after all, we're not perfect, yet.    ;)**
## `Your Mission`
We want you to answer our travelers' deepest needs and to build a brand-new **User Profile**!

### `Intro`
Your  traveler has already created a trip.\
We want to create a 'User Profile' modal that displays:
1. The trip details: 
    - Location
    - Dates
    - Trip pace (intensity) 
    - Interests

2. recent purchases
    - Activity name
    - Pickup Point (optional)
    - Datetime
    - Operator

Here's a link to the Figma file, where you can see the product team spec' (the place where they put their visions): https://www.figma.com/file/DJ288qzVvKq9oeXZsY53ev/User-profile?node-id=0%3A1\
(*If there are any permission issues, please contact us*)

The trip details need to be fetched from Bridgify API (Please check the function `getTripDetails`) 

You'll get a response with a complex data structure. In your efficient way, you need to run over the activities and look for the few that hold the field under the `booked` section.\
Only attractions with those fields are the ones that need to be displayed under the 'Your Purchases' section.

**`IMPORTANT!`** Not sure where the `booked` section is? Go check the `types.d.ts` file to understand the response data structure better and where the booked fields are located



### `Recommended Packages`
You're welcome to use, some of them already installed: 
- Axios -  For AJAX calls 
- Material UI - Easily importing UI components
- Styled Components - Write CSS in your tsx file

### `npm install`
In order to run the project, first, we need to install the packages.
Please do it by running from the project directory: 
$ npm install 

### `npm start`

To start the server and run the app in the development mode, run the command: 
$ npm start

Then, if it doesn't happen automatically, please open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# `IMPORTANT`
None of this code should be shared or used for any other purpose.