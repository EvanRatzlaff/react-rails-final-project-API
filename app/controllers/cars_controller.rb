class CarsController < ApplicationController
  before_action :find_car, only: [ :show, :destroy]
  def index
    @cars = Car.all
    render json: @cars
  end

  def create
    @car = Car.new(car_params)
      if @car.save
        render json: @car
      end
  end

  def update
    find_car.update_attributes(car_params)
    render json: find_car

  end

  def show
    render json: @car
  end

  def destroy
    @car.destroy
    head :no_content, status: :ok
  end

  private
  def car_params
    params.require(:car).permit(:make, :year, :color, :attraction_level)
  end

  def find_car
    @car = Car.find(params[:id])
  end

end
