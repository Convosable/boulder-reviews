class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date, :completed, :boulder_rating, :notes, :username
  has_one :boulder_problem
end
