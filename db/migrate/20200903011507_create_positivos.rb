class CreatePositivos < ActiveRecord::Migration[5.2]
  def change
    create_table :positivos do |t|
      t.string :nombre
      t.string :apellido
      t.integer :edad
      t.string :sexo
      t.string :arbo
      t.string :serotipo
      t.references :barrio, foreign_key: true
      t.references :cuidad, foreign_key: true
      t.references :distrito, foreign_key: true
      t.point :lonlat

      t.timestamps
    end
  end
end
