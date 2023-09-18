class BoulderProblem < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :grade, presence: true, numericality: { in: 0..17 }
    validates :description, presence: true
    validates :image_url, presence: true
    validates :location, presence: true

    def average_boulder_rating
        average = self.reviews.average(:boulder_rating).to_f
        average.nil? ? 0 : average.round(2)
    end

    #state doesnt uPDATE FOR AVERAGE_BOUDLER_RATING unkless the page is refreshed....

end
