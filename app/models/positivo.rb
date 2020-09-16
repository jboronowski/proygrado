class Positivo < ApplicationRecord
def point(lonlat)
	set_rgeo_factory_for_column(:lonlat,
    RGeo::Geographic.spherical_factory(:srid => 4326))
end
  belongs_to :barrio
  belongs_to :cuidad
  belongs_to :distrito
end
