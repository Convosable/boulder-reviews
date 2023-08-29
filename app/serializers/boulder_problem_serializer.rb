class BoulderProblemSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :location, :description, :rating, :image_url
end
