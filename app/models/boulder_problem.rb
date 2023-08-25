class BoulderProblem < ApplicationRecord\

    has_many :climbing_sessions
    has_many :users, through: :climbing_sessions

    validates :name, presence: true
    validates :grade, presence: true, numericality: { in: 0..17 }
    validates :description, presence: true
    validates :image_url, presence: true
    validates :location, presence: true
    validates :rating, presence: true, numericality: { in: 0..4 }

end
