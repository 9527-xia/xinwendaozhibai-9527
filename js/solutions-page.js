// 3D旋转木马
var carouselImages = [
  '../images/solutions-detail/ICU探视对讲系统.jpg',
  '../images/solutions-detail/手术室对讲系统.jpg',
  '../images/solutions-detail/手术室集中控制系统.jpg',
  '../images/solutions-detail/手术行为管理系统.jpg',
  '../images/solutions-detail/移动示教系统.jpg',
  '../images/solutions-detail/远程会诊系统.jpg',
  '../images/solutions-detail/数字化手术系统.jpg',
  '../images/solutions-detail/手术信息管理平台(手麻).jpg'
];
var carouselNames = [
  'ICU探视对讲系统', '手术室对讲系统', '手术室集中控制系统', '手术行为管理系统',
  '移动示教系统', '远程会诊系统', '数字化手术系统', '手术信息管理平台(手麻)'
];

var carousel3d = document.getElementById('carousel3d');
var radius = 450;

carouselImages.forEach(function(img, i) {
  var angle = (i / carouselImages.length) * 360;
  var card = document.createElement('div');
  card.className = 'carousel-card';
  card.style.transform = 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
  card.innerHTML = '<img loading="lazy" src="' + img + '" alt="' + carouselNames[i] + '">' +
    '<div class="card-label"><h3>' + carouselNames[i] + '</h3><span>' + (i + 1) + ' / ' + carouselImages.length + '</span></div>';
  carousel3d.appendChild(card);
});

// 分类切换
var currentCategory = 'smart';
var categoryTabs = document.querySelectorAll('.category-tab');

function getCategoryFromURL() {
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  if (cat && solutionsData[cat]) return cat;
  return 'smart';
}

function setActiveTab(category) {
  categoryTabs.forEach(function(t) { t.classList.toggle('active', t.dataset.category === category); });
}

var urlCategory = getCategoryFromURL();
if (urlCategory !== currentCategory) {
  currentCategory = urlCategory;
  setActiveTab(currentCategory);
}

categoryTabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    currentCategory = tab.dataset.category;
    setActiveTab(currentCategory);
    updateContent(currentCategory);
    history.pushState(null, '', window.location.pathname + '?cat=' + currentCategory);
  });
});

function updateContent(category) {
  var data = solutionsData[category];

  document.getElementById('category-subtitle').textContent = data.subtitle;
  document.getElementById('category-title').textContent = data.name;
  document.getElementById('category-desc').textContent = data.desc;

  var overviewImages = { smart: '../images/solution-overview.jpg', purify: '../images/solution-overview.jpg', info: '../images/solution-overview.jpg' };
  document.getElementById('overview-image').src = overviewImages[category] || '../images/solution-overview.jpg';

  var featureList = document.getElementById('feature-list');
  featureList.innerHTML = data.features.map(function(f) { return '<div class="feature-item">' + f + '</div>'; }).join('');

  document.getElementById('solutions-title').textContent = data.name + '方案';
  document.getElementById('solutions-subtitle').textContent = '全面的' + data.name + '解决方案';

  var solutionImages = {
    smart: {
      'mobile-teaching': '../images/solutions-detail/移动示教系统.jpg',
      'operation-teaching': '../images/solutions-detail/手术示教系统.jpg',
      'behavior': '../images/solutions-detail/排队叫号系统.jpg',
      'nurse-intercom': '../images/solutions-detail/医护对讲系统.jpg',
      'or-call': '../images/solutions-detail/手术室对讲系统.jpg',
      'or-control': '../images/solutions-detail/信息发布系统.jpg',
      'digital-or': '../images/solutions-detail/数字化手术系统.jpg',
      'icu-visit': '../images/solutions-detail/ICU探视对讲系统.jpg',
      'mobile-visit': '../images/solutions-detail/移动探视对讲系统.jpg',
      'remote-consultation': '../images/solutions-detail/远程会诊系统.jpg'
    },
    purify: {
      'dispenser': '../images/solutions-detail/移动示教系统.jpg',
      'laminar-flow': '../images/solutions-detail/手术示教系统.jpg',
      'behavior': '../images/solutions-detail/手术行为管理系统.jpg',
      'access': '../images/solutions-detail/ICU探视对讲系统.jpg',
      'ac-unit': '../images/solutions-detail/医疗云直播系统.jpg',
      'air-purifier': '../images/solutions-detail/数字化手术系统.jpg',
      'collector': '../images/solutions-detail/设备管理系统.jpg',
      'locker': '../images/solutions-detail/ICU信息管理系统.jpg',
      'monitoring': '../images/solutions-detail/手术室集中控制系统.jpg',
      'shoe-cabinet': '../images/solutions-detail/手术信息管理平台(手麻).jpg'
    },
    info: {
      'emr': '../images/solutions-detail/互联网医院系统.jpg',
      'his': '../images/solutions-detail/医院体检报告解读系统.jpg',
      'icu-info': '../images/solutions-detail/ICU信息管理系统.jpg',
      'smart-ward': '../images/solutions-detail/手术室信息控制系统.jpg',
      'telemedicine': '../images/solutions-detail/手术信息管理平台(手麻).jpg',
      'tencent-cloud': '../images/solutions-detail/远程会诊系统.jpg'
    }
  };

  var solutionsGrid = document.getElementById('solutions-grid');
  solutionsGrid.innerHTML = data.solutions.map(function(s) {
    var img = (solutionImages[category] && solutionImages[category][s.id]) || '../images/product-1.jpg';
    var tag = category === 'smart' ? '智能化' : (category === 'purify' ? '净化' : '信息化');
    return '<div class="solution-card" onclick="window.location.href=\'' + s.image + '\'">' +
      '<div class="solution-image"><img loading="lazy" src="' + img + '" alt="' + s.title + '" onerror="this.src=\'../images/product-1.jpg\'">' +
      '<span class="solution-tag">' + tag + '</span></div>' +
      '<div class="solution-info"><h3>' + s.title + '</h3><p>' + s.desc + '</p>' +
      '<span class="solution-link">了解更多</span></div></div>';
  }).join('');

  var productsScroll = document.getElementById('products-scroll');
  productsScroll.innerHTML = data.solutions.map(function(s) {
    var img = (solutionImages[category] && solutionImages[category][s.id]) || '../images/product-1.jpg';
    var desc = s.desc.substring(0, 30) + (s.desc.length > 30 ? '...' : '');
    return '<div class="product-card" onclick="window.location.href=\'' + s.image + '\'" style="cursor: pointer;">' +
      '<div class="product-card-image"><img loading="lazy" src="' + img + '" alt="' + s.title + '" onerror="this.src=\'../images/product-1.jpg\'" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"></div>' +
      '<h4>' + s.title + '</h4><p>' + desc + '</p></div>';
  }).join('');
}

updateContent(currentCategory);
