class BoulderProblem < ApplicationRecord\

    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :grade, presence: true, numericality: { in: 0..17 }
    validates :description, presence: true
    validates :image_url, presence: true
    validates :location, presence: true

    def average_boulder_rating
        average = reviews.average(:boulder_rating)
        average.nil? ? 0 : average.round(2)
    end

end
