(function () {
  var c = window.SIXFIFTY || {};
  var subject = encodeURIComponent("Free call with SixFifty");
  var body = encodeURIComponent("Hi! I'm a (junior/senior) and I'd like a free 20-minute call.\n\nGrade:\nSchools I'm thinking about:\nWhat I need help with:\nTimes that work:\n");
  var mailto = c.email ? "mailto:" + c.email + "?subject=" + subject + "&body=" + body : "#";
  document.querySelectorAll("a.mail").forEach(function (a) { a.href = mailto; });

  var box = document.getElementById("cal");
  if (!box) return;
  if (c.calendly) {
    var url = c.calendly + (c.calendly.indexOf("?") < 0 ? "?" : "&") +
      "hide_gdpr_banner=1&primary_color=10131c&embed_domain=" + location.hostname + "&embed_type=Inline";
    var f = document.createElement("iframe");
    f.src = url; f.title = "Book a free call"; f.loading = "lazy";
    f.style.cssText = "width:100%;height:700px;border:0";
    box.appendChild(f);
  } else {
    box.className = "cal empty";
    box.innerHTML = '<a class="btn" href="' + mailto + '">Email us to book</a>';
  }
})();
