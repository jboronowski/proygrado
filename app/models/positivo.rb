class Positivo < ApplicationRecord
  belongs_to :barrio
  belongs_to :cuidad
  belongs_to :distrito
end
