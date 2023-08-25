class BoulderProblem < ApplicationRecord\

    has_many :climbing_sessions
    has_many :users, through: :climbing_sessions
    
end
