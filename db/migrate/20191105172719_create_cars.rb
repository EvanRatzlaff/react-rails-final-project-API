class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make
      t.integer :year
      t.string :model
      t.string :color
      t.integer :attraction_level

      t.timestamps
    end
  end
end
