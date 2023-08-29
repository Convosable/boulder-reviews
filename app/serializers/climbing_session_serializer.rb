class ClimbingSessionSerializer < ActiveModel::Serializer
  attributes :id, :date, :private, :completed, :boulder_rating, :notes
  has_one :user
  has_one :boulder_problem
end
