/* Case smart – funzioni comuni ai cinque grafici (si appoggia a radar.js) */
(function () {
  "use strict";
  var RM = Radar.reduced, EASE = Radar.EASE;
  var L = Radar.locale;
  var C = {
    f1: L.format(",.1f"),
    RM: RM, DUR: 750, EASE: EASE,
    W: function (id) { return document.getElementById(id).clientWidth; },
    /** conta da 0 al valore, in un nodo HTML o SVG */
    countUp: function (node, to, fmt, delay, dur) {
      var s = d3.select(node).interrupt();
      if (RM) { node.textContent = fmt(to); return; }
      node.textContent = fmt(0);
      s.transition().delay(delay || 0).duration(dur || 1100).ease(EASE).tween("text", function () {
        var i = d3.interpolateNumber(0, to); return function (t) { node.textContent = fmt(i(t)); };
      });
    },
    /** traccia una linea dall'inizio alla fine */
    drawIn: function (sel, delay, dur) {
      if (RM) return sel;
      var len = sel.node().getTotalLength();
      sel.attr("stroke-dasharray", len + " " + len).attr("stroke-dashoffset", len)
        .transition().delay(delay).duration(dur).ease(EASE).attr("stroke-dashoffset", 0)
        .on("end", function () { d3.select(this).attr("stroke-dasharray", null).attr("stroke-dashoffset", null); });
      return sel;
    },
    fadeIn: function (sel, delay, dur) {
      if (RM) return sel;
      sel.style("opacity", 0).transition().delay(delay).duration(dur || 400).ease(EASE).style("opacity", 1);
      return sel;
    },
    /** chiama fn(true) la prima volta che l'elemento entra nello schermo; fn(false) con reduced motion */
    onView: function (id, fn) {
      var el = document.getElementById(id);
      if (RM || !("IntersectionObserver" in window)) { fn(false); return; }
      var io = new IntersectionObserver(function (es) {
        if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(true); }
      }, { threshold: 0.2 });
      io.observe(el);
    },
    /** tooltip Radar agganciato al contenitore: show(evento, html) */
    tip: function (host) {
      var t = Radar.tooltip(host);
      Radar.dismissOutside(host, t.hide);
      return {
        show: function (e, html) { var p = d3.pointer(e, host); t.show(html, p[0], p[1]); },
        hide: t.hide
      };
    },
    /** ridisegna solo quando cambia la larghezza */
    onResize: function (fn) {
      var lw = innerWidth, to;
      addEventListener("resize", function () {
        clearTimeout(to);
        to = setTimeout(function () { if (innerWidth !== lw) { lw = innerWidth; fn(); Radar.scheduleHeight(); } }, 120);
      });
    }
  };
  window.CASA = C;
})();
