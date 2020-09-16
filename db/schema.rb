# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_03_011507) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "barrios", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cuidads", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "distrito_cuidad_barrios", force: :cascade do |t|
    t.bigint "distrito_id"
    t.bigint "cuidad_id"
    t.bigint "barrio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barrio_id"], name: "index_distrito_cuidad_barrios_on_barrio_id"
    t.index ["cuidad_id"], name: "index_distrito_cuidad_barrios_on_cuidad_id"
    t.index ["distrito_id"], name: "index_distrito_cuidad_barrios_on_distrito_id"
  end

  create_table "distritos", force: :cascade do |t|
    t.string "nombre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "positives", force: :cascade do |t|
    t.text "name"
    t.float "lat"
    t.float "long"
    t.point "lonlat"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "positivos", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.integer "edad"
    t.string "sexo"
    t.string "arbo"
    t.string "serotipo"
    t.date "fecha"
    t.bigint "barrio_id"
    t.bigint "cuidad_id"
    t.bigint "distrito_id"
    t.geometry "lonlat", limit: {:srid=>0, :type=>"st_point"}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["barrio_id"], name: "index_positivos_on_barrio_id"
    t.index ["cuidad_id"], name: "index_positivos_on_cuidad_id"
    t.index ["distrito_id"], name: "index_positivos_on_distrito_id"
  end

  add_foreign_key "distrito_cuidad_barrios", "barrios"
  add_foreign_key "distrito_cuidad_barrios", "cuidads"
  add_foreign_key "distrito_cuidad_barrios", "distritos"
  add_foreign_key "positivos", "barrios"
  add_foreign_key "positivos", "cuidads"
  add_foreign_key "positivos", "distritos"
end
