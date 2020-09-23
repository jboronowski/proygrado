

json.type "FeatureCollection"
json.features 
  json.type "Feature"
  json.properties do
	json.time positivo.fecha.strftime("%Y-%m-%d") 
	json.arbo positivo.arbo
	json.serotipo positivo.serotipo
	json.estado positivo.estado
	json.nombre positivo.nombre
	json.apellido positivo.apellido
	json.edad positivo.edad
	json.sexo positivo.sexo
	json.barrio positivo.barrio.nombre
	json.distrito positivo.distrito.nombre
	json.cuidad positivo.cuidad.nombre


	end
  json.geometry do
  json.type "Point"
  json.coordinates [positivo.lonlat.x,positivo.lonlat.y]
  end
