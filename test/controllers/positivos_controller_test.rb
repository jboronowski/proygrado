require 'test_helper'

class PositivosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get positivos_index_url
    assert_response :success
  end

end
