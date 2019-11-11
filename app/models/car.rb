class Car < ApplicationRecord
    validates :make, presence: :true
    validates :year, presence: :true
    validates :color, presence: :true
    validates :attraction_level, presence: :true

end
