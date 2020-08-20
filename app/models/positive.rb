class Positive < ApplicationRecord
  scope :puntos, -> {
    ("select json_build_object(
    'type', 'FeatureCollection',
    'features', json_agg(ST_AsGeoJSON(t.*)::json)
    )
from ( SELECT lonlat::geometry FROM POSITIVES) as t(geom)")
  }
end
