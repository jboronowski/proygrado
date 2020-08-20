test = JSON.parse(positive.to_json)
x = positive.lonlat['x']
y = positive.lonlat['y']
features= []
json.type "FeatureCollection"
json.features
  json.type "Feature"
  json.geometry do
  json.type "Point"
  json.coordinates [positive.lonlat['x'],positive.lonlat['y']]
  end
