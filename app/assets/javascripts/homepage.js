function add_bookmark() {
  var b = navigator.userAgent.toLowerCase();
  var a = (b.indexOf("konqueror") != -1);
  var c = (b.indexOf("webkit") != -1);
  var e = (b.indexOf("mac") != -1);
  var d = e ? "Command/Cmd" : "CTRL";
  if (window.external && (!document.createTextNode || (typeof (window.external.AddFavorite) == "unknown"))) {
    window.external.AddFavorite("http://www.leboncoin.fr/", "Petites annonces gratuites d'occasion - leboncoin.fr")
  } else {
    if (a) {
      alert("Veuillez appuyer sur CTRL + B pour ajouter ce site \u00e0 vos favoris.")
    } else {
      if (window.opera) {
        void(0)
      } else {
        if (window.home || c) {
          alert("Veuillez appuyer sur " + d + " + D pour ajouter ce site \u00e0 vos favoris.")
        } else {
          if (!window.print || e) {
            alert("Veuillez appuyer sur Command/Cmd + D pour ajouter ce site \u00e0 vos favoris.")
          } else {
            alert("Votre navigateur internet n'\u00e9tant pas reconnu, vous devrez ajouter ce site manuellement \u00e0 vos favoris.")
          }
        }
      }
    }
  }
}
function hasClass(b, a) {
  return b.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
}
function addClass(b, a) {
  if (!this.hasClass(b, a)) {
    b.className += " " + a
  }
}
function removeClass(c, a) {
  if (hasClass(c, a)) {
    var b = new RegExp("(\\s|^)" + a + "(\\s|$)");
    c.className = c.className.replace(b, "")
  }
}
function show_account_submenu() {
  var a = document.getElementById("nav_main");
  var c = "account_submenu";
  var b = document.getElementById(c);
  if (b) {
    if (b.style.display == "none" || b.style.display == "") {
      addClass(a, "account_on");
      b.style.display = "block"
    } else {
      removeClass(a, "account_on");
      b.style.display = "none"
    }
  }
  return false
}
var current_screen = "screen_form";

