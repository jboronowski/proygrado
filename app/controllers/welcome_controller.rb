class WelcomeController < ApplicationController

	def welcome
	url = 'http://localhost:3001/v1/welcome'
      # a es parametros
      response = Faraday.get(url, {}, {'Accept' => 'application/json'})
       
      json = JSON.parse(response.body)
      @semana_dengue = json["semana_dengue"].values.first
      @semana_zika = json["semana_zika"].values.first
      @semana_chikungunya = json["semana_chikungunya"].values.first
      @hoy_dengue = json["hoy_dengue"].values.first
      @hoy_zika = json["hoy_zika"].values.first
      @hoy_chikungunya = json["hoy_chikungunya"].values.first
      @hoy = json["hoy_dengue"].keys.first
      @total_dengue = json["total"][0]["total"]
      @total_zika = json["total"][2]["total"]
      @total_chikungunya = json["total"][1]["total"]
  	  @semana6_dengue_array_fecha = []
      @semana6_dengue_array_valor = []
      @año_dengue_array_valor=[]
      @año_dengue_array_fecha=[]
      @año_zika_array_valor =[]
      @año_zika_array_fecha =[]
      @año_chikungunya_array_valor= []
       @año_chikungunya_array_fecha= []
      json['semana6_dengue'].map do |k,v| 
        
         @semana6_dengue_array_fecha.push(k)
		    @semana6_dengue_array_valor.push(v)
	   end
     json['año_dengue'].map do |k,v| 
        
          @año_dengue_array_fecha.push(k)
        @año_dengue_array_valor.push(v)
     end
     json['año_zika'].map do |k,v| 
        
        @año_zika_array_fecha.push(k)
         @año_zika_array_valor .push(v)
     end
     json['año_chikungunya'].map do |k,v| 
        
         @año_chikungunya_array_fecha.push(k)
        @año_chikungunya_array_valor.push(v)
     end

     def login
    end
    def ayuda
    end
      #@json["semana_dengue"].each do |product|
# product.each do |key, value|
 #  @value1=key
 #end
#end
      

	end
end
