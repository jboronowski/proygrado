class CuidadsController < ApplicationController
  before_action :set_cuidad, only: [:show, :edit, :update, :destroy]

  # GET /cuidads
  # GET /cuidads.json
  def index
    @cuidads = Cuidad.all
  end

  # GET /cuidads/1
  # GET /cuidads/1.json
  def show
  end

  # GET /cuidads/new
  def new
    @cuidad = Cuidad.new
  end

  # GET /cuidads/1/edit
  def edit
  end

  # POST /cuidads
  # POST /cuidads.json
  def create
    @cuidad = Cuidad.new(cuidad_params)

    respond_to do |format|
      if @cuidad.save
        format.html { redirect_to @cuidad, notice: 'Cuidad was successfully created.' }
        format.json { render :show, status: :created, location: @cuidad }
      else
        format.html { render :new }
        format.json { render json: @cuidad.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cuidads/1
  # PATCH/PUT /cuidads/1.json
  def update
    respond_to do |format|
      if @cuidad.update(cuidad_params)
        format.html { redirect_to @cuidad, notice: 'Cuidad was successfully updated.' }
        format.json { render :show, status: :ok, location: @cuidad }
      else
        format.html { render :edit }
        format.json { render json: @cuidad.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cuidads/1
  # DELETE /cuidads/1.json
  def destroy
    @cuidad.destroy
    respond_to do |format|
      format.html { redirect_to cuidads_url, notice: 'Cuidad was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cuidad
      @cuidad = Cuidad.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cuidad_params
      params.require(:cuidad).permit(:nombre)
    end
end
