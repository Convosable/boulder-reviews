class ClimbingSessionSerializer < ActiveModel::Serializer
  attributes :id, :date, :private, :completed, :boulder_rating, :notes
end
