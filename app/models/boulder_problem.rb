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

    def number_of_ascents
        ascent = self.reviews.where(completed: true).distinct.count('user_id')
    end
    #state doesnt uPDATE FOR AVERAGE_BOUDLER_RATING and number_of_ascents unkless the page is refreshed....

end
