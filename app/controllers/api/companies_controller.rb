class Api::CompaniesController < ApplicationController
    def index
            @companies = Company.all
            render 'api/companies/index'
    end
    
    def show
        @company = Company.find(params[:id])
        render 'api/companies/show'
    end

    def update
        @company = Company.find(params[:id])

        if @company.update(company_params)
          render 'api/companies/show'
        else
          render json: @company.errors.full_messages, status: 422
        end

    end
    
      private
    
    def company_params
        params.require(:company).permit( :symbol, :lastsale, :name, :sector, :industry )
    end
    
end
