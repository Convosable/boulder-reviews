class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :password_confirmation
      t.string :image_url
      t.float :height
      t.float :weight
      t.string :experience

      t.timestamps
    end
  end
end
