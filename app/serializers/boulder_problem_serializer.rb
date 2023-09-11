class BoulderProblemSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :location, :description, :image_url, :average_boulder_rating
  has_many :reviews

  def average_boulder_rating
    object.average_boulder_rating
  end
end