function show_account_screen(c) {
  var a = document.getElementById(c);
  var b = document.getElementById(current_screen);
  switch (current_screen) {
    case "pass_lost_f":
      document.forms.passlostform.reset();
      break;
    default:
      document.forms.loginform.reset();
      break
  }
  b.style.display = "none";
  a.style.display = "block";
  current_screen = c
}
function toggle_blocks_display(d, c) {
  var b = document.getElementById(d);
  var a = document.getElementById(c);
  if (b.style.display == "none") {
    b.style.display = "block"
  } else {
    b.style.display = "none"
  }
  if (a.style.display == "none") {
    a.style.display = "block"
  } else {
    a.style.display = "none"
  }
}
$(document).ready(function () {
  $(".adinput").each(function () {
    var g = $(this);
    var c = $(g).find("input[type=text],textarea,input[type=password],select");
    var b = $(g).height();
    var a = function (h) {
      return $(h).parent().find(".below").length
    };
    if (g.find(".info").length > 0) {
      var e = $(g).find(".info");
      var f = $(this).parent().find(".message.info").hasClass("below");
      $(c).focus(function () {
        if (c.is("textarea") === false && !a) {
          $(g).css("height", b + "px")
        }
        $(g).addClass("message_info")
      });
      $(c).blur(function () {
        $(g).removeClass("message_info");
        if (!f) {
          $(g).css("height", "")
        }
      })
    }
    var d = $(g).find(".message.err");
    $(c).change(function () {
      if (c.is("textarea") === false && !a) {
        $(g).css("height", b + "px")
      }
      $(d).css("display", "none")
    })
  });
  $(".adinput:has(select)").each(function () {
    var c = $(this);
    var a = $(c).find("select");
    var b = $(c).find(".message.err");
    $(a).change(function () {
      $(b).css("display", "none")
    })
  })
});
(function () {
  $.fn.form_control = function (s, t, N) {
    if ($(this).size() == 0) {
      return this
    }
    var p = $(this);
    var j = $(this).attr("id") + "_";
    var n = s;
    var M = t;
    var d = true;
    var D = {};
    var G = 0;
    var P = $.extend({
      errorByStep: false
    }, N);
    var q = function () {
      $("html, body").animate({
        scrollTop: $(G + "_block").offset().top - 90
      }, "slow")
    };
    var k = function (Q, S) {
      if (D[Q] != false) {
        var T = Q + "_err";
        var R = T + " > span";
        $(R).html(S);
        $(T).show();
        D[Q] = false;
        $(Q).change(function () {
          m(Q);
          $(Q).unbind("change")
        })
      }
      return true
    };
    var m = function (Q) {
      var R = Q + "_err";
      $(R).hide();
      return true
    };
    var H = function () {
      d = true;
      D = {};
      $(".message.err").hide();
      G = 0
    };
    var L = function (R, Q) {
      if (d == true) {
        d = R
      }
      if (G == 0 && R == false) {
        G = Q
      }
    };
    var r = function (R, T) {
      tempArray = new Array(1);
      var Q = 0;
      var S = new String(T);
      while (S.indexOf(R) > 0) {
        tempArray[Q] = S.substr(0, S.indexOf(R));
        S = S.substr(S.indexOf(R) + 1, S.length - S.indexOf(R) + 1);
        Q = Q + 1
      }
      tempArray[Q] = S;
      return tempArray
    };
    var B = function (T, S) {
      var R = S.length;
      for (var Q = 0; Q < R; Q++) {
        if (S[Q] == T) {
          return true
        }
      }
      return false
    };
    var O = function () {
      if (M != null) {
        $.each(M, function (R, Q) {
          $.each(Q, function (T, U) {
            var S = "#" + T;
            $.each(U, function (W, V) {
              var Y;
              var X;
              $.each(V, function (Z, aa) {
                switch (Z) {
                  case "function":
                    Y = aa;
                    break;
                  case "arg":
                    X = aa;
                    break
                }
              });
              switch (Y) {
                case "changeFromSelect":
                  A(S, X);
                  break
              }
            })
          })
        })
      }
    };
    var g = function (Q) {
      return Q + "_block"
    };
    var A = function (R, Q) {
      var V = R;
      var U = "#" + Q[0];
      var T = Q[1];
      var S = g(V);
      $(U).change(function () {
        var W = $(this).val();
        $(V + " > option[value!=0]").remove();
        if (T[W] != undefined) {
          $.each(T[W], function (Y, X) {
            $(V).append('<option value="' + Y + '">' + X + "</option>")
          });
          $(S).show()
        } else {
          $(S).hide()
        }
      })
    };
    var z = function () {
      H();
      $.each(n, function (R, Q) {
        $.each(Q, function (T, U) {
          var S = "#" + T;
          $.each(U, function (X, V) {
            var Z;
            var Y;
            var W;
            $.each(V, function (aa, ab) {
              switch (aa) {
                case "function":
                  Z = ab;
                  break;
                case "arg":
                  Y = ab;
                  break;
                case "message":
                  W = ab;
                  break
              }
            });
            if (P.errorByStep == false || d == true) {
              if (Z != undefined && W != undefined) {
                switch (Z) {
                  case "require":
                    L(v(S, W), S);
                    break;
                  case "alpha":
                    L(C(S, W), S);
                    break;
                  case "notEqual":
                    L(u(S, W, Y), S);
                    break;
                  case "notEqualAndSelectableFrom":
                    L(w(S, W, Y), S);
                    break;
                  case "email":
                    L(o(S, W), S);
                    break;
                  case "siren":
                    L(h(S, W), S);
                    break;
                  case "siret":
                    L(b(S, W), S);
                    break;
                  case "minLength":
                    L(c(S, W, Y), S);
                    break;
                  case "numeric":
                    L(e(S, W), S);
                    break;
                  case "phone":
                    L(a(S, W), S);
                    break;
                  case "alphanum":
                    L(x(S, W), S);
                    break;
                  case "alphaSpeName":
                    L(l(S, W), S);
                    break;
                  case "alphanumSpeAdress":
                    L(F(S, W), S);
                    break;
                  case "alphanumSpeCity":
                    L(E(S, W), S);
                    break;
                  case "minMaxLength":
                    L(f(S, W, Y), S);
                    break;
                  case "maxLength":
                    L(y(S, W, Y), S);
                    break;
                  case "sameValue":
                    L(J(S, W, Y), S);
                    break;
                  case "password":
                    L(i(S, W, Y), S);
                    break;
                  case "pseudo":
                    L(I(S, W, Y), S);
                    break;
                  case "notEqualForDateSelect":
                    L(K(S, W, Y), S);
                    break
                }
              }
            }
          })
        })
      });
      return d
    };
    var K = function (U, ab, V) {
      var Q = 0;
      var X = 0;
      var Y = new Array();
      for (var W = 0; W < V.length; W++) {
        var S = U + V[W];
        var Z = $(S).val();
        Y[W] = Z;
        if (Z == 0) {
          Q += 1
        }
      }
      if (Q > 0 && Q != V.length) {
        k(U, ab);
        return false
      }
      var aa = new Date(Y[2], Y[1], Y[0]);
      var R = aa.getTime();
      var ac = new Date();
      var T = ac.getTime();
      if (R > T) {
        k(U, ab);
        return false
      }
      return true
    };
    var v = function (R, S) {
      var V = $(R).val();
      var U = $(R).attr("type");
      var Q;
      if (U == "checkbox") {
        Q = ($(R).is(":checked"))
      } else {
        var T = /\S/;
        Q = (T.test(V))
      }
      if (Q) {
        return true
      }
      k(R, S);
      return false
    };
    var C = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff']+$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var x = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z0-9\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff]+$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var l = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff'\-\._]+$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var I = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z0-9\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff'\-\._]+$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var F = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z0-9\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff'\-,\/ ]+$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var E = function (R, T, Q) {
      var V = $(R).val();
      var U = /^[a-zA-Z\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f2\u00f3\u00f4\u00f5\u00f6\u00f9\u00fa\u00fb\u00fc\u00fd\u00ff'\-,\/ ]+[0-9]*$/i;
      var S = /\S/;
      if (U.test(V) && S.test(V)) {
        return true
      }
      k(R, T);
      return false
    };
    var f = function (R, S, Q) {
      var U = $(R).val();
      var T = /\S/;
      if (T.test(U) && U.length >= Q[0] && U.length <= Q[1]) {
        return true
      }
      k(R, S);
      return false
    };
    var e = function (R, S, Q) {
      var U = $(R).val();
      var T = /^[0-9]+$/;
      if (T.test(U)) {
        return true
      }
      k(R, S);
      return false
    };
    var u = function (R, S, Q) {
      var T = $(R).val();
      var U = Q[0];
      if (T == U) {
        k(R, S);
        return false
      }
      return true
    };
    var w = function (R, S, Q) {
      var V = $(R).val();
      var W = Q[0];
      var T = $("#" + Q[1]).val();
      var U = r(":", Q[2]);
      if (V == W && B(T, U)) {
        k(R, S);
        return false
      }
      return true
    };
    var c = function (R, S, Q) {
      var T = $(R).val();
      var U = Q[0];
      if (T.length < U) {
        k(R, S);
        return false
      }
      return true
    };
    var y = function (R, S, Q) {
      var T = $(R).val();
      var U = Q[0];
      alert(U);
      alert(T.length);
      if (T.length > U) {
        k(R, S);
        return false
      }
      return true
    };
    var o = function (Q, R) {
      var T = $(Q).val();
      var S = /^[_A-Za-z0-9-]+(?:[.+][_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*(?:\.[A-Za-z]{2,6})$/;
      if (S.test(T)) {
        return true
      }
      k(Q, R);
      return false
    };
    var a = function (Q, R) {
      var T = $(Q).val();
      var S = /^0[1-9]([0-9]{8})$/;
      if (S.test(T)) {
        return true
      }
      k(Q, R);
      return false
    };
    var J = function (R, S, Q) {
      var U = $(R).val();
      var T = $("#" + j + Q[0]).val();
      if (U == T) {
        return true
      }
      k(R, S);
      return false
    };
    var i = function (Q, U) {
      var V = $(Q).val();
      var T = /^([a-z0-9.\-_=+!;]{8,})$/i;
      var S = /\d/;
      var R = /[a-z]+/i;
      if (T.test(V) && S.test(V) && R.test(V)) {
        return true
      }
      k(Q, U);
      return false
    };
    var h = function (Q, R) {
      var U = $(Q).val();
      if (U.length != 9 || isNaN(U)) {
        k(Q, R);
        return false
      } else {
        var T = 0;
        var S;
        for (var V = 0; V < U.length; V++) {
          if (V % 2 == 1) {
            S = U.charAt(V) * 2;
            if (S > 9) {
              S -= 9
            }
          } else {
            S = U.charAt(V)
          }
          T += parseInt(S)
        }
        if (T % 10 == 0) {
          return true
        } else {
          k(Q, R);
          return false
        }
      }
      k(Q, R);
      return false
    };
    var b = function (Q, R) {
      var U = $(Q).val();
      if (U.length != 14 || isNaN(U)) {
        k(Q, R);
        return false
      } else {
        var T = 0;
        var S;
        for (var V = 0; V < U.length; V++) {
          if (!(V % 2)) {
            S = parseInt(U.charAt(V)) * 2;
            S = S >= 10 ? 1 + (S - 10) : S
          } else {
            S = parseInt(U.charAt(V))
          }
          T += S
        }
        if (T > 0 && (T % 10 == 0)) {
          return true
        } else {
          k(Q, R);
          return false
        }
      }
      k(Q, R);
      return false
    };
    O();
    p.submit(function () {
      if (z() == false) {
        q()
      }
      return z()
    });
    return this
  }
})(jQuery);
$(document).ready(function () {
  if (typeof selectorElement != "undefined") {
    $(selectorElement).form_control(jsonFormControl, jsonFormExtra, jsonConfControl)
  }
});

function closeCookieFrame() {
  document.getElementById("cookieFrame").style.display = "none"
};
