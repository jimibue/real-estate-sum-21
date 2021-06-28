class Api::PropertiesController < ApplicationController
  def index
    render json: Property.available
  end

  def city
    city = params[:city]
    render json: Property.by_city(city)
  end

  def city_cost
    render json: Address.cost_by_city
  end
end
