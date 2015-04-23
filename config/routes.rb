Rails.application.routes.draw do
  get '*path', to: 'pages#index'

  root to: 'pages#index'
end
