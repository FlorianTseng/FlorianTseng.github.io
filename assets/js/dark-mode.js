(function () {
  var storageKey = 'florian-homepage-theme';
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  var metaThemeColor = document.getElementById('theme-color-meta');

  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  }

  function getCurrentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');

    if (button) {
      button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      var icon = button.querySelector('.theme-toggle__icon');
      var text = button.querySelector('.theme-toggle__text');

      if (icon) {
        icon.textContent = isDark ? '☀' : '☾';
      }

      if (text) {
        text.textContent = isDark ? 'Light' : 'Dark';
      }
    }

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#0f1117' : '#ffffff');
    }
  }

  applyTheme(getCurrentTheme());

  if (button) {
    button.addEventListener('click', function () {
      var nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      safeSetItem(storageKey, nextTheme);
    });
  }
})();
