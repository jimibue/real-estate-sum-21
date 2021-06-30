class Api::PropertiesController < ApplicationController
  before_action :set_page, only: [:index]
  def index
    # render json: Property.available
    properties = Property.page(@page).available
    render json: {
      agents: properties, 
      total_pages: properties.total_pages 
    }
  end

  def city
    city = params[:city]
    render json: Property.by_city(city)
  end

  def city_cost
    render json: Address.cost_by_city
  end

  private
  
  def set_page
    @page = params[:page] || 1
    # @page = params[:page] ? params[:page] : 1
  end
end
