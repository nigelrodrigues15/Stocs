# STOCS 

Stocs is a Ruby on Rails web application using React on the front end. With Stocs, you can search for live and historical stock data of almost every public trading company, as well as create and account to add stocks to your watchlist previews on a private dashboard.

With it, users can freely browse and track their favourite companies to learn about the stock market and investing without any financial risk.

A link to the Live site can be found [here](https://stocs.herokuapp.com/#/)! A demo user can be found in the log in section if you'd like to preview the site without creating an account.

![Splash Page](https://github.com/nigelrodrigues15/Stocs/blob/master/app/assets/images/SplashPage.png "Splash Page")

## Features
* Secure user authentication using BCrypt
* Can search up public companies on  NASDAQ, AMEX and NYSE
* User can view custom/private dashboard and watchlists upon authentication
* User can view recent headlines in business
* Can view current as well as historic stock data
* Add/Remove stocks from your watchlist to your dashboard

## Setup & Use
* Clone this repo to your desktop
* Using terminal `bundle install` and `npm install`
* Run `npm start` and `rails s` to start the application. You will be able to access it on localhost:3000

## Future Work
### Buy/Sell virtual stock
With this feature users will be able to trade in a virtual stock market to gain valuable experience in the possible results of their investments without the actual risks of making them.

### Suggestions
When searching specific companies, users can view similar companies in the industry/sector to gain a better understanding of the industry as well as potential competitors.