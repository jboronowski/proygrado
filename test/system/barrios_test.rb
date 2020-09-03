require "application_system_test_case"

class BarriosTest < ApplicationSystemTestCase
  setup do
    @barrio = barrios(:one)
  end

  test "visiting the index" do
    visit barrios_url
    assert_selector "h1", text: "Barrios"
  end

  test "creating a Barrio" do
    visit barrios_url
    click_on "New Barrio"

    fill_in "Nombre", with: @barrio.nombre
    click_on "Create Barrio"

    assert_text "Barrio was successfully created"
    click_on "Back"
  end

  test "updating a Barrio" do
    visit barrios_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @barrio.nombre
    click_on "Update Barrio"

    assert_text "Barrio was successfully updated"
    click_on "Back"
  end

  test "destroying a Barrio" do
    visit barrios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Barrio was successfully destroyed"
  end
end
