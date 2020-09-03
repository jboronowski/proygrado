require 'test_helper'

class DistritoCuidadBarriosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @distrito_cuidad_barrio = distrito_cuidad_barrios(:one)
  end

  test "should get index" do
    get distrito_cuidad_barrios_url
    assert_response :success
  end

  test "should get new" do
    get new_distrito_cuidad_barrio_url
    assert_response :success
  end

  test "should create distrito_cuidad_barrio" do
    assert_difference('DistritoCuidadBarrio.count') do
      post distrito_cuidad_barrios_url, params: { distrito_cuidad_barrio: { barrio_id: @distrito_cuidad_barrio.barrio_id, cuidad_id: @distrito_cuidad_barrio.cuidad_id, distrito_id: @distrito_cuidad_barrio.distrito_id } }
    end

    assert_redirected_to distrito_cuidad_barrio_url(DistritoCuidadBarrio.last)
  end

  test "should show distrito_cuidad_barrio" do
    get distrito_cuidad_barrio_url(@distrito_cuidad_barrio)
    assert_response :success
  end

  test "should get edit" do
    get edit_distrito_cuidad_barrio_url(@distrito_cuidad_barrio)
    assert_response :success
  end

  test "should update distrito_cuidad_barrio" do
    patch distrito_cuidad_barrio_url(@distrito_cuidad_barrio), params: { distrito_cuidad_barrio: { barrio_id: @distrito_cuidad_barrio.barrio_id, cuidad_id: @distrito_cuidad_barrio.cuidad_id, distrito_id: @distrito_cuidad_barrio.distrito_id } }
    assert_redirected_to distrito_cuidad_barrio_url(@distrito_cuidad_barrio)
  end

  test "should destroy distrito_cuidad_barrio" do
    assert_difference('DistritoCuidadBarrio.count', -1) do
      delete distrito_cuidad_barrio_url(@distrito_cuidad_barrio)
    end

    assert_redirected_to distrito_cuidad_barrios_url
  end
end
