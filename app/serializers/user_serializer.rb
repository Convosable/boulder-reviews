class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :name, :image_url, :height, :weight, :experience
end
