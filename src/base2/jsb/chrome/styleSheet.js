
var _WINDOW =         "Window",
    _HIGHLIGHT =      "Highlight",
    _HIGHLIGHT_TEXT = "HighlightText";

if (detect("win.+(Webkit([1-4]|5[01]|52[^89])|theme=aqua)")) { // webkit pre 528 uses the same colours, no matter the theme
    _WINDOW =         "#fff";
    _HIGHLIGHT =      "#427cd9";
    _HIGHLIGHT_TEXT = "#fff";
}

jsb.theme.cssText = jsb.createStyleSheet({
  "*": {
    backgroundPosition:        "9999px 9999px",
    backgroundAttachment:      "scroll!",
    backgroundRepeat:          "no-repeat!",
    padding:                   "2px",
    border:                    "1px solid #a7a6aa",

    "@theme=classic": {
      padding:                 "1px 2px 2px 1px",
      borderWidth:             "2px 1px 1px 2px",
      borderColor:             "#444 #ddd #ddd #444",

      "@MSIE": {
        padding:               "1px",
        border:                "2px inset ButtonHighlight",
        borderLeftColor:       "ButtonShadow",
        borderLeftStyle:       "outset",
        borderTopColor:        "ButtonShadow",
        borderTopStyle:        "outset"
      },

      "@Gecko": {
        padding:               "1px",
        borderWidth:           "2px",
        MozBorderTopColors:    "ThreeDShadow ThreeDDarkShadow",
        MozBorderRightColors:  "ThreeDHighlight ThreeDLightShadow",
        MozBorderLeftColors:   "ThreeDShadow ThreeDDarkShadow",
        MozBorderBottomColors: "ThreeDHighlight ThreeDLightShadow"
      }
    },

    "@theme=aqua": {
      padding:                 "1px 2px 2px 2px",
      borderWidth:             "2px 1px 1px 1px",
      borderColor:             "#9e9e9e #b4b4b4 #dadada #b4b4b4"
    },

    "@theme=luna\\/blue": {
      borderColor:             "#7f9db9"
    },
    
    "@theme=luna\\/olive": {
      borderColor:             "#a4b97f"
    },
    
    "@theme=luna\\/silver": {
      borderColor:             "#a5acb2"
    },
    
    "@theme=aero": {
      borderColor:             "#abadb3 #dbdfe6 #e3e9ef #e2e3ea"
    },
    
    "@theme=zune": {
      borderColor:             "#969696"
    }
  },

  ".jsb-dropdown,.jsb-combobox,.jsb-colorpicker,.jsb-datepicker,.jsb-weekpicker": {
    "@theme=aqua": { // aqua
      width:              "10em",
      BorderRadius:       "5px",
      BoxShadow:          "0 1px 4px rgba(160, 160, 160, 0.5)",
      
      "@!borderImage": {
        backgroundImage:        "url(%theme%/bg-dropdown.png)!",
        backgroundPosition:     "right center!",
        padding:                "1px 22px 1px 4px!",
        borderWidth:            "1x!",
        border:                 "1px solid #545454!"
      },

      "@borderImage": {
        BorderImage:        "url(%theme%/dropdown.png) 1 18 1 4",
        borderStyle:        "none",
        borderWidth:        "1px 18px 1px 4px!",
        padding:            "1px"
      }
    },

    "@!theme=aqua": { // not aqua
      width:              "8em",
      paddingRight:       "19px!",
      backgroundImage:    "url(%theme%/dropdown.png)!"
    }
  },

  ".jsb-progressbar,.jsb-slider,.jsb-colorpicker": {
    textIndent:           "-10em", // hide text for purely visual controls (Safari & Gecko)
    cursor:               "default",
    UserModify:           "read-only",
    UserSelect:           "none",

    "@MSIE": {
      verticalAlign:      "top",
      textIndent:         0,
      lineHeight:         "80em" // hide text for purely visual controls (MSIE)
    }
  },

  ".jsb-progressbar": {
    _height:               "10px",
    minHeight:             "10px",
    padding:               "2px",
    borderColor:           "ThreeDDarkShadow",
    borderWidth:           "1px",
    BorderRadius:          "5px",
    backgroundImage:       "url(%theme%/progressbar.png)!",
    width:                 "164px"
  },

  ".jsb-slider": {
    _height:              "22px",
    minHeight:            "22px",
    padding:              0,
    border:               "none!",
    backgroundColor:      "transparent",
    backgroundImage:      "url(%theme%/slider.png)!",

    "@Gecko": {
      MozBorder:     "initial"
    },

    "@Gecko1\\.[0-3]": {
      backgroundColor: "#f2f2f2"
    }
  },

  ".jsb-popup": {
    visibility:        "hidden",
    backgroundColor:   _WINDOW,
    borderWidth:       "1px",
    position:          "absolute!",
    zIndex:            "999999!",
    cursor:            "default",
    padding:           "0",
    margin:            "0!",

    "@Gecko|Opera|theme=aqua|Webkit": {
      MozBorder:        "initial",
      borderColor:      "ThreeDShadow!",
      borderStyle:      "outset!",

      "@Opera": {
        borderStyle:    "solid!"
      }
    },

    "@theme=classic": {
      borderColor:      "ThreeDShadow!",
      borderStyle:      "solid!"
    }
  },

  ".jsb-spinner": {
    textAlign:        "right",
    width:            "5em",
    paddingRight:     "19px!",
    backgroundImage:  "url(%theme%/spinner.png)!"
  },

  ".jsb-timepicker,.jsb-monthpicker": {
    width:            "4em",
    paddingRight:     "19px!",
    backgroundImage:  "url(%theme%/spinner.png)!"
  },

  ".jsb-datepicker-days": {
    UserSelect:      "none!"
  }
});

