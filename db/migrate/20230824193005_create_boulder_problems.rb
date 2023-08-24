class CreateBoulderProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :boulder_problems do |t|
      t.string :name
      t.integer :grade
      t.string :image_url
      t.string :location
      t.integer :rating

      t.timestamps
    end
  end
end
