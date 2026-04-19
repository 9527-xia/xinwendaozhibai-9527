// Banner轮播
var slides = document.querySelectorAll('.banner-slide');
var dots = document.querySelectorAll('.banner-dot');
var currentSlide = 0;
var slideInterval;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    goToSlide(index);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 2000);
  });
});

slideInterval = setInterval(nextSlide, 2000);

// 分类映射
var categoryMap = {
  'teach': 'cat-teach', 'digital': 'cat-digital', 'control': 'cat-control',
  'icu': 'cat-icu', 'nurse': 'cat-nurse', 'remote': 'cat-remote',
  'behavior': 'cat-behavior', 'tencent': 'cat-tencent'
};

var productCards = document.querySelectorAll('.product-card');
productCards.forEach(function(card) {
  var oldCat = card.dataset.category;
  if (categoryMap[oldCat]) card.dataset.newCategory = categoryMap[oldCat];
});

var categoryTitles = document.querySelectorAll('.category-title');
categoryTitles.forEach(function(title) {
  var oldCat = title.dataset.category;
  if (categoryMap[oldCat]) title.dataset.newCategory = categoryMap[oldCat];
});

// 产品筛选
var filterTabs = document.querySelectorAll('.filter-tab');
filterTabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    filterTabs.forEach(function(t) { t.classList.remove('active'); });
    this.classList.add('active');
    var category = this.dataset.category;

    productCards.forEach(function(card) {
      card.style.display = (category === 'all' || card.dataset.newCategory === category) ? '' : 'none';
    });
    categoryTitles.forEach(function(title) {
      title.style.display = (category === 'all' || title.dataset.newCategory === category) ? '' : 'none';
    });
  });
});

// URL参数筛选
var urlParams = new URLSearchParams(window.location.search);
var cat = urlParams.get('cat');
if (cat) {
  var mappedCat = categoryMap[cat] || cat;
  var targetTab = document.querySelector('.filter-tab[data-category="' + mappedCat + '"]');
  if (targetTab) targetTab.click();
}

// 产品名称到ID的映射
var productNameToId = {
  'ICU护士站主机15.6寸': 'icu-nurse-station-15', 'ICU护士站主机': 'icu-nurse-station',
  'ICU病床分机': 'icu-bed-terminal', 'ICU探视分机': 'icu-visit-terminal', '移动探视推车': 'icu-visit-cart',
  '医护对讲护士站主机': 'nurse-station-host', '医护对讲护士站主机15.6寸': 'nurse-station-host-15',
  '医护病床分机': 'nurse-bed-terminal', '医护门口机分机': 'nurse-door-terminal',
  '医护一览表分机': 'nurse-bulletin-board', '护士工作站': 'nurse-workstation',
  '手术示教移动推车': 'teach-cart', '手术示教4K医用术野摄像机': 'teach-camera-4k',
  '手术示教全景摄像机': 'teach-panorama-camera', '手术示教无线麦克风': 'teach-wireless-mic',
  '手术示教媒体服务器': 'teach-server', '示教编码服务器': 'teach-encode-server',
  '示教解码服务器': 'teach-decode-server', '示教主控屏': 'teach-main-screen', '示教双屏': 'teach-dual-screen',
  '远程会诊全景摄像机': 'remote-panorama-camera', '远程会诊媒体伺服服务器': 'remote-media-server',
  '远程会诊屏': 'remote-screen',
  '数字化手术室主机': 'digital-host', '数字化手术室机柜': 'digital-cabinet',
  '数字化解码服务器': 'digital-decode-server', '4K医用术野摄像机': 'digital-4k-camera',
  '双屏主控终端': 'digital-terminal', '录播服务器': 'digital-record-server',
  '解码服务器': 'digital-decode-server-2', '编码服务器': 'digital-encode-server',
  '集控系统媒体伺服服务器': 'control-media-server', '手术室集中控制系统-六联板': 'control-panel',
  '空调控制屏': 'control-ac', '手术室门口机三联屏': 'control-triple-screen',
  '手术室门口机': 'control-door-terminal',
  '智能发衣机': 'behavior-clothes', '智能发鞋机': 'behavior-shoes',
  '智能更衣柜': 'behavior-locker', '智能更鞋柜': 'behavior-shoe-locker',
  '智能收衣机': 'behavior-collect-clothes', '智能收鞋机': 'behavior-collect-shoes',
  '手持PAD扫码枪': 'behavior-scanner', '门禁门口机': 'behavior-door-terminal',
  '手术信息公告屏': 'bulletin-info-screen',
  '智能清洁手环': 'cleaning-bracelet', '清洁信息智能公告屏': 'cleaning-info-screen',
  '腾讯云智能数智人': 'tencent-avatar', '腾讯 iOA 零信任管理平台': 'tencent-ioa'
};

