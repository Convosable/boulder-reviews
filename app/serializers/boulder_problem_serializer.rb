class BoulderProblemSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :location, :rating
end
