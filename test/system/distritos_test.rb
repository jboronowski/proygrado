require "application_system_test_case"

class DistritosTest < ApplicationSystemTestCase
  setup do
    @distrito = distritos(:one)
  end

  test "visiting the index" do
    visit distritos_url
    assert_selector "h1", text: "Distritos"
  end

  test "creating a Distrito" do
    visit distritos_url
    click_on "New Distrito"

    fill_in "Nombre", with: @distrito.nombre
    click_on "Create Distrito"

    assert_text "Distrito was successfully created"
    click_on "Back"
  end

  test "updating a Distrito" do
    visit distritos_url
    click_on "Edit", match: :first

    fill_in "Nombre", with: @distrito.nombre
    click_on "Update Distrito"

    assert_text "Distrito was successfully updated"
    click_on "Back"
  end

  test "destroying a Distrito" do
    visit distritos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Distrito was successfully destroyed"
  end
end
