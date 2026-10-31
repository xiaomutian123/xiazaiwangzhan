* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

body {
  background: linear-gradient(145deg, #f8fafc 0%, #eef2f6 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  transition: background 0.3s ease;
}

.test-card {
  max-width: 680px;
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 2.5rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 30px 50px -20px rgba(0, 20, 30, 0.3),
              inset 0 1px 2px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: box-shadow 0.3s, transform 0.2s;
}

.test-card:hover {
  box-shadow: 0 40px 60px -24px rgba(0, 40, 60, 0.4),
              inset 0 1px 3px rgba(255, 255, 255, 0.9);
}

h1 {
  font-size: 2.2rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #0b2b3b;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

h1 span {
  font-size: 1rem;
  background: #1a4b5e;
  color: white;
  border-radius: 60px;
  padding: 0.2rem 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.subhead {
  font-size: 1rem;
  color: #2b5f73;
  margin-bottom: 2rem;
  border-left: 4px solid #2b9e8a;
  padding-left: 1rem;
  font-weight: 400;
  background: rgba(43, 158, 138, 0.06);
  border-radius: 0 12px 12px 0;
  line-height: 1.4;
}

.counter-section {
  background: #ffffffd9;
  border-radius: 2rem;
  padding: 1.5rem 1.8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 8px 18px -6px rgba(0, 50, 70, 0.1);
  border: 1px solid #ffffff;
  margin-bottom: 2rem;
}

.counter-display {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.counter-label {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #2e6d7e;
}

.counter-value {
  font-size: 3.2rem;
  font-weight: 750;
  line-height: 1;
  color: #094c5e;
  font-variant-numeric: tabular-nums;
  transition: transform 0.15s, color 0.2s;
  display: inline-block;
  min-width: 80px;
  text-align: center;
}

.counter-value.pulse {
  transform: scale(1.12);
  color: #0e7a6b;
}

.btn-group {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.btn {
  border: none;
  background: white;
  padding: 0.7rem 1.3rem;
  border-radius: 3rem;
  font-weight: 550;
  font-size: 0.95rem;
  color: #1d5e6e;
  box-shadow: 0 4px 10px -3px rgba(0, 40, 60, 0.2);
  border: 1px solid #c7e2e9;
  cursor: pointer;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  letter-spacing: 0.2px;
  user-select: none;
}

.btn:hover {
  background: #e3f4f8;
  box-shadow: 0 8px 16px -6px #2b9e8a40;
  border-color: #7fc1b6;
  transform: translateY(-1px);
}

.btn:active {
  transform: scale(0.96);
  box-shadow: 0 2px 8px -2px #2b9e8a60;
}

.btn-primary {
  background: #1d6f7a;
  border-color: #1d6f7a;
  color: white;
  box-shadow: 0 8px 16px -6px #1d6f7a80;
}

.btn-primary:hover {
  background: #0f5862;
  border-color: #0f5862;
  color: white;
  box-shadow: 0 10px 20px -6px #0f5862b3;
}

.btn-outline {
  background: transparent;
  border: 1.5px dashed #5297a8;
  color: #1d5e6e;
  box-shadow: none;
}

.btn-outline:hover {
  border: 1.5px solid #2b9e8a;
  background: #e5f6f2;
}

.input-group {
  margin-bottom: 1.8rem;
}

.input-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #15505f;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2px;
  opacity: 0.9;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 3rem;
  padding: 0.15rem 0.15rem 0.15rem 1.5rem;
  border: 1.5px solid #d4e9f0;
  transition: 0.2s;
  box-shadow: 0 4px 12px -6px rgba(0, 0, 0, 0.05);
}

.input-wrapper:focus-within {
  border-color: #2b9e8a;
  box-shadow: 0 0 0 4px #a3dfd6, 0 6px 14px -8px #0f5862;
}

.input-wrapper input {
  flex: 1;
  border: none;
  padding: 0.9rem 0;
  font-size: 1rem;
  background: transparent;
  outline: none;
  color: #103f4b;
  font-weight: 450;
  min-width: 0;
}

.input-wrapper input::placeholder {
  color: #9ebcc9;
  font-weight: 400;
  font-style: italic;
}

.input-wrapper .btn {
  border-radius: 3rem;
  padding: 0.7rem 1.4rem;
  margin-left: 0.5rem;
  background: #dff0f5;
  box-shadow: none;
  border: none;
  font-weight: 550;
  color: #1c6270;
}

.input-wrapper .btn:hover {
  background: #b8dfe8;
}

.echo-area {
  background: #ffffffd4;
  border-radius: 1.4rem;
  padding: 1.3rem 1.5rem;
  border: 1px solid #ebf5fa;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  box-shadow: inset 0 2px 5px #e2f0f6;
}

.echo-label {
  font-weight: 600;
  font-size: 0.92rem;
  color: #1b6879;
  background: #d2ecee;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
}

.echo-value {
  font-size: 1.05rem;
  font-weight: 500;
  color: #094c5e;
  word-break: break-word;
  background: #f2fbfe;
  padding: 0.35rem 1rem;
  border-radius: 2rem;
  border: 1px solid #cce3ec;
  flex: 1;
  min-height: 2.6rem;
  display: flex;
  align-items: center;
  transition: 0.15s;
}

.theme-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f9fc;
  border-radius: 4rem;
  padding: 0.5rem 1.2rem 0.5rem 1.6rem;
  margin-top: 2rem;
  border: 1px solid #c9e2eb;
}

.theme-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 550;
  color: #1b5f6e;
  font-size: 0.95rem;
}

.toggle-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border-radius: 3rem;
  padding: 0.2rem 0.3rem 0.2rem 0.8rem;
  box-shadow: 0 2px 8px #b0d5df;
}

.toggle-indicator span {
  font-size: 0.9rem;
  font-weight: 500;
  color: #0f4857;
}

.toggle-btn {
  background: #1d6f7a;
  border: none;
  width: 3.2rem;
  height: 1.8rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  padding: 0.15rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: inset 0 1px 4px #00000020;
}

.toggle-btn .knob {
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1), background 0.2s;
  box-shadow: 0 2px 6px #00000025;
  transform: translateX(0);
}

