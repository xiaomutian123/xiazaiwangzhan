// script.js
(function() {
  "use strict";

  // ---------- 1. 计数器逻辑 ----------
  const counterEl = document.getElementById('counterValue');
  const decrementBtn = document.getElementById('decrementBtn');
  const incrementBtn = document.getElementById('incrementBtn');
  const resetBtn = document.getElementById('resetBtn');

  let count = 0;

  function updateCounter(value, animate = true) {
    count = value;
    counterEl.textContent = count;

    if (animate) {
      counterEl.classList.add('pulse');
      setTimeout(() => {
        counterEl.classList.remove('pulse');
      }, 150);
    }
  }

  incrementBtn.addEventListener('click', () => {
    updateCounter(count + 1);
  });

  decrementBtn.addEventListener('click', () => {
    updateCounter(count - 1);
  });

  resetBtn.addEventListener('click', () => {
    updateCounter(0);
  });

  // ---------- 2. 实时输入回显 + 清空 ----------
  const echoInput = document.getElementById('echoInput');
  const echoDisplay = document.getElementById('echoDisplay');
  const clearInputBtn = document.getElementById('clearInputBtn');

  function updateEcho() {
    const value = echoInput.value.trim();
    if (value === '') {
      echoDisplay.textContent = '（等待输入…）';
    } else {
      echoDisplay.textContent = value;
    }
  }

  echoInput.addEventListener('input', updateEcho);

  clearInputBtn.addEventListener('click', () => {
    echoInput.value = '';
    updateEcho();
    echoInput.focus();
  });

  echoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      echoDisplay.classList.add('animate-pop');
      setTimeout(() => echoDisplay.classList.remove('animate-pop'), 250);
    }
  });

  // ---------- 3. 主题切换 (深色/浅色) ----------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeStatus = document.getElementById('themeStatus');
  const body = document.body;

  let isDarkMode = false;

  function setTheme(dark) {
    isDarkMode = dark;
    if (dark) {
      body.classList.add('dark-theme');
      themeToggleBtn.classList.add('active');
      themeStatus.textContent = '深色';
    } else {
      body.classList.remove('dark-theme');
      themeToggleBtn.classList.remove('active');
      themeStatus.textContent = '浅色';
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    setTheme(!isDarkMode);
  });

  // 初始化默认浅色主题
  setTheme(false);
})();