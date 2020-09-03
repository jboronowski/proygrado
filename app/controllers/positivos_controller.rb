class PositivosController < ApplicationController
  def index
  	 @positivos = Positivo.all
  end
  def show
  	@positivo = Positivo.find(params[:id])
 	@lonlat = @positivo.lonlat
  end
end