jsb.theme.cssText += jsb.createStyleSheet({
  ".jsb-error": {
    borderColor:      "#ff5e5e",
    outlineColor:     "#ff5e5e"
  },

  ".jsb-colorpicker": {
    width:         "4em"
  },

  ".jsb-datepicker": {
    width:         "12ex"
  },

  ".jsb-weekpicker": {
    width:         "11ex"
  },

  "@!Webkit": {
    ".progressbar_focus,.slider_focus,.colorpicker_focus": {
      Outline:        "1px dotted"
    }
  },

  "@Webkit": {
    ".jsb-slider:focus:not(.slider_focus)": {
      Outline:        "none!"
    }
  },

  ".jsb-datalist": {
    display:         "none!"
  },

  ".jsb-menulist": {
    "@!MSIE": {
      overflow:      "auto!"
    },

    "@MSIE": {
      overflowY:      "auto!"
    }
  },

  ".jsb-menulist p": {
    margin:          "0!",
    padding:         "1px 2px!",
    overflow:        "hidden!",
    whiteSpace:      "nowrap!"
  },

  ".jsb-colorpicker-popup": {
    backgroundColor: "ButtonFace!",
    color:           "ButtonText!",
    fontSize:        "11px!",
    padding:         "4px!",
    overflow:        "hidden!",
    whiteSpace:      "nowrap!",

    "@Webkit([1-4]|5[01]|52[^89])": {
      backgroundColor: "#ece9d8!"
    }
  },

  ".jsb-colorpicker-popup input": {
    fontSize:        "11px",
    margin:          "4px 2px",
    verticalAlign:   "middle",
    width:           "127px"
  },

  ".jsb-datepicker-popup": {
    backgroundColor: "#fcfcfd!",
    overflow:        "hidden!"
  },

  /*".jsb-datepicker-days:focus": {
    Outline:         "none",
    borderColor:     _HIGHLIGHT + "!"
  },*/

  ".jsb-datepicker-popup input": {
    width:             "5ex",

    "@!MSIE[567]|Opera": {
      padding:         "1px 19px 1px 2px!"
    }
  },

  ".jsb-datepicker-popup th": {
    backgroundColor: "InfoBackground!",
    color:           "InfoText!",
    fontWeight:      "normal!"
  },

  ".jsb-datepicker-popup th,.jsb-datepicker-days td": {
    padding:         "2px 0!",
    textAlign:       "center!",
    width:           "14%!"
  },

  ".jsb-datepicker-days td.disabled": {
    color:           "GrayText!",
    Opacity:         0.4
  },

  ".jsb-datepicker-days td.selected,.jsb-datepicker-days tr.selected td": {
    backgroundColor: _HIGHLIGHT,
    color:           _HIGHLIGHT_TEXT,
    Opacity:         1
  },

  "@theme=luna\\/blue": {
    ".jsb-datepicker-popup th": {
      backgroundColor: "#ffffe1!"
    }
  },

  "@theme=aqua": {
    ".jsb-menulist": {
      Opacity:            0.95
    },

    ".jsb-spinner,.jsb-timepicker,.jsb-monthpicker": {
      borderTopWidth: "1px",
      paddingTop: "2px",
      borderRightColor:                "transparent",
      WebkitBorderTopRightRadius:      "5px",
      WebkitBorderBottomRightRadius:   "5px",
      "MozBorderRadius-topright":      "5px",
      "MozBorderRadius-bottomright":   "5px"
    },

    ".jsb-spinner[disabled],.jsb-spinner[readonly],.jsb-timepicker[disabled],.jsb-timepicker[readonly],.jsb-monthpicker[disabled],.jsb-monthpicker[readonly]": {
      borderColor:      "#d6d6d6 #e0e0e0 #f0f0f0 #e0e0e0"
    },

    ".jsb-combobox[readonly],.jsb-combobox[disabled],.jsb-datepicker[readonly],.jsb-datepicker[disabled],.jsb-weekpicker[readonly],.jsb-weekpicker[disabled]": {
      "@borderImage": {
        BorderImage:   "url(%theme%/dropdown-disabled.png) 1 18 1 4!"
      },

      "@!borderImage": {
        backgroundImage:   "url(%theme%/bg-dropdown-disabled.png)!"
      }
    },

    "@borderImage": {
      ".jsb-colorpicker": {
        BorderImage:        "url(%theme%/colorpicker.png) 1 18 1 4!"
      },

      ".jsb-colorpicker[readonly],.jsb-colorpicker[disabled]": {
        BorderImage:        "url(%theme%/colorpicker-disabled.png) 1 18 1 4!"
      }
    },

    "@!borderImage": {
      ".jsb-colorpicker": {
        backgroundImage:   "url(%theme%/bg-colorpicker.png)!"
      },

      ".jsb-colorpicker[readonly],.jsb-colorpicker[disabled]": {
        backgroundImage:   "url(%theme%/bg-colorpicker-disabled.png)!"
      }
    },

    ".jsb-combobox[disabled],.jsb-datepicker[disabled],.jsb-weekpicker[disabled],.jsb-colorpicker[disabled],.jsb-progressbar[disabled]": {
      color:         "WindowText",
      Opacity:       0.5
    },

    ".jsb-colorpicker-popup,.jsb-datepicker-popup": {
      backgroundColor: _WINDOW + "!",
      backgroundImage: "url(%theme%/metal.png)!",
      backgroundRepeat: "repeat!"
    },

    ".jsb-datepicker": {
      width:         "7em"
    },

    ".jsb-weekpicker": {
      width:         "6em"
    },

    ".jsb-datepicker-days": {
      backgroundColor:       _WINDOW + "!"
    },

    ".jsb-datepicker-days:active": {
      Outline:       "none!"
    },

    ".jsb-datepicker-popup th": {
      backgroundColor: "#89acd5!",
      color:           "white!"
    }
  },
  
  ".jsb-tooltip": {
    borderColor:        "InfoText!",
    backgroundColor:    "InfoBackground!",
    color:              "InfoText!",
    fontSize:           "small!",
    BoxShadow:          "2px 4px 4px rgba(160, 160, 160, 0.5)"
  },

  "@Opera[91]": {
    "input[list],input[type=number],input[type=date],input[type=time],input[type=month],input[type=week],input[type=range]": {
      border: "initial",
      borderWidth:             "initial",
      borderColor:             "initial",
      backgroundImage: "none!"
    }
  }
});
//;;;console2.log(jsb.theme.cssText);