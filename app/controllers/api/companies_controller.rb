class Api::CompaniesController < ApplicationController
    def index
        @company = Company.all
        render 'api/company/index'
      end
    
      def show
        @company = Company.find(params[:id])
        render 'api/company/show'
      end

      def update
        @company = Company.find(params[:id])
        if @company.update(company_params)
          render 'api/company/show'
        else
          render json: @company.errors.full_messages, status: 422
        end
      end
    
      private
    
      def company_params
        params.require(:company).permit( :company, :ticker, :description, :ceo, :headquarters, :last_price )
      end
end
