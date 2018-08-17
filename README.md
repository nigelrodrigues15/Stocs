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
![Search](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/Search.png "Search")
The companies were seeded into the database fromm NASDAQ
* User can view custom/private dashboard and watchlists upon authentication
* User can view recent headlines in business
![News](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/News.png "News")
* Can view current as well as historic stock data
![watchlist](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/watchlist.png "watchlist")
* Add/Remove stocks from your watchlist to your dashboard
* User Friendly UI and implementing CSS Grid to keep code DRY

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

## Future Work
### Buy/Sell virtual stock
With this feature users will be able to trade in a virtual stock market to gain valuable experience in the possible results of their investments without the actual risks of making them.

### Suggestions
When searching specific companies, users can view similar companies in the industry/sector to gain a better understanding of the industry as well as potential competitors.
