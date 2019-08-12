// btoa and atob pollyfill/shim to make fauna driver work
// see https://github.com/ethers-io/ethers.js/issues/270

// exposes .atob and .btoa functions

!(function() {
  var e =
      "object" == typeof exports &&
      null !== exports &&
      "number" != typeof exports.nodeType
        ? exports
        : "undefined" != typeof self
        ? self
        : $.global,
    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function f(e) {
    this.message = e;
  }
  ((f.prototype = new Error()).name = "InvalidCharacterError"),
    e.btoa ||
      (e.btoa = function(e) {
        for (
          var t, r, o = String(e), n = 0, a = c, i = "";
          o.charAt(0 | n) || ((a = "="), n % 1);
          i += a.charAt(63 & (t >> (8 - (n % 1) * 8)))
        ) {
          if (255 < (r = o.charCodeAt((n += 0.75))))
            throw new f(
              "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
            );
          t = (t << 8) | r;
        }
        return i;
      }),
    e.atob ||
      (e.atob = function(e) {
        var t = String(e).replace(/[=]+$/, "");
        if (t.length % 4 == 1)
          throw new f(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        for (
          var r, o, n = 0, a = 0, i = "";
          (o = t.charAt(a++));
          ~o && ((r = n % 4 ? 64 * r + o : o), n++ % 4)
            ? (i += String.fromCharCode(255 & (r >> ((-2 * n) & 6))))
            : 0
        )
          o = c.indexOf(o);
        return i;
      });
})();
