class PositivesController < ApplicationController
  before_action :set_positive, only: [:show, :edit, :update, :destroy]

  # GET /positives
  # GET /positives.json
  def index
    @positives = Positive.all
    @positives_json= Positive.all.map(&:lonlat).as_json





  end

  # GET /positives/1
  # GET /positives/1.json
  def show
    positive = Positive.find(params[:id])
    @longlat = positive.lonlat

    @latlong= positive.lonlat

  end

  # GET /positives/new
  def new
    @positive = Positive.new
  end

  # GET /positives/1/edit
  def edit
  end

  # POST /positives
  # POST /positives.json
  def create
    @positive = Positive.new(positive_params)

    respond_to do |format|
      if @positive.save
        format.html { redirect_to @positive, notice: 'Positive was successfully created.' }
        format.json { render :show, status: :created, location: @positive }
      else
        format.html { render :new }
        format.json { render json: @positive.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /positives/1
  # PATCH/PUT /positives/1.json
  def update
    respond_to do |format|
      if @positive.update(positive_params)
        format.html { redirect_to @positive, notice: 'Positive was successfully updated.' }
        format.json { render :show, status: :ok, location: @positive }
      else
        format.html { render :edit }
        format.json { render json: @positive.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /positives/1
  # DELETE /positives/1.json
  def destroy
    @positive.destroy
    respond_to do |format|
      format.html { redirect_to positives_url, notice: 'Positive was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_positive
      @positive = Positive.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def positive_params
      params.require(:positive).permit(:name, :lat, :long, :lonlat)
    end
end
