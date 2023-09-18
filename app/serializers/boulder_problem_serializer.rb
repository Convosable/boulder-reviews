class BoulderProblemSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade, :location, :description, :image_url, :average_boulder_rating, :number_of_ascents
  has_many :reviews

  def average_boulder_rating
    object.average_boulder_rating
  end

  def number_of_ascents
    object.number_of_ascents
  end
end
