# STOCS 

Stocs is a Ruby on Rails web application using React on the front end. With Stocs, you can search for live and historical stock data of almost every public trading company, as well as create and account to add stocks to your watchlist previews on a private dashboard.

With it, users can freely browse and track their favorite companies to learn about the stock market and investing without any financial risk. It is aimed to be similar in design and functionality as Robinhood.

![Splash Page](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/SplashPage.png "Splash Page")

A link to the Live site can be found [here](https://stocs.herokuapp.com/#/)! A demo user can be found in the log in section if you'd like to preview the site without creating an account.

![Demo Login](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/DemoLogin.png "DemoLogin")

## Setup & Use
* Clone this repo to your desktop
* Using terminal `bundle install` and `npm install`
* Run `npm start` and `rails s` to start the application. You will be able to access it on localhost:3000

## Features
* Secure user authentication using BCrypt
* Can search up public companies on  NASDAQ, AMEX and NYSE
* User can view custom/private dashboard and watchlists upon authentication
* User can view recent headlines in business
* Can view current as well as historic stock data
* Add/Remove stocks from your watchlist to your dashboard
* User Friendly UI and implementing CSS Grid to keep code DRY

### Sticky Navbar with search capabilities after authentication
The Navigation Bar is always displayed on the top of the display and renders the search bar after the User has authenticated. Prior to authentication, the navbar links to the login, signup or back to the home page. However after logging in (a demo login is also available), the navigation bar now links to the dashboard , log out and the search bar. 

The search bar is able to search for any public company on the New York Stock Exchange (NYSE), NASDAQ or AMEX and select them from the matches provided by the dropdown search. 

![Search](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/Search.png "Search")
The companies were seeded into the database fromm NASDAQ

### Informative and relevant news feed
On the Dashboard, business relevant news feed is present with hyperlinks to their respective sources, allowing the User to gain insight into current events happening to businesses, possibly influencing inestment descisions. The news is provided list style and displays the 4 top headlines in major business news. 

![News](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/News.png "News")

### View realtime and historic stock data
On a company view page, a large user friendly graph is available for the user, with live stock price and percent change next to the company title. This data will be updates as the User hovers over certain reagions of the graph, where the stock price at that time is shown. Historical data is also available, with options of 1D, 1M, 2M, 6M, 1YR, 2YR, 5YR. Addtional data for the company can be found under the graph with key company statistics like CEO, Sector, website and market cap.  

![watchlist](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/watchlist.png "watchlist")

### CSS Grid & Media Queries to create the Splash Page (ie. Home Page)
CSS Grid is used throughout the entire website, to keep the CSS short yet functional. The home page uses CSS grid along with media queries in order to make the home page resposibile and fit for mobile use. In future works media queries will be used through out the website, allowing it to be mobile friendly. 

Entire CSS code for the splash page:
```
.splash {
  margin-top: 50px;
  color: $robin-white;
  background-color: $background-dark;
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr);
  grid-template-rows: repeat(4, 1fr);

  img {
    width: 40vw;
  }

  div {
    margin: 0 auto;
    padding: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

}
```

## Technologies
### In the Backend
* Rails backend framework
* PostgreSQL database
* RESTful APIs to send JSON data to the front end
### In the Frontend
* Single Page application using React and Redux
** React used for virtual ReactDOM and navigation through React Router and React History
* Styling done with SASS with FontAwesome and AnimateCSS libraries
* JSX transpiled into JavaScript using Babel
* Additional Technologies
* JSON data created and sent via Jbuilder
### Additional Technologies
NodeJs
AJAX
npm(Node Package Manager)
webpack


## Future Work
### Buy/Sell virtual stock
With this feature users will be able to trade in a virtual stock market to gain valuable experience in the possible results of their investments without the actual risks of making them.

### Suggestions
When searching specific companies, users can view similar companies in the industry/sector to gain a better understanding of the industry as well as potential competitors.
