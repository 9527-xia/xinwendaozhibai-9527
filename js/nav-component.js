/**
 * 导航栏组件 - 与首页导航一致
 * 使用方法：在页面中添加 <header class="header" id="main-header"></header>
 * 然后引入此脚本即可
 */
(function() {
  // 检测当前页面层级
  function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/solutions/smart/') ||
        path.includes('/solutions/purify/') ||
        path.includes('/solutions/info/')) {
      return '../../';
    } else if (path.includes('/solutions/') ||
               path.includes('/products/') ||
               path.includes('/cases/') ||
               path.includes('/about/') ||
               path.includes('/contact/')) {
      return '../';
    }
    return '';
  }

  const prefix = getPathPrefix();

  // 导航HTML模板 - 与首页一致
  const navHTML = `
<!-- 顶部导航 - 单行布局 -->
<div class="header-nav">
  <div class="container">
    <nav class="nav">
      <!-- LOGO -->
      <a href="${prefix}index.html" class="logo">
        <div class="logo-text">
          <span class="logo-name">闻道知白</span>
          <span class="logo-slogan">医院智能化解决方案专家</span>
        </div>
      </a>

      <!-- 导航组1：产品 + 解决方案 -->
      <div class="nav-group nav-group-main">
        <!-- 产品 - 大面板式下拉（横向标签+卡片滚动） -->
        <div class="nav-item">
        <a href="${prefix}products/index.html" class="nav-link">产品中心<svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="megamenu megamenu-tabs-style">
          <!-- 顶部分类卡片 - 5大类别（大图+文字） -->
          <div class="megamenu-category-cards">
            <div class="category-card active" data-target="cat-teach">
              <div class="category-card-image"><img src="${prefix}images/solutions-detail/手术示教系统.jpg" alt="手术示教"></div>
              <div class="category-card-name">手术示教</div>
            </div>
            <div class="category-card" data-target="cat-digital">
              <div class="category-card-image"><img src="${prefix}images/solutions-detail/数字化手术系统.jpg" alt="数字手术"></div>
              <div class="category-card-name">数字手术</div>
            </div>
            <div class="category-card" data-target="cat-comm">
              <div class="category-card-image"><img src="${prefix}images/solutions-detail/ICU探视对讲系统.jpg" alt="智慧护理"></div>
              <div class="category-card-name">智慧护理</div>
            </div>
            <div class="category-card" data-target="cat-behavior">
              <div class="category-card-image"><img src="${prefix}images/solutions-detail/手术行为管理系统.jpg" alt="智能更衣"></div>
              <div class="category-card-name">智能更衣</div>
            </div>
            <div class="category-card" data-target="cat-tencent">
              <div class="category-card-image"><img src="${prefix}images/solutions-detail/腾讯云服务.jpg" alt="腾讯云"></div>
              <div class="category-card-name">腾讯云</div>
            </div>
          </div>
          <!-- 滚动产品卡片区 -->
          <div class="megamenu-scroll-container">
            <button class="megamenu-scroll-btn prev" aria-label="上一个">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="megamenu-scroll-wrapper">
              <!-- 手术示教 -->
              <div class="megamenu-panel active" id="cat-teach">
                <div style="display: flex; gap: 16px;">
                  <a href="${prefix}products/detail.html?id=teach-cart" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/手术示教移动推车.jpg" alt="手术示教移动推车" loading="lazy"></div>
                    <div class="megamenu-card-name">手术示教移动推车</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=teach-camera-4k" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/手术示教4K医用术野摄像机.jpg" alt="4K医用术野摄像机" loading="lazy"></div>
                    <div class="megamenu-card-name">4K医用术野摄像机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=teach-main-screen" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/示教主控屏.jpg" alt="示教主控屏" loading="lazy"></div>
                    <div class="megamenu-card-name">示教主控屏</div>
                  </a>
                </div>
              </div>
              <!-- 数字手术 -->
              <div class="megamenu-panel" id="cat-digital">
                <div style="display: flex; gap: 16px;">
                  <a href="${prefix}products/detail.html?id=digital-host" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/数字化手术室主机.jpg" alt="数字化手术室主机" loading="lazy"></div>
                    <div class="megamenu-card-name">数字化手术室主机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=digital-terminal" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/双屏主控终端.jpg" alt="双屏主控终端" loading="lazy"></div>
                    <div class="megamenu-card-name">双屏主控终端</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=control-panel" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/手术室集中控制系统-六联板.jpg" alt="集控系统六联板" loading="lazy"></div>
                    <div class="megamenu-card-name">集控系统六联板</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=control-ac" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/空调控制屏.jpg" alt="空调控制屏" loading="lazy"></div>
                    <div class="megamenu-card-name">空调控制屏</div>
                  </a>
                </div>
              </div>
              <!-- 智慧护理 -->
              <div class="megamenu-panel" id="cat-comm">
                <div style="display: flex; gap: 16px;">
                  <a href="${prefix}products/detail.html?id=icu-nurse-station-15" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/医护对讲护士站主机15.6寸.jpg" alt="ICU护士站主机15.6寸" loading="lazy"></div>
                    <div class="megamenu-card-name">ICU护士站主机15.6寸</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=icu-nurse-station" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/ICU护士站主机.jpg" alt="ICU护士站主机" loading="lazy"></div>
                    <div class="megamenu-card-name">ICU护士站主机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=icu-bed-terminal" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/ICU病床分机.jpg" alt="ICU病床分机" loading="lazy"></div>
                    <div class="megamenu-card-name">ICU病床分机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=icu-visit-terminal" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/ICU探视分机.jpg" alt="ICU探视分机" loading="lazy"></div>
                    <div class="megamenu-card-name">ICU探视分机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=icu-visit-cart" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/移动探视推车.jpg" alt="移动探视推车" loading="lazy"></div>
                    <div class="megamenu-card-name">移动探视推车</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=nurse-station-host" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/医护对讲护士站主机.jpg" alt="医护对讲护士站主机" loading="lazy"></div>
                    <div class="megamenu-card-name">医护对讲护士站主机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=nurse-door-terminal" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/医护门口机分机.jpeg" alt="医护门口机分机" loading="lazy"></div>
                    <div class="megamenu-card-name">医护门口机分机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=remote-panorama-camera" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/远程会诊全景摄像机.jpg" alt="远程会诊全景摄像机" loading="lazy"></div>
                    <div class="megamenu-card-name">远程会诊全景摄像机</div>
                  </a>
                </div>
              </div>
              <!-- 智能更衣 -->
              <div class="megamenu-panel" id="cat-behavior">
                <div style="display: flex; gap: 16px;">
                  <a href="${prefix}products/detail.html?id=behavior-clothes" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/智能发衣机.jpg" alt="智能发衣机" loading="lazy"></div>
                    <div class="megamenu-card-name">智能发衣机</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=behavior-locker" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/智能更衣柜.jpg" alt="智能更衣柜" loading="lazy"></div>
                    <div class="megamenu-card-name">智能更衣柜</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=behavior-shoe-locker" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/智能更鞋柜.jpg" alt="智能更鞋柜" loading="lazy"></div>
                    <div class="megamenu-card-name">智能更鞋柜</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=cleaning-bracelet" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/智能清洁手环.jpg" alt="智能清洁手环" loading="lazy"></div>
                    <div class="megamenu-card-name">智能清洁手环</div>
                  </a>
                </div>
              </div>
              <!-- 腾讯云 -->
              <div class="megamenu-panel" id="cat-tencent">
                <div style="display: flex; gap: 16px;">
                  <a href="${prefix}products/detail.html?id=tencent-avatar" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/腾讯云智能数智人.jpg" alt="腾讯云智能数智人" loading="lazy"></div>
                    <div class="megamenu-card-name">腾讯云智能数智人</div>
                  </a>
                  <a href="${prefix}products/detail.html?id=tencent-ioa" class="megamenu-card">
                    <div class="megamenu-card-image"><img src="${prefix}images/products/腾讯 iOA 零信任管理平台.jpg" alt="腾讯iOA零信任平台" loading="lazy"></div>
                    <div class="megamenu-card-name">腾讯iOA零信任平台</div>
                  </a>
                </div>
              </div>
            </div>
            <button class="megamenu-scroll-btn next" aria-label="下一个">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <span class="nav-group-divider"></span>

      <!-- 解决方案 - 大面板式下拉 -->
      <div class="nav-item">
        <a href="${prefix}solutions/index.html" class="nav-link">解决方案<svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="megamenu">
          <div class="megamenu-sidebar">
            <a href="${prefix}solutions/index.html?cat=smart" class="megamenu-sidebar-item active" data-target="sol-smart">医院智能化医疗专项</a>
            <a href="${prefix}solutions/index.html?cat=purify" class="megamenu-sidebar-item" data-target="sol-purify">医院净化（手术部/ICU）</a>
            <a href="${prefix}solutions/index.html?cat=info" class="megamenu-sidebar-item" data-target="sol-info">医院信息化</a>
          </div>
          <div class="megamenu-content">
            <div class="megamenu-content-panel active" id="sol-smart">
              <div class="megamenu-product-list">
                <a href="${prefix}solutions/smart/or-call.html" class="megamenu-product-item">手术室对讲系统</a>
                <a href="${prefix}solutions/smart/mobile-teaching.html" class="megamenu-product-item">移动示教系统</a>
                <a href="${prefix}solutions/smart/or-control.html" class="megamenu-product-item">信息发布系统</a>
                <a href="${prefix}solutions/smart/behavior.html" class="megamenu-product-item">排队叫号系统</a>
                <a href="${prefix}solutions/smart/remote-consultation.html" class="megamenu-product-item">远程会诊系统</a>
                <a href="${prefix}solutions/smart/icu-visit.html" class="megamenu-product-item">ICU探视对讲系统</a>
                <a href="${prefix}solutions/smart/mobile-visit.html" class="megamenu-product-item">移动探视对讲系统</a>
                <a href="${prefix}solutions/smart/operation-teaching.html" class="megamenu-product-item">手术示教系统</a>
                <a href="${prefix}solutions/smart/nurse-intercom.html" class="megamenu-product-item">医护对讲系统</a>
              </div>
            </div>
            <div class="megamenu-content-panel" id="sol-purify">
              <div class="megamenu-product-list">
                <a href="${prefix}solutions/purify/behavior.html" class="megamenu-product-item">手术行为管理系统</a>
                <a href="${prefix}solutions/purify/air-purifier.html" class="megamenu-product-item">数字化手术系统</a>
                <a href="${prefix}solutions/purify/monitoring.html" class="megamenu-product-item">手术室集中控制系统</a>
                <a href="${prefix}solutions/purify/ac-unit.html" class="megamenu-product-item">医疗云直播系统</a>
                <a href="${prefix}solutions/purify/collector.html" class="megamenu-product-item">设备管理系统</a>
                <a href="${prefix}solutions/purify/laminar-flow.html" class="megamenu-product-item">手术示教系统</a>
                <a href="${prefix}solutions/purify/dispenser.html" class="megamenu-product-item">移动示教系统</a>
                <a href="${prefix}solutions/purify/access.html" class="megamenu-product-item">ICU探视对讲系统</a>
                <a href="${prefix}solutions/purify/locker.html" class="megamenu-product-item">ICU信息管理系统</a>
                <a href="${prefix}solutions/purify/shoe-cabinet.html" class="megamenu-product-item">手术信息管理平台(手麻)</a>
              </div>
            </div>
            <div class="megamenu-content-panel" id="sol-info">
              <div class="megamenu-product-list">
                <a href="${prefix}solutions/info/icu-info.html" class="megamenu-product-item">ICU信息管理系统</a>
                <a href="${prefix}solutions/info/smart-ward.html" class="megamenu-product-item">手术室信息控制系统</a>
                <a href="${prefix}solutions/info/telemedicine.html" class="megamenu-product-item">手术信息管理平台(手麻)</a>
                <a href="${prefix}solutions/info/tencent-cloud.html" class="megamenu-product-item">远程会诊系统</a>
                <a href="${prefix}solutions/info/emr.html" class="megamenu-product-item">互联网医院系统</a>
                <a href="${prefix}solutions/info/his.html" class="megamenu-product-item">医院体检报告解读系统</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航组2：成功案例 + 联系我们 -->
      <div class="nav-group nav-group-aux-group">
        <!-- 成功案例 -->
        <div class="nav-item">
          <a href="${prefix}cases/index.html" class="nav-link">成功案例<svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
          <div class="dropdown">
            <a href="${prefix}cases/detail.html?id=10" class="dropdown-item">上海生命树医疗美容医院手术示教系统</a>
            <a href="${prefix}cases/detail.html?id=12" class="dropdown-item">武汉八大处整形外科医院手术示教系统</a>
            <a href="${prefix}cases/detail.html?id=17" class="dropdown-item">华中科技大学校医院数字化手术室系统</a>
          </div>
        </div>

        <span class="nav-group-divider"></span>

        <!-- 联系我们 -->
        <div class="nav-item">
          <a href="${prefix}contact/index.html" class="nav-link">联系我们<svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>
          <div class="dropdown">
            <a href="${prefix}about/index.html" class="dropdown-item">关于我们</a>
          </div>
        </div>
      </div>

      <!-- 搜索框 -->
      <div class="nav-search-box" id="searchBox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" id="searchInput" placeholder="搜索产品、方案...">
      </div>
      <!-- 搜索结果弹出层 -->
      <div class="search-results" id="searchResults">
        <div class="search-results-header">
          <span class="search-results-title">搜索结果</span>
          <span class="search-results-close" id="closeSearch">×</span>
        </div>
        <div class="search-results-content" id="searchResultsContent">
          <div class="search-empty">请输入关键词搜索</div>
        </div>
      </div>
    </nav>
  </div>
</div>
<div class="menu-toggle">
  <span></span>
  <span></span>
  <span></span>
</div>
  `;

  // 插入导航到页面
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    if (header) {
      header.innerHTML = navHTML;
      header.classList.add('header');
    }

    // 产品分类卡片切换
    const categoryCards = document.querySelectorAll('.category-card');
    const megamenuPanels = document.querySelectorAll('.megamenu-panel');

    categoryCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const target = this.dataset.target;

        categoryCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');

        megamenuPanels.forEach(p => p.classList.remove('active'));
        const targetPanel = document.getElementById(target);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });

    // 解决方案侧边栏切换
    const sidebarItems = document.querySelectorAll('.megamenu-sidebar-item');
    const contentPanels = document.querySelectorAll('.megamenu-content-panel');

    sidebarItems.forEach(item => {
      item.addEventListener('mouseenter', function(e) {
        if (this.classList.contains('active')) return;

        const target = this.dataset.target;

        sidebarItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        contentPanels.forEach(p => p.classList.remove('active'));
        const targetPanel = document.getElementById(target);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });

    // 滚动按钮功能
    const scrollContainers = document.querySelectorAll('.megamenu-scroll-wrapper');
    scrollContainers.forEach(container => {
      const prevBtn = container.parentElement.querySelector('.megamenu-scroll-btn.prev');
      const nextBtn = container.parentElement.querySelector('.megamenu-scroll-btn.next');

      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          container.scrollBy({ left: -300, behavior: 'smooth' });
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        });
      }
    });
  });
})();