document.querySelectorAll('.product-card').forEach(function(card) {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function() {
    var productName = this.querySelector('.product-name') ? this.querySelector('.product-name').textContent : '';
    var productId = productNameToId[productName];
    if (productId) {
      window.location.href = 'detail.html?id=' + productId;
    } else {
      var generatedId = productName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
      window.location.href = 'detail.html?id=' + generatedId;
    }
  });
});

// Bento卡片动画
var bentoProducts = [
  { name: 'ICU探视分机', desc: '智能医护对讲系统', category: 'ICU系统', img: 'ICU探视分机.jpg', size: 'large' },
  { name: 'ICU病床分机', desc: '床旁智能交互终端', category: 'ICU系统', img: 'ICU病床分机.jpg', size: 'normal' },
  { name: '医护一览表分机', desc: '医护信息展示', category: '医护对讲', img: '医护一览表分机.jpg', size: 'normal' },
  { name: '医护对讲主机', desc: '护士站核心设备', category: '医护对讲', img: '医护对讲护士站主机.jpg', size: 'large' },
  { name: '手术室门口机', desc: '手术部智能管理', category: '手术室', img: '手术室门口机.jpg', size: 'normal' },
  { name: '4K术野摄像机', desc: '手术示教核心', category: '示教系统', img: '手术示教4K医用术野摄像机.jpg', size: 'normal' },
  { name: '数字化手术室', desc: '一体化智能平台', category: '手术室', img: '数字化手术室主机.jpg', size: 'normal' },
  { name: '智能更衣柜', desc: '洁净区智能管理', category: '净化设备', img: '智能更衣柜.jpg', size: 'normal' },
  { name: '智能发衣机', desc: '自动发放洁净服', category: '净化设备', img: '智能发衣机.jpg', size: 'normal' },
  { name: '远程会诊屏', desc: '跨地域医疗协作', category: '远程医疗', img: '远程会诊屏.jpg', size: 'normal' },
  { name: '示教移动推车', desc: '移动示教平台', category: '示教系统', img: '手术示教移动推车.jpg', size: 'small' },
  { name: '智能更鞋柜', desc: '智能鞋柜管理', category: '净化设备', img: '智能更鞋柜.jpg', size: 'small' },
  { name: '智能清洁手环', desc: '清洁监测手环', category: '净化设备', img: '智能清洁手环.jpg', size: 'small' },
  { name: '双屏主控终端', desc: '双屏智能控制', category: '手术室', img: '双屏主控终端.jpg', size: 'normal' },
  { name: '腾讯智能数智人', desc: 'AI智能助手', category: '智能系统', img: '腾讯云智能数智人.jpg', size: 'normal' }
];

var bentoGrid = document.getElementById('bentoGrid');
if (bentoGrid) {
  function shuffleArray(array) {
    var arr = array.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function createBentoGrid() {
    bentoGrid.innerHTML = '';
    var shuffled = shuffleArray(bentoProducts);
    var largeProducts = shuffled.filter(function(p) { return p.size === 'large'; }).slice(0, 1);
    var normalProducts = shuffled.filter(function(p) { return p.size === 'normal'; }).slice(0, 7);
    var smallProducts = shuffled.filter(function(p) { return p.size === 'small'; }).slice(0, 4);

    var displayed = shuffleArray(largeProducts.concat(normalProducts).concat(smallProducts)).slice(0, 8);
    var largeIndex = displayed.findIndex(function(p) { return p.size === 'large'; });
    if (largeIndex > 0) {
      var tmp = displayed[0]; displayed[0] = displayed[largeIndex]; displayed[largeIndex] = tmp;
    }

    displayed.forEach(function(product, index) {
      var card = document.createElement('div');
      card.className = 'bento-card' + (product.size === 'large' ? ' large' : '') + (product.size === 'small' ? ' small' : '');
      var glowColor = index % 2 === 0 ? 'cyan' : 'blue';
      card.innerHTML = '<div class="card-glow ' + glowColor + '"></div>' +
        '<div class="card-content"><div class="card-category">' + product.category + '</div>' +
        '<div class="card-title">' + product.name + '</div>' +
        '<div class="card-desc">' + product.desc + '</div></div>' +
        '<div class="card-image"><img loading="lazy" src="../images/products/' + product.img + '" alt="' + product.name + '"></div>';
      bentoGrid.appendChild(card);
      setTimeout(function() { card.classList.add('visible'); }, index * 100);
    });
  }

  function shuffleBentoProducts() {
    var cards = bentoGrid.querySelectorAll('.bento-card');
    cards.forEach(function(card, index) {
      setTimeout(function() { card.classList.remove('visible'); }, index * 50);
    });
    setTimeout(createBentoGrid, 500);
  }

  createBentoGrid();
  setInterval(shuffleBentoProducts, 8000);
}
