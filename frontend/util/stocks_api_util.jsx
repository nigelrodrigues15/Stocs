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