// 每做好一个新 sketch，就在这里加一个日期
// 方括号里写这一天 references 文件夹里的图片文件名，没有就留空 []
const sketches = {
  '2026-11-08': [],
  '2026-11-09': ['IMG_9740.JPG'],
  '2026-11-10': [],
};
const dates = Object.keys(sketches);

const year = 2026;
const month = 11;   // 11 月

const calendar = document.getElementById('calendar');
const viewer = document.getElementById('viewer');
const big = document.getElementById('big');
document.getElementById('title').textContent = `${year} / ${month}`;

// 这个月有几天、1 号是星期几
const daysInMonth = new Date(year, month, 0).getDate();
const firstWeekday = new Date(year, month - 1, 1).getDay();

// 1 号前面空几格
for (let i = 0; i < firstWeekday; i++) {
  calendar.appendChild(document.createElement('div'));
}

// 生成每一天的小方块
for (let d = 1; d <= daysInMonth; d++) {
  const date = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const btn = document.createElement('button');
  btn.textContent = d;
  btn.className = 'day';

  if (dates.includes(date)) {
    btn.classList.add('has-sketch');
    btn.onclick = () => show(date, btn);
  }
  calendar.appendChild(btn);
}

function show(date, btn) {
  viewer.src = `sketches/${date}/index.html`;
  document.querySelectorAll('.day').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showRefs(date);
}

// 在日历下面显示这一天的参考图
// 有好几张的话，点图片换下一张
function showRefs(date) {
  big.innerHTML = '';
  const files = sketches[date];
  if (files.length === 0) return;

  let n = 0;
  const img = document.createElement('img');
  img.src = `sketches/${date}/references/${files[n]}`;
  big.appendChild(img);

  if (files.length > 1) {
    img.style.cursor = 'pointer';
    img.onclick = () => {
      n = (n + 1) % files.length;   // 到最后一张就回到第一张
      img.src = `sketches/${date}/references/${files[n]}`;
    };
  }
}

// 打开页面时默认显示最新的一个
if (dates.length > 0) {
  const latest = dates[dates.length - 1];
  const latestBtn = [...document.querySelectorAll('.has-sketch')].pop();
  show(latest, latestBtn);
}