Rails.application.routes.draw do
  get 'positivos/index'
  resources :distrito_cuidad_barrios
  resources :distritos
  resources :barrios
  resources :cuidads
  resources :positives
  resources :positivos
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get '/mapas/positivos',
to: 'mapas#mapas',
as: 'mapa_positivos'

  get '/positivos_avanzado',
  to: 'positivos#avanzado',
  as: 'positivos_avanzado'
  
  get '/mapas/heat_map',
  to: 'mapas#heat_map',
  as: 'heat_map'

  get '/clusters/dbscan',
  to: 'clusters#dbscan',
  as: 'dbscan'


  root "welcome#welcome"
end
