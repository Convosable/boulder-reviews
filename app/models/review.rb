class Review < ApplicationRecord

    belongs_to :user
    belongs_to :boulder_problem

    validates :boulder_rating, presence: true, numericality: { in: 0..4 }
    validates :completed, presence: true, if: :completed?

    def completed?
        completed == true
    end

    def username
        self.user.username
    end

    def self.average_rating
        average(:boulder_rating)
    end

end
