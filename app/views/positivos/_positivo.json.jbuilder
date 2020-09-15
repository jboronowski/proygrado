
json.arbo positivo.arbo

json.type "FeatureCollection"
json.features
  json.type "Feature"
  json.properties do
	json.time positivo.created_at
end
  json.geometry do
  json.type "Point"
  json.coordinates [positivo.lonlat['x'],positivo.lonlat['y']]
  end
