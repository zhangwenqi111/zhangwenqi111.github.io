// assets/js/password.js
;(function() {
  var PASSWORD = "liaj2026";
  var STORAGE_KEY = "data_platform_access";
  var EXPIRE_KEY = "data_platform_expire";
  var EXPIRE_HOURS = 24;

  var input = document.getElementById("password-input");
  var btn = document.getElementById("submit-btn");
  var error = document.getElementById("error-tip");
  var section = document.getElementById("password-section");
  var content = document.getElementById("data-content");

  if (!input || !btn || !error || !section || !content) {
    console.error("[数据平台] 初始化失败：缺少必要的页面元素。");
    return;
  }

  console.log("[数据平台] 脚本已加载，密码保护已就绪。");

  function checkPassword() {
    if (input.value === PASSWORD) {
      section.style.display = "none";
      content.style.display = "block";
      error.style.display = "none";
      try {
        localStorage.setItem(STORAGE_KEY, "true");
        var expireTime = Date.now() + EXPIRE_HOURS * 60 * 60 * 1000;
        localStorage.setItem(EXPIRE_KEY, expireTime.toString());
      } catch (e) {}
    } else {
      error.style.display = "block";
    }
  }

  btn.addEventListener("click", checkPassword);
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkPassword();
  });

  try {
    var hasAccess = localStorage.getItem(STORAGE_KEY);
    var expireTime = parseInt(localStorage.getItem(EXPIRE_KEY), 10);
    if (hasAccess === "true" && Date.now() < expireTime) {
      section.style.display = "none";
      content.style.display = "block";
    }
  } catch (e) {}

  btn.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#003d73";
  });
  btn.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#005197";
  });
})();
