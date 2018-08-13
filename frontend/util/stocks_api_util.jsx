export const getStock = sym => (
    $.ajax({
      method: "GET",
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&apikey=UEWRGA60OR70ZM3F`
    })
  )

  export const currentStock = sym => (
    $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=5min&apikey=UEWRGA60OR70ZM3F`
    })
  );

  export const fetchChart = (sym,chartRange) => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/chart/${chartRange}?filter=date,label,high,marketAverage`
    })
  );

  export const fetchCompany = sym => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/company`
    })
  );

  export const fetchStats = sym => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/stats?filter=marketcap,dividendYield,profitMargin,returnOnEquity`
    })
  );

  export const fetchLogo = sym => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/logo`
    })
  );

  export const fetchNews = (sym, num) => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/news/last/${num}`
    })
  );

  export const fetchPeers = sym => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/peers`
    })
  );

  export const fetchPrice = sym => (
    $.ajax({
      method: 'GET',
      url: `https://api.iextrading.com/1.0/stock/${sym}/price`
    })
  );