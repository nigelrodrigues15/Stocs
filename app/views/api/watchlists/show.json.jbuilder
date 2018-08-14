@watchlists.each do |watchlist|
    json.set! watchlist.company_id do
      json.extract! watchlist, :id, :user_id, :company_id
    end
  end