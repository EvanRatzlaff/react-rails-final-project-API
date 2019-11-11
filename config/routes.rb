Rails.application.routes.draw do
  scope :api do
    resources :cars
  end
end
