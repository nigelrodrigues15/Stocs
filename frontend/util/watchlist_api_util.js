export const createWatchlist = (companyId) => (
    $.ajax({
      method: "POST",
      url: "/api/watchlists",
      data: { companyId }
    })
  )

export const showWatchlist = () => (
    $.ajax({
      method: "GET",
      url: "/api/watchlists",
    })
  )
  
  export const removeWatchlist = companyId => (
    $.ajax({
      method: "DELETE",
      url: `/api/watchlists/${companyId}`
    })
  )

