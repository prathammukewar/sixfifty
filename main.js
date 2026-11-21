(function () {
  var c = window.SIXFIFTY || {};
  var subject = encodeURIComponent("Free call with SixFifty");
  var body = encodeURIComponent("Hi! I'm a (junior/senior) and I'd like a free 20-minute call.\n\nGrade:\nSchools I'm thinking about:\nWhat I need help with:\nTimes that work:\n");
  var mailto = c.email ? "mailto:" + c.email + "?subject=" + subject + "&body=" + body : "#";
  document.querySelectorAll("a.mail").forEach(function (a) { a.href = mailto; });

  var box = document.getElementById("cal");
  if (!box) return;
  if (c.booking) {
    var link = c.booking.replace(/^https?:\/\/(app\.)?cal\.com\//, "").replace(/[?#].*$/, "");
    (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "free", { origin: "https://cal.com" });
    Cal.ns.free("inline", { elementOrSelector: "#cal", calLink: link, config: { layout: "month_view", theme: "light" } });
    Cal.ns.free("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#10131c" } }, hideEventTypeDetails: false, layout: "month_view" });
  } else {
    box.className = "cal empty";
    box.innerHTML = '<a class="btn" href="' + mailto + '">Email us to book</a>';
  }
})();
