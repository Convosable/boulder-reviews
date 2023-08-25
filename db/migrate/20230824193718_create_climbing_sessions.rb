class CreateClimbingSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :climbing_sessions do |t|
      t.date :date
      t.boolean :private
      t.boolean :completed
      t.integer :boulder_rating
      t.text :notes
      t.integer :user_id
      t.integer :boulder_problem_id

      t.timestamps
    end
  end
end
