require "application_system_test_case"

class DistritoCuidadBarriosTest < ApplicationSystemTestCase
  setup do
    @distrito_cuidad_barrio = distrito_cuidad_barrios(:one)
  end

  test "visiting the index" do
    visit distrito_cuidad_barrios_url
    assert_selector "h1", text: "Distrito Cuidad Barrios"
  end

  test "creating a Distrito cuidad barrio" do
    visit distrito_cuidad_barrios_url
    click_on "New Distrito Cuidad Barrio"

    fill_in "Barrio", with: @distrito_cuidad_barrio.barrio_id
    fill_in "Cuidad", with: @distrito_cuidad_barrio.cuidad_id
    fill_in "Distrito", with: @distrito_cuidad_barrio.distrito_id
    click_on "Create Distrito cuidad barrio"

    assert_text "Distrito cuidad barrio was successfully created"
    click_on "Back"
  end

  test "updating a Distrito cuidad barrio" do
    visit distrito_cuidad_barrios_url
    click_on "Edit", match: :first

    fill_in "Barrio", with: @distrito_cuidad_barrio.barrio_id
    fill_in "Cuidad", with: @distrito_cuidad_barrio.cuidad_id
    fill_in "Distrito", with: @distrito_cuidad_barrio.distrito_id
    click_on "Update Distrito cuidad barrio"

    assert_text "Distrito cuidad barrio was successfully updated"
    click_on "Back"
  end

  test "destroying a Distrito cuidad barrio" do
    visit distrito_cuidad_barrios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Distrito cuidad barrio was successfully destroyed"
  end
end
