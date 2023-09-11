class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date, :completed, :boulder_rating, :notes, :username, :average_boulder_rating
  has_one :boulder_problem

  def average_boulder_rating
    Review.average_rating
  end

end
