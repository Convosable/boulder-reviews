class ClimbingSession < ApplicationRecord

    belongs_to :user
    belongs_to :boulder_problem
    
end