.toggle-btn.active {
  background: #2b9e8a;
}

.toggle-btn.active .knob {
  transform: translateX(1.3rem);
  background: #ffffff;
}

/* ===== 深色主题 ===== */
body.dark-theme {
  background: linear-gradient(145deg, #12252e 0%, #0a1a21 100%);
}

body.dark-theme .test-card {
  background: rgba(12, 34, 42, 0.85);
  backdrop-filter: blur(10px);
  border-color: #2e5b66;
  box-shadow: 0 30px 50px -20px #00000080, inset 0 1px 2px #3d7a8840;
}

body.dark-theme h1 {
  color: #b2e6f0;
}

body.dark-theme h1 span {
  background: #217a8a;
  color: #e2f2f7;
}

body.dark-theme .subhead {
  color: #b2d9e4;
  border-left-color: #47b8a8;
  background: #18363f;
}

body.dark-theme .counter-section {
  background: #10303b;
  border-color: #2e5b66;
}

body.dark-theme .counter-label {
  color: #92c9d6;
}

body.dark-theme .counter-value {
  color: #b7ebf7;
}

body.dark-theme .btn {
  background: #193e4a;
  border-color: #3b7a89;
  color: #d2f0f7;
  box-shadow: 0 4px 10px -3px #00000080;
}

body.dark-theme .btn:hover {
  background: #1f5261;
  border-color: #5fafbf;
}

body.dark-theme .btn-primary {
  background: #1d6f7a;
  border-color: #2597a8;
  color: white;
}

body.dark-theme .btn-primary:hover {
  background: #258a9a;
}

body.dark-theme .btn-outline {
  border-color: #3b7a89;
  color: #b9e2ec;
}

body.dark-theme .btn-outline:hover {
  border-color: #48c0b0;
  background: #184e5a;
}

body.dark-theme .input-wrapper {
  background: #0c2a33;
  border-color: #2b5c68;
}

body.dark-theme .input-wrapper input {
  color: #d4f0f8;
}

body.dark-theme .input-wrapper input::placeholder {
  color: #6d9baa;
}

body.dark-theme .input-wrapper .btn {
  background: #1d4b57;
  color: #c5edf5;
}

body.dark-theme .echo-area {
  background: #0e2b35;
  border-color: #26545f;
}

body.dark-theme .echo-label {
  background: #1f5f6b;
  color: #e0f5fc;
}

body.dark-theme .echo-value {
  background: #133842;
  border-color: #2e6879;
  color: #c2ecfa;
}

body.dark-theme .theme-switch {
  background: #0c2a33;
  border-color: #2d616e;
}

body.dark-theme .theme-label {
  color: #a6dae8;
}

body.dark-theme .toggle-indicator {
  background: #0d2d38;
  box-shadow: 0 2px 8px #00000050;
}

body.dark-theme .toggle-indicator span {
  color: #b9e1ee;
}

@keyframes softPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.06); }
  100% { transform: scale(1); }
}

.animate-pop {
  animation: softPop 0.25s ease-in-out;
}

.footnote {
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #5d8e9c;
  text-align: center;
  border-top: 1px dashed #b9dae5;
  padding-top: 1.5rem;
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.3px;
}

body.dark-theme .footnote {
  color: #88bfce;
  border-top-color: #2d6978;
}
