
extend(jsb, "createStyleSheet", function(cssText, document) {
  if (!document) document = global.document;
  if (typeof cssText != "string") {
    var rules = cssText;

    var styleSheet = {
      toString: function() {
        return map(this, function(properties, selector) {
          return selector + properties;
        }).join("\n").replace(/!([^\w])/g, "!important$1");
      }
    };

    var baseRule = rules["*"] || {};
    baseRule.toString = function() {
      return " {\n" +
        map(this, function(value, propertyName) {
          if (typeof value == "function") value = "none";
          return "  " + propertyName.replace(/[A-Z]/g, function(captialLetter) {
            return "-" + captialLetter.toLowerCase();
          }) + ": " + value;
        }).join(";\n") +
      "\n}";
    };
    delete rules["*"];

    var LEADING_CAP = /^[A-Z]/;
    forEach.detect (rules, function(properties, selector) {
      if (/,/.test(selector)) {
        forEach (new Selector(selector).split(), partial(arguments.callee, properties));
      } else {
        var rule = styleSheet[selector];
        if (!rule) rule = styleSheet[selector] = extend({toString: baseRule.toString}, baseRule);
        forEach.detect (properties, function(value, propertyName) {
          if (/^Webkit/.test(propertyName)) arguments.callee(value, "Khtml" + propertyName.slice(6));
          if (LEADING_CAP.test(propertyName) && propertyName.indexOf(ViewCSS.VENDOR) != 0) {
            arguments.callee(value, propertyName.replace(LEADING_CAP, String2.toLowerCase));
            propertyName = ViewCSS.VENDOR + propertyName;
          }
          if (value == "initial") {
            forEach (rule, function(initialPropertyValue, initialPropertyName) {
              if (initialPropertyName.indexOf(propertyName) == 0) {
                delete rule[initialPropertyName];
              }
            });
            delete rule[propertyName];
          }
          rule[propertyName] = value;
        });
      }
    });

    cssText = styleSheet.toString();
  }

  var host = location.pathname;
  var script = Array2.item(document.getElementsByTagName("script"), -1);
  if (script) host = script.src || host;
  ;;; host = host.replace(/\/build\.php.*$/, '/base2/jsb/chrome/themes/');
  host = host.replace(/[\?#].*$/, "").replace(/[^\/]*$/, "");
  
  cssText = cssText.replace(/%theme%/g, "themes/" + jsb.theme);
  
  var URL = /(url\s*\(\s*['"]?)([\w\.]+[^:\)]*['"]?\))/gi;
  this.base(cssText.replace(URL, "$1" + host + "$2"), document);
  
  return cssText;
});