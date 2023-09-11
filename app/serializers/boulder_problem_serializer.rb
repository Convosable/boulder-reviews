class BoulderProblemSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :location, :description, :image_url
  has_many :reviews
end
