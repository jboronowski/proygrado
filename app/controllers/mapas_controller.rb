class MapasController < ApplicationController
	def mapas
	end
	def heat_map
	end
	def dbscan

	end
	def mapa

	  url = 'http://localhost:3001/v1/barrio'
      response = Faraday.get(url, {a:0}, {'Accept' => 'application/json'})
      @json = JSON.parse(response.body)
	end
	def mapa_distrito
	url = 'http://localhost:3001/v1/distrito'
      response = Faraday.get(url, {a:0}, {'Accept' => 'application/json'})
      @json = JSON.parse(response.body)
	end

end
