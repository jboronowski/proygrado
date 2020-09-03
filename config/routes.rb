Rails.application.routes.draw do
  get 'positivos/index'
  resources :distrito_cuidad_barrios
  resources :distritos
  resources :barrios
  resources :cuidads
  resources :positives
  resources :positivos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get '/mapas',
to: 'mapas#mapas',
as: 'mapas'

  root "welcome#welcome"
end
