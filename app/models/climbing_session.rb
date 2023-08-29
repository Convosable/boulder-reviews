class ClimbingSession < ApplicationRecord

    belongs_to :user
    belongs_to :boulder_problem

    validates :private, presence: true
    validates :boulder_rating, presence: true, numericality: { in: 0..4 }
    validates :completed, presence: true, if: :completed?

    def completed?
        completed == true
    end

end
