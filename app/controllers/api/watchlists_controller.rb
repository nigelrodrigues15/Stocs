class Api::WatchlistsController < ApplicationController
  def index
    @watchlists = Watchlist.where(user_id: current_user.id)
    render 'api/watchlists/show'
  end

  def create
    @watchlist = Watchlist.new(user_id: current_user.id, company_id: params[:companyId])

    if @watchlist.save
      @company = Company.find(@watchlist.company_id)
      @watchlists = Watchlist.where(user_id: current_user.id)
      render 'api/watchlists/show'
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
end

  def destroy
    @watchlist = Watchlist.find_by(user_id: current_user.id, company_id: params[:id])
    @company = Company.find(@watchlist.company_id)
    @watchlist.destroy
    @watchlists = Watchlist.where(user_id: current_user.id)
    render 'api/watchlists/show'
  end
end
