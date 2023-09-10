class User < ApplicationRecord

    has_many :reviews
    has_many :boulder_problems, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8}
    validates :name, presence: true
    validates :height, presence: true
    validates :weight, presence: true
    validates :experience, presence: true, inclusion: { in: %w(beginner intermediate advanced elite), message: "%{value} is not a valid experience level" }
    #look at case insensitivity for experience (or maybe a dropdown in frontend)

    # validates :password_complexity

    # def password_complexity
    #   look up password complexities to include a punctiation/number
    # end

end