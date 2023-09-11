class CreateBoulderProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :boulder_problems do |t|
      t.string :name
      t.integer :grade
      t.text :description
      t.string :image_url
      t.string :location

      t.timestamps
    end
  end
end
