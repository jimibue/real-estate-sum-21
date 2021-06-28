class Address < ApplicationRecord
  belongs_to :property

  # SELECT DISTINCT city FROM addresses
  def self.cities
    select('DISTINCT city').to_json(except: :id)
  end

#   SELECT DISTINCT city,  
# STRING_AGG(CAST(price as VARCHAR), ', ')
# FROM addresses
# INNER JOIN properties AS p ON addresses.property_id = p.id
# GROUP BY city;

  def self.cost_by_city
     select("DISTINCT city, STRING_AGG(CAST(price as VARCHAR), ', ') AS prices")
     .from("addresses")
     .joins("INNER JOIN properties AS p ON addresses.property_id = p.id")
     .group("city")
  end
end
