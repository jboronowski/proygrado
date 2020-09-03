require 'test_helper'

class CuidadsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cuidad = cuidads(:one)
  end

  test "should get index" do
    get cuidads_url
    assert_response :success
  end

  test "should get new" do
    get new_cuidad_url
    assert_response :success
  end

  test "should create cuidad" do
    assert_difference('Cuidad.count') do
      post cuidads_url, params: { cuidad: { nombre: @cuidad.nombre } }
    end

    assert_redirected_to cuidad_url(Cuidad.last)
  end

  test "should show cuidad" do
    get cuidad_url(@cuidad)
    assert_response :success
  end

  test "should get edit" do
    get edit_cuidad_url(@cuidad)
    assert_response :success
  end

  test "should update cuidad" do
    patch cuidad_url(@cuidad), params: { cuidad: { nombre: @cuidad.nombre } }
    assert_redirected_to cuidad_url(@cuidad)
  end

  test "should destroy cuidad" do
    assert_difference('Cuidad.count', -1) do
      delete cuidad_url(@cuidad)
    end

    assert_redirected_to cuidads_url
  end
end
