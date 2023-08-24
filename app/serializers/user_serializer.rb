class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :image_url, :height, :weight, :experience
end
