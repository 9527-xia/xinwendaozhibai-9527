// ===== 翻书Banner =====
var innerSpread = document.getElementById('innerSpread');
var coverLeft = document.getElementById('coverLeft');
var coverRight = document.getElementById('coverRight');

var isBookOpen = false;
var currentIndex = 0;
var autoTimer = null;

// 精选6个案例用于翻书展示（按用户指定顺序）
var featuredIds = [3, 4, 18, 14, 12, 10];
var baseCases = featuredIds.map(function(id) { return casesData.find(function(item) { return item.id === id; }); }).filter(Boolean);

// 初始化内页（显示第一张）
function initSpread() {
  var c = baseCases[0];
  innerSpread.innerHTML = '<img loading="lazy" src="' + c.thumbnail + '" alt="' + c.title + '">' +
    '<div class="spread-info">' +
      '<span class="spread-tag">' + c.categoryName + '</span>' +
      '<h3 class="spread-title">' + c.title + '</h3>' +
      '<p class="spread-desc">' + c.summary + '</p>' +
    '</div>';
}

// 渲染内页
function renderSpread() {
  var c = baseCases[currentIndex];
  innerSpread.innerHTML = '<img loading="lazy" src="' + c.thumbnail + '" alt="' + c.title + '">' +
    '<div class="spread-info">' +
      '<span class="spread-tag">' + c.categoryName + '</span>' +
      '<h3 class="spread-title">' + c.title + '</h3>' +
      '<p class="spread-desc">' + c.summary + '</p>' +
    '</div>';
}

// 下一页
function nextSpread() {
  currentIndex = (currentIndex + 1) % baseCases.length;
  renderSpread();
}

// 自动播放
function startAutoPlay() {
  autoTimer = setInterval(nextSpread, 3000);
}

// 打开书本
function openBook() {
  if (isBookOpen) return;
  isBookOpen = true;
  coverLeft.classList.add('opened');
  coverRight.classList.add('opened');
  startAutoPlay();
}

// 点击事件
coverLeft.onclick = function() { if (!isBookOpen) openBook(); };
coverRight.onclick = function() { if (!isBookOpen) openBook(); };

// 创建火花粒子
function createSparks() {
  var container = document.getElementById('particles');
  var banner = document.querySelector('.book-banner');
  var rect = banner.getBoundingClientRect();
  var cx = rect.left + rect.width * 0.6;
  var cy = rect.top + rect.height * 0.5;

  for (var i = 0; i < 20; i++) {
    var spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = (cx + (Math.random() - 0.5) * 150) + 'px';
    spark.style.top = (cy + (Math.random() - 0.5) * 100) + 'px';
    spark.style.animation = 'sparkFly ' + (1.5 + Math.random()) + 's ease-out forwards';
    spark.style.animationDelay = (Math.random() * 0.3) + 's';
    container.appendChild(spark);
    setTimeout(function() { spark.remove(); }, 2500);
  }
}

setInterval(createSparks, 3000);
createSparks();

// 初始化
initSpread();

// 2秒后自动打开
setTimeout(openBook, 2000);

// ===== 时间线案例 =====
var currentTimelinePage = 1;
var itemsPerPage = 7;

function init() {
  renderTimeline();
}

function renderTimeline() {
  var container = document.getElementById('timeline');
  var startIndex = (currentTimelinePage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var pageCases = casesData.slice(startIndex, endIndex);

  if (pageCases.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#999;padding:40px;">暂无案例</p>';
    return;
  }

  container.innerHTML = pageCases.map(function(item) {
    var feats = '';
    if (item.solutions) {
      feats = item.solutions.slice(0, 3).map(function(s) { return '<span class="tl-feat">' + s + '</span>'; }).join('');
    }
    return '<div class="tl-item" onclick="goToDetail(' + item.id + ')">' +
      '<div class="tl-dot"></div>' +
      '<div class="tl-img"><img loading="lazy" src="' + item.thumbnail + '" alt="' + item.title + '"></div>' +
      '<div class="tl-content">' +
        '<span class="tl-tag">' + item.categoryName + '</span>' +
        '<div class="tl-title">' + item.title + '</div>' +
        '<div class="tl-subtitle">' + item.subtitle + '</div>' +
        '<p class="tl-desc">' + item.summary + '</p>' +
        '<div class="tl-features">' + feats + '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  setTimeout(function() { initTimelineObserver(); }, 50);
  renderPagination();
}

function renderPagination() {
  var container = document.getElementById('pagination');
  var totalPages = Math.ceil(casesData.length / itemsPerPage);
  if (totalPages <= 1) { container.innerHTML = ''; return; }
  var html = '';
  for (var i = 1; i <= totalPages; i++) {
    html += '<button class="' + (i === currentTimelinePage ? 'active' : '') + '" onclick="changePage(' + i + ')">' + i + '</button>';
  }
  container.innerHTML = html;
}

function changePage(page) {
  currentTimelinePage = page;
  renderTimeline();
  document.querySelector('.timeline-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initTimelineObserver() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.tl-item').forEach(function(item) { observer.observe(item); });
}

function goToDetail(id) {
  window.location.href = 'detail.html?id=' + id;
}

document.addEventListener('DOMContentLoaded', init);
