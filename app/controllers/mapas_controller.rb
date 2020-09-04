class MapasController < ApplicationController
	def mapas
	@positivos = Positivo.all
    @positivos_json= Positivo.all.map(&:lonlat).as_json
	end
end
