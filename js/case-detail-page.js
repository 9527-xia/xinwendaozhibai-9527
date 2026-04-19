var currentCase = null;
var currentImageIndex = 0;

// 获取URL参数
function getUrlParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 初始化页面
function init() {
  var caseId = parseInt(getUrlParam('id')) || 1;
  currentCase = casesData.find(function(c) { return c.id === caseId; });

  if (!currentCase) {
    window.location.href = 'index.html';
    return;
  }

  renderCaseDetail();
  initImageSlider();
  setPrevNextLinks();
}

// 渲染案例详情
function renderCaseDetail() {
  document.title = currentCase.title + ' - ' + currentCase.subtitle + ' - 闻道知白';
  document.getElementById('breadcrumb-title').textContent = currentCase.title;
  document.getElementById('case-title').textContent = currentCase.title;
  document.getElementById('case-subtitle').textContent = currentCase.subtitle;

  document.getElementById('case-tags').innerHTML =
    '<span class="case-tag">' + currentCase.categoryName + '</span>' +
    '<span class="case-tag">' + currentCase.date + '</span>' +
    '<span class="case-tag">' + currentCase.location + '</span>';

  renderImageSlider();
  document.getElementById('case-background').textContent = currentCase.background;

  document.getElementById('solutions-grid').innerHTML = currentCase.solutions.map(function(sol) {
    return '<div class="solution-item"><h4>' + sol.name + '</h4><p>' + sol.desc + '</p></div>';
  }).join('');

  document.getElementById('info-list').innerHTML =
    '<li><span class="label">客户名称</span><span class="value">' + currentCase.title + '</span></li>' +
    '<li><span class="label">项目地点</span><span class="value">' + currentCase.location + '</span></li>' +
    '<li><span class="label">项目时间</span><span class="value">' + currentCase.date + '</span></li>' +
    '<li><span class="label">所属行业</span><span class="value">' + currentCase.categoryName + '</span></li>';

  renderRelatedSolutions();
}

function renderImageSlider() {
  document.getElementById('slider-image').src = currentCase.images[0];
  document.getElementById('slider-dots').innerHTML = currentCase.images.map(function(_, i) {
    return '<div class="slider-dot ' + (i === 0 ? 'active' : '') + '" data-index="' + i + '"></div>';
  }).join('');
}

function initImageSlider() {
  var dotsContainer = document.getElementById('slider-dots');
  var slider = document.getElementById('image-slider');

  dotsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('slider-dot')) {
      switchImage(parseInt(e.target.dataset.index));
    }
  });

  slider.querySelector('.slider-main').addEventListener('click', function() {
    switchImage((currentImageIndex + 1) % currentCase.images.length);
  });
}

function switchImage(index) {
  currentImageIndex = index;
  document.getElementById('slider-image').src = currentCase.images[index];
  document.querySelectorAll('.slider-dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === index);
  });
}

function renderRelatedSolutions() {
  var container = document.getElementById('related-list');
  var solutionNames = {
    'nurse-call': { name: '医护对讲系统', url: '../solutions/smart/nurse-intercom.html' },
    'smart-ward': { name: '智慧病房系统', url: '../solutions/info/smart-ward.html' },
    'or-call': { name: '手术室呼叫系统', url: '../solutions/smart/or-call.html' },
    'laminar-flow': { name: '层流净化系统', url: '../solutions/purify/laminar-flow.html' },
    'air-shower': { name: '风淋室', url: '../solutions/purify/access.html' },
    'monitoring': { name: '环境监测系统', url: '../solutions/purify/monitoring.html' },
    'icu-visit': { name: 'ICU探视系统', url: '../solutions/smart/icu-visit.html' },
    'operation-teaching': { name: '手术示教系统', url: '../solutions/smart/operation-teaching.html' },
    'digital-or': { name: '数字化手术室', url: '../solutions/smart/digital-or.html' },
    'telemedicine': { name: '远程医疗系统', url: '../solutions/info/telemedicine.html' },
    'remote-consultation': { name: '远程会诊系统', url: '../solutions/smart/remote-consultation.html' },
    'pass-box': { name: '传递窗', url: '../solutions/purify/access.html' },
    'or-control': { name: '手术室集中控制系统', url: '../solutions/smart/or-control.html' },
    'iot-monitoring': { name: '物联网监测系统', url: '../solutions/purify/monitoring.html' },
    'icu-info': { name: 'ICU信息管理系统', url: '../solutions/info/icu-info.html' },
    'mobile-visit': { name: '移动探视对讲系统', url: '../solutions/smart/mobile-visit.html' }
  };

  container.innerHTML = currentCase.relatedProducts.map(function(key) {
    var sol = solutionNames[key] || { name: key, url: '#' };
    return '<li><a href="' + sol.url + '">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<path d="M5 12h14M12 5l7 7-7 7"/>' +
      '</svg>' + sol.name + '</a></li>';
  }).join('');
}

function setPrevNextLinks() {
  var casesOnly = casesData.filter(function(c) { return typeof c.id === 'number'; });
  var idx = casesOnly.findIndex(function(c) { return c.id === currentCase.id; });
  var prevCase = casesOnly[idx - 1];
  var nextCase = casesOnly[idx + 1];

  var prevLink = document.getElementById('prev-case');
  var nextLink = document.getElementById('next-case');

  if (prevCase && prevLink) {
    prevLink.href = 'detail.html?id=' + prevCase.id;
    prevLink.classList.remove('disabled');
    prevLink.style.pointerEvents = 'auto';
    prevLink.onclick = function(e) {
      e.preventDefault();
      window.location.href = 'detail.html?id=' + prevCase.id;
    };
  }

  if (nextCase && nextLink) {
    nextLink.href = 'detail.html?id=' + nextCase.id;
    nextLink.classList.remove('disabled');
    nextLink.style.pointerEvents = 'auto';
    nextLink.onclick = function(e) {
      e.preventDefault();
      window.location.href = 'detail.html?id=' + nextCase.id;
    };
  }
}

// 轮播图
var bannerSlideIndex = 0;
var bannerSlideInterval;

function initBannerSlider() {
  var slides = document.querySelectorAll('.case-header .banner-slide');
  var dots = document.querySelectorAll('.case-header .banner-dot');
  if (slides.length === 0) return;

  function goToSlide(index) {
    slides.forEach(function(s) { s.classList.remove('active'); });
    dots.forEach(function(d) { d.classList.remove('active'); });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    bannerSlideIndex = index;
  }

  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() { goToSlide(index); });
  });

  function startAutoPlay() {
    bannerSlideInterval = setInterval(function() {
      goToSlide((bannerSlideIndex + 1) % slides.length);
    }, 5000);
  }

  var banner = document.querySelector('.case-header');
  if (banner) {
    banner.addEventListener('mouseenter', function() { clearInterval(bannerSlideInterval); });
    banner.addEventListener('mouseleave', startAutoPlay);
  }
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', function() {
  init();
  initBannerSlider();
});
