RSpec.configure do |config|
  config.before do |example|
    if example.metadata[:type] == :system
      if example.metadata[:rack_test]
        driven_by :rack_test
      else
        driven_by :selenium, using: :headless_chrome, screen_size: [1400, 1400]
      end
    end
  end
end

RSpec.configure do |config|
  config.after(:each, type: :system) do |example|
    if example.metadata[:rack_test].nil?
      expect(page).to have_no_js_errors # rubocop:disable RSpec/ExpectInHook
    end
  end
end
