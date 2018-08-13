class Api::WatchlistsController < ApplicationController
    def create

        @watchlist = WatchList.new(watchlist_params)
    
        if @watchlist.save
          @asset = Company.find(@watchlist.company_id)
          render 'api/companies/show'
        else
          render json: @watchlist.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @watchlist = WatchList.find_by(company_id: params[:id])
        # watchlist = Company.find(watchlist.company_id)
        @watchlist.destroy
        render 'api/company/show'
    end

    private

    def watchlist_params
        params.require(:watchlist).permit(:user_id, :company_id)
    end
end
