class MapasController < ApplicationController
	def mapa
	@positivos = Positivo.all
    @positivos_json= Positivo.all.map(&:lonlat).as_json
	end
end
