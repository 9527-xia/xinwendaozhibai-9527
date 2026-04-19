  // 产品导航功能
  let allProductIds = [];
  let currentIndex = -1;

  // 初始化产品导航
  function initProductNav(currentId) {
    // 获取所有产品ID列表（按照产品中心页面的顺序）
    allProductIds = Object.keys(productsData);
    currentIndex = allProductIds.indexOf(currentId);

    const prevBtn = document.getElementById('nav-prev');
    const nextBtn = document.getElementById('nav-next');
    const prevName = document.getElementById('prev-name');
    const nextName = document.getElementById('next-name');

    // 上一个产品
    if (currentIndex > 0) {
      const prevProduct = productsData[allProductIds[currentIndex - 1]];
      prevBtn.href = `detail.html?id=${prevProduct.id}`;
      prevName.textContent = prevProduct.name;
      prevBtn.style.opacity = '1';
      prevBtn.style.pointerEvents = 'auto';
    } else {
      prevBtn.style.opacity = '0.3';
      prevBtn.style.pointerEvents = 'none';
      prevName.textContent = '已经是第一个';
    }

    // 下一个产品
    if (currentIndex < allProductIds.length - 1) {
      const nextProduct = productsData[allProductIds[currentIndex + 1]];
      nextBtn.href = `detail.html?id=${nextProduct.id}`;
      nextName.textContent = nextProduct.name;
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'auto';
    } else {
      nextBtn.style.opacity = '0.3';
      nextBtn.style.pointerEvents = 'none';
      nextName.textContent = '已经是最后一个';
    }
  }

  // 键盘导航
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevBtn = document.getElementById('nav-prev');
      if (prevBtn.style.opacity !== '0.3') {
        prevBtn.click();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextBtn = document.getElementById('nav-next');
      if (nextBtn.style.opacity !== '0.3') {
        nextBtn.click();
      }
    }
  });

  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // 分类到Banner图片的映射
  const categoryBannerMap = {
    'teach': '../images/category-banners/手术示教.jpg',
    'digital': '../images/category-banners/数字化手术室.jpg',
    'control': '../images/category-banners/手术室集中控制.jpg',
    'icu': '../images/solutions-detail/ICU探视对讲系统.jpg',
    'nurse': '../images/category-banners/医护对讲.jpg',
    'behavior': '../images/category-banners/手术行为管理系统.jpg',
    'remote': '../images/solutions-detail/远程会诊系统.jpg',
    'tencent': '../images/category-banners/腾讯云服务.jpg',
    'cleaning': '../images/category-banners/手术行为管理系统.jpg',
    'bulletin': '../images/category-banners/数字化手术室.jpg'
  };

  // 渲染产品详情
  function renderProductDetail(product) {
    const container = document.querySelector('#product-detail .container');

    // 设置分类Banner图片
    const bannerImg = document.getElementById('category-banner-img');
    const bannerContainer = document.getElementById('category-banner');
    if (bannerImg && categoryBannerMap[product.category]) {
      bannerImg.src = categoryBannerMap[product.category];
      bannerImg.alt = product.categoryName;
      // 设置背景图片（用于模糊填充）
      if (bannerContainer) {
        bannerContainer.style.backgroundImage = `url(${categoryBannerMap[product.category]})`;
      }
    }

    // 更新面包屑
    const categoryLink = document.getElementById('breadcrumb-category-link');
    categoryLink.textContent = product.categoryName;
    categoryLink.href = `index.html?cat=${product.category}`;
    document.getElementById('breadcrumb-name').textContent = product.name;
    document.title = `${product.name} - 闻道知白`;

    // 生成功能特点列表HTML（无图标，含描述）
    const featuresHTML = product.features.map(f => `
      <li><strong>${f.title}：</strong>${f.desc}</li>
    `).join('');

    // 生成规格表HTML
    const specsHTML = product.specs.map(s => `
      <tr>
        <td>${s.label}</td>
        <td>${s.value}</td>
      </tr>
    `).join('');

    // 根据场景名称获取对应图片
    function getScenarioImage(scenario) {
      const scenarioImages = {
        '手术室': '../images/scenarios/应用场景手术室图片.jpg',
        '手术室墙面': '../images/scenarios/应用场景手术室墙面.jpg',
        '洁净区': '../images/scenarios/应用场景手术室图片.jpg',
        '机房': '../images/scenarios/应用场景手术室机房.jpg',
        '手术室机房': '../images/scenarios/应用场景手术室机房.jpg',
        '手术室设备间': '../images/scenarios/应用场景手术室设备间.jpg',
        '示教中心': '../images/scenarios/应用场景示教室.jpg',
        '示教室': '../images/scenarios/应用场景示教室.jpg',
        '护士站': '../images/scenarios/应用场景护士站图片.jpg',
        'ICU病房': '../images/scenarios/应用场景ICU病床旁.jpg',
        'ICU病床旁': '../images/scenarios/应用场景ICU病床旁.jpg',
        '病房区': '../images/scenarios/应用场景病房门口.jpg',
        '病房床头': '../images/scenarios/应用场景ICU病床旁.jpg',
        '病房门口': '../images/scenarios/应用场景病房门口.jpg',
        '会诊室': '../images/scenarios/应用场景会诊室图片.png',
        '会诊中心': '../images/scenarios/应用场景会诊室图片.png',
        '手术部更衣室': '../images/scenarios/应用场景手术室更衣室.jpg',
        '手术部更衣区': '../images/scenarios/应用场景手术室更衣室.jpg',
        '手术室走廊': '../images/scenarios/应用场景手术室走廊图片.png',
        '手术室门口': '../images/scenarios/应用场景手术室走廊图片.png',
        '手术部门口': '../images/scenarios/应用场景手术室走廊图片.png',
        '家属等候区': '../images/scenarios/应用场景家属等候区.jpg',
        '手术部大厅': '../images/scenarios/应用场景手术室走廊图片.png',
        '探视室': '../images/scenarios/应用场景探视室.jpg',
        '移动探视': '../images/scenarios/应用场景移动探视.jpg',
        '医院大厅': '../images/scenarios/应用场景医院大厅.png',
        '门诊导诊': '../images/scenarios/应用场景门诊导诊.jpg',
        '客服中心': '../images/scenarios/应用场景客服中心.jpg',
        '医院信息科': '../images/scenarios/应用场景医院信息科.png',
        '远程办公': '../images/scenarios/应用场景远程办公.jpg'
      };
      return scenarioImages[scenario] || '../images/scenarios/应用场景手术室图片.jpg';
    }

    // 生成应用场景HTML
    const scenariosHTML = product.scenarios.map(s => `
      <div class="scenario-card">
        <img loading="lazy" src="${getScenarioImage(s)}" alt="${s}">
        <h4>${s}</h4>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="product-main">
        <div class="product-gallery">
          <div class="main-image">
            <img loading="lazy" src="${product.images[0]}" alt="${product.name}" id="main-product-image">
          </div>
          ${product.images.length > 1 ? `
          <div class="thumb-images">
            ${product.images.map((img, i) => `
              <div class="thumb-image ${i === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
                <img loading="lazy" src="${img}" alt="${product.name}">
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>

        <div class="product-info">
          <span class="product-category">${product.mainCategoryName}</span>
          <h1 class="product-title">${product.name}</h1>
          <p class="product-model">型号：${product.model}</p>

          <!-- 产品简介 -->
          <p class="product-summary">${product.summary}</p>

          <!-- 功能特点列表 -->
          <ul class="product-features-list">
            ${featuresHTML}
          </ul>

          <!-- 规格参数 -->
          <div class="product-specs">
            <h3 class="specs-title">规格参数</h3>
            <table class="specs-table">
              ${specsHTML}
            </table>
          </div>

          <div class="action-buttons">
            <button class="btn-primary" onclick="contactUs()">咨询报价</button>
          </div>
        </div>
      </div>

      <!-- 应用场景 -->
      <div class="product-scenarios">
        <h3 class="section-title">应用场景</h3>
        <div class="scenario-grid">
          ${scenariosHTML}
        </div>
      </div>
    `;

    // 渲染相关产品
    renderRelatedProducts(product);
  }

  // 渲染相关产品
  function renderRelatedProducts(product) {
    const related = getRelatedProducts(product.id, 4);
    if (related.length === 0) return;

    document.getElementById('related-section').style.display = 'block';
    const grid = document.getElementById('related-grid');

    grid.innerHTML = related.map(p => `
      <a href="detail.html?id=${p.id}" class="related-card">
        <img loading="lazy" src="${p.images[0]}" alt="${p.name}">
        <h4>${p.name}</h4>
      </a>
    `).join('');
  }

  // 切换图片
  function changeImage(src, el) {
    document.getElementById('main-product-image').src = src;
    document.querySelectorAll('.thumb-image').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  // 咨询报价
  function contactUs() {
    window.location.href = '../contact/index.html';
  }

  // 显示产品未找到
  function showNotFound() {
    document.querySelector('.breadcrumb').style.display = 'none';
    document.querySelector('#product-detail .container').innerHTML = `
      <div class="product-not-found">
        <h1>404</h1>
        <p>抱歉，未找到该产品信息</p>
        <a href="index.html" class="btn btn-primary">返回产品中心</a>
      </div>
    `;
  }

  // ==================== Banner图片设置 ====================
  function initBannerSlider(product) {
    const categoryImages = {
      'icu': '../images/solutions-detail/ICU探视对讲系统.jpg',
      'nurse': '../images/products-category/医护对讲.jpg',
      'teach': '../images/products-category/手术示教.jpg',
      'digital': '../images/products-category/数字化手术室.jpg',
      'remote': '../images/solutions-detail/远程会诊系统.jpg',
      'control': '../images/products-category/手术室集中控制系统.jpg',
      'behavior': '../images/products-category/手术行为管理系统.jpg',
      'bulletin': '../images/products-category/手术室集中控制系统.jpg',
      'cleaning': '../images/products-category/手术行为管理系统.jpg',
      'tencent': '../images/products-category/腾讯云服务.jpg'
    };

    const categoryImage = categoryImages[product.category];
    const bannerImg = document.getElementById('category-banner-img');

    if (categoryImage && bannerImg) {
      bannerImg.src = categoryImage;
      bannerImg.alt = product.categoryName || product.name;
    }
  }

  // ==================== 初始化 ====================
  if (productId) {
    const product = getProduct(productId);
    if (product) {
      renderProductDetail(product);
      initProductNav(productId); // 初始化产品导航
      initBannerSlider(product); // 初始化轮播图
    } else {
      showNotFound();
    }
  } else {
    showNotFound();
  }
