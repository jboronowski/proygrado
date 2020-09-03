class DistritoCuidadBarrio < ApplicationRecord
  belongs_to :distrito
  belongs_to :cuidad
  belongs_to :barrio
end
