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

get '/mapas/positivos_barrio',
  to: 'mapas#mapa',
  as: 'mapa'

get '/mapas/positivos_distrito',
  to: 'mapas#mapa_distrito',
  as: 'mapa_distrito'

  get '/positivos_avanzado',
  to: 'positivos#avanzado',
  as: 'positivos_avanzado'
  
  get '/mapas/heat_map',
  to: 'mapas#heat_map',
  as: 'heat_map'

  get '/clusters/dbscan',
  to: 'clusters#dbscan',
  as: 'dbscan'

  get '/welcome/login',
  to: 'welcome#login',
  as: 'login'
get '/welcome/ayuda',
  to: 'welcome#ayuda',
  as: 'ayuda'


  root "welcome#welcome"
end
