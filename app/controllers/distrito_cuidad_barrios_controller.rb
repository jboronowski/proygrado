class DistritoCuidadBarriosController < ApplicationController
  before_action :set_distrito_cuidad_barrio, only: [:show, :edit, :update, :destroy]

  # GET /distrito_cuidad_barrios
  # GET /distrito_cuidad_barrios.json
  def index
    @distrito_cuidad_barrios = DistritoCuidadBarrio.all
  end

  # GET /distrito_cuidad_barrios/1
  # GET /distrito_cuidad_barrios/1.json
  def show
  end

  # GET /distrito_cuidad_barrios/new
  def new
    @distrito_cuidad_barrio = DistritoCuidadBarrio.new
  end

  # GET /distrito_cuidad_barrios/1/edit
  def edit
  end

  # POST /distrito_cuidad_barrios
  # POST /distrito_cuidad_barrios.json
  def create
    @distrito_cuidad_barrio = DistritoCuidadBarrio.new(distrito_cuidad_barrio_params)

    respond_to do |format|
      if @distrito_cuidad_barrio.save
        format.html { redirect_to @distrito_cuidad_barrio, notice: 'Distrito cuidad barrio was successfully created.' }
        format.json { render :show, status: :created, location: @distrito_cuidad_barrio }
      else
        format.html { render :new }
        format.json { render json: @distrito_cuidad_barrio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /distrito_cuidad_barrios/1
  # PATCH/PUT /distrito_cuidad_barrios/1.json
  def update
    respond_to do |format|
      if @distrito_cuidad_barrio.update(distrito_cuidad_barrio_params)
        format.html { redirect_to @distrito_cuidad_barrio, notice: 'Distrito cuidad barrio was successfully updated.' }
        format.json { render :show, status: :ok, location: @distrito_cuidad_barrio }
      else
        format.html { render :edit }
        format.json { render json: @distrito_cuidad_barrio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /distrito_cuidad_barrios/1
  # DELETE /distrito_cuidad_barrios/1.json
  def destroy
    @distrito_cuidad_barrio.destroy
    respond_to do |format|
      format.html { redirect_to distrito_cuidad_barrios_url, notice: 'Distrito cuidad barrio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_distrito_cuidad_barrio
      @distrito_cuidad_barrio = DistritoCuidadBarrio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def distrito_cuidad_barrio_params
      params.require(:distrito_cuidad_barrio).permit(:distrito_id, :cuidad_id, :barrio_id)
    end
end
