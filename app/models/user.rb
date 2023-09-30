class User < ApplicationRecord

    has_many :reviews
    has_many :boulder_problems, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8}
    validates :name, presence: true
    validates :height, presence: true
    validates :weight, presence: true
    validates :experience, presence: true
end