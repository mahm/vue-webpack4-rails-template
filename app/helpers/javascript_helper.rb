module JavascriptHelper
  def javascript_include_polyfill_tag
    query = {
      features: 'default,Array.prototype.includes',
    }
    javascript_include_tag("https://cdn.polyfill.io/v2/polyfill.min.js?#{query.to_param}")
  end
end
