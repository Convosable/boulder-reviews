class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :image_url, :height, :weight, :experience

  # create custom method to display the boulder problems from reviews completed
  
end
