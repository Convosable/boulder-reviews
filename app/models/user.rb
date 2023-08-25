class User < ApplicationRecord

    has_many :climbing_sessions
    has_many :boulder_problems, through: :climbing_sessions

    has_secure_password

end
