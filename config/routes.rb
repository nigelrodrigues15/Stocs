Rails.application.routes.draw do
<<<<<<< HEAD
 root to: 'static_pages#root'
 
=======
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

>>>>>>> userAuth
end
