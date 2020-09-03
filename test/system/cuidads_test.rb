require "application_system_test_case"

class CuidadsTest < ApplicationSystemTestCase
  setup do
    @cuidad = cuidads(:one)
  end

  test "visiting the index" do
    visit cuidads_url
    assert_selector "h1", text: "Cuidads"
  end

  test "creating a Cuidad" do
    visit cuidads_url
    click_on "New Cuidad"

    fill_in "Nombre", with: @cuidad.nombre
    click_on "Create Cuidad"

    assert_text "Cuidad was successfully created"
    click_on "Back"
  end

  test "updating a Cuidad" do
    visit cuidads_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @cuidad.nombre
    click_on "Update Cuidad"

    assert_text "Cuidad was successfully updated"
    click_on "Back"
  end

  test "destroying a Cuidad" do
    visit cuidads_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cuidad was successfully destroyed"
  end
end
