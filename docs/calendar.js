// 每做好一个新 sketch，就在这里加一个日期
// 方括号里写这一天 references 文件夹里的图片文件名，没有就留空 []
const sketches = {
    '2026-11-01': [],
    // '2026-11-02': [],
    // '2026-11-03': [],
    // '2026-11-04': [],
    // '2026-11-05': [],
    // '2026-11-06': [],
    '2026-11-07': [],
    '2026-11-08': [],
    '2026-11-09': ['IMG_9740.JPG'],
    '2026-11-10': [],
    '2026-11-11': [],
    '2026-11-12': [],
    '2026-11-13': [],
    '2026-11-14': [],
    '2026-11-15': [],
    // '2026-11-16': [],
    '2026-11-17': [],
    // '2026-11-18': [],
    // '2026-11-19': [],
    // '2026-11-20': [],
    // '2026-11-21': [],
    // '2026-11-22': [],
    // '2026-11-23': [],
    // '2026-11-24': [],
    // '2026-11-25': [],
    // '2026-11-26': [],
    // '2026-11-27': [],
    // '2026-11-28': [],
    // '2026-11-29': [],
    // '2026-11-30': [],
};
const dates = Object.keys(sketches);

const year = 2026;
const month = 11;   // 11 月

const calendar = document.getElementById('calendar');
const viewer = document.getElementById('viewer');
const big = document.getElementById('big');
const note = document.getElementById('note');
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
  showNote(date);
}
// iframe 的高度跟着 sketch 页面的内容走
// 页面里只有画布 → 还是正方形；画布下面加了滑块之类的 → 自动变长
let observer = null;
viewer.addEventListener('load', () => {
  if (observer) observer.disconnect();
  const doc = viewer.contentDocument;
  const body = doc.body;
  // 画布默认是"行内元素"，下面会多出几像素空隙；改成 block 去掉它
  const style = doc.createElement('style');
  style.textContent = 'canvas { display: block; }';
  doc.head.appendChild(style);
  const fit = () => {
    viewer.style.height = body.scrollHeight + 'px';
  };
  observer = new ResizeObserver(fit);   // 内容高度一变，就重新量一次
  observer.observe(body);
  fit();
});

// 在日历下面显示这一天的文字
// 文字写在 sketches/日期/note.html 里；没有这个文件就什么都不显示
let currentDate = null;
function showNote(date) {
  currentDate = date;
  note.innerHTML = '';
  fetch(`sketches/${date}/note.html`)
    .then(res => (res.ok ? res.text() : ''))
    .then(html => {
      if (date === currentDate) note.innerHTML = html;   // 防止点太快，显示成上一天的文字
    })
    .catch(() => {});
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