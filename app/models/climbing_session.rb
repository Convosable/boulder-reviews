class ClimbingSession < ApplicationRecord

    belongs_to :user
    belongs_to :boulder_problem

    validates :private, presence: true
    validates :completed, presence: true
    validates :boulder_rating, presence: true, numericality: { in: 0..4 }

end
