class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :image_url, :height, :weight, :experience, :climb_complete, :climb_incomplete

  # create custom method to display the boulder problems from reviews completed

  def climb_complete
    object.climb_complete
  end

  def climb_incomplete
    object.climb_incomplete
  end
end
