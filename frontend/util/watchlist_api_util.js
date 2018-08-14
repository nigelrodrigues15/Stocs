export const createWatchlist = (watchlistId) => (
    $.ajax({
      method: "POST",
      url: "/api/watchlists",
      data: { watchlistId }
    })
  )

export const showWatchlist = () => (
    $.ajax({
      method: "GET",
      url: "/api/watchlists",
    })
  )
  
  export const removeWatchlist = watchlistId => (
    $.ajax({
      method: "DELETE",
      url: `/api/watchlists/${watchlistId}`
    })
  )

