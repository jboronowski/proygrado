  class PositivosController < ApplicationController
    def index
      @positivos = Positivo.all
      url = 'http://localhost:3001/v1/notificaciones/'
      # a es parametros
      response = Faraday.get(url, {a: 0}, {'Accept' => 'application/json'})
      @json = JSON.parse(response.body)

    end
    
    def show
     id = params[:id]
     url = 'http://localhost:3001/v1/notificaciones/'
     response = Faraday.get(url, {id: id}, {'Accept' => 'application/json'})
     @json = JSON.parse(response.body)
     
  end

    def avanzado
        @positivos = Positivo.all
      url = 'http://localhost:3001/v1/notificaciones/'
      # a es parametros
      response = Faraday.get(url, {a: 0}, {'Accept' => 'application/json'})
      @json = JSON.parse(response.body)
    end



end
