class CreatePositives < ActiveRecord::Migration[5.2]
  def change
    create_table :positives do |t|
      t.text :name
      t.float :lat
      t.float :long
      t.point :lonlat

      t.timestamps
    end
  end
end
