Rails.application.routes.draw do
  namespace :api do
    resources :contacts
  end

  get '*path', to: 'pages#index'

  root to: 'pages#index'
end
