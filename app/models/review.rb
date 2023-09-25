class Review < ApplicationRecord

    belongs_to :user
    belongs_to :boulder_problem

    validates :date, presence: true
    validates :boulder_rating, presence: true, numericality: { in: 0..4 }
    validates :completed, presence: true, if: :completed?
    validates :user_id, uniqueness: { scope: :boulder_problem_id, message: "can only post one review per problem"}

    validate :no_future_date

    def completed?
        completed == true
    end

    def no_future_date
        if date.present? && date > Date.today
            errors.add(:date, "can't be in the future")
        end
    end

    def username
        self.user.username
    end

end
