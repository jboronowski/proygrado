
json.arbo positivo.arbo
x = positivo.lonlat['x']
y = positivo.lonlat['y']
features= []

json.type "FeatureCollection"
json.features
  json.type "Feature"
  json.geometry do
  json.type "Point"
  json.coordinates [positivo.lonlat['x'],positivo.lonlat['y']]
  end
