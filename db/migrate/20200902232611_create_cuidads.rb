class CreateCuidads < ActiveRecord::Migration[5.2]
  def change
    create_table :cuidads do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
