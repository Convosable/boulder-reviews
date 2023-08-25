class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :image_url
      t.float :height
      t.float :weight
      t.string :experience

      t.timestamps
    end
  end
end
