

json.type "FeatureCollection"
json.features 
  json.type "Feature"
  json.properties do
	json.time positivo.fecha
	json.arbo positivo.arbo

	end
  json.geometry do
  json.type "Point"
  json.coordinates [positivo.lonlat.x,positivo.lonlat.y]
  end
