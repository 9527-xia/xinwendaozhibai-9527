// 闻道知白网站脚本

document.addEventListener('DOMContentLoaded', function() {

  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // 滚动时导航栏样式变化
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // ==================== 搜索功能 ====================

  // 获取路径前缀
  const getSearchPathPrefix = () => {
    const path = window.location.pathname;
    if (path.includes('/solutions/smart/') ||
        path.includes('/solutions/purify/') ||
        path.includes('/solutions/info/')) {
      return '../../';
    } else if (path.includes('/products/') || path.includes('/solutions/') ||
        path.includes('/cases/') || path.includes('/about/') ||
        path.includes('/contact/')) {
      return '../';
    }
    return '';
  };

  // 处理图片路径
  const fixImagePath = (imagePath, prefix) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    if (imagePath.startsWith('../')) {
      return imagePath.replace(/^\.\.\//, prefix);
    }
    return prefix + imagePath;
  };

  // 搜索数据
  const getSearchData = () => {
    const prefix = getSearchPathPrefix();
    const data = [];

    if (typeof productsData !== 'undefined' && productsData) {
      Object.values(productsData).forEach(product => {
        const rawImage = product.images?.[0] || '';
        data.push({
          type: 'product',
          name: product.name,
          model: product.model || '',
          desc: product.summary || '',
          image: fixImagePath(rawImage, prefix),
          url: `${prefix}products/detail.html?id=${product.id}`
        });
      });
    }

    if (typeof casesData !== 'undefined' && casesData) {
      casesData.forEach(caseItem => {
        const rawImage = caseItem.thumbnail || '';
        data.push({
          type: 'case',
          name: caseItem.title,
          desc: caseItem.subtitle || caseItem.summary?.substring(0, 50) || '',
          image: fixImagePath(rawImage, prefix),
          url: `${prefix}cases/detail.html?id=${caseItem.id}`
        });
      });
    }

    // 从 solutionsData 动态获取解决方案
    if (typeof solutionsData !== 'undefined' && solutionsData) {
      Object.values(solutionsData).forEach(category => {
        if (category.solutions) {
          category.solutions.forEach(sol => {
            data.push({
              type: 'solution',
              name: sol.title,
              desc: sol.desc,
              image: '',
              url: `${prefix}solutions/${sol.image}`
            });
          });
        }
      });
    }

    return data;
  };

  // 高亮关键词
  const highlightKeyword = (text, keyword) => {
    if (!keyword || !text) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<em>$1</em>');
  };

  // 初始化搜索（延迟确保导航栏已加载）
  let searchRetryCount = 0;
  const initSearch = () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchResultsContent = document.getElementById('searchResultsContent');
    const closeSearch = document.getElementById('closeSearch');

    if (!searchInput || !searchResults || !searchResultsContent) {
      searchRetryCount++;
      if (searchRetryCount < 20) {
        setTimeout(initSearch, 100);
      }
      return;
    }

    // 执行搜索
    const performSearch = (keyword) => {
      if (!keyword || keyword.trim().length === 0) {
        searchResultsContent.innerHTML = '<div class="search-empty">请输入关键词搜索</div>';
        return;
      }

      const allData = getSearchData();
      const results = allData.filter(item => {
        const nameMatch = item.name?.toLowerCase().includes(keyword.toLowerCase());
        const modelMatch = item.model?.toLowerCase().includes(keyword.toLowerCase());
        const descMatch = item.desc?.toLowerCase().includes(keyword.toLowerCase());
        return nameMatch || modelMatch || descMatch;
      }).slice(0, 10);

      if (results.length === 0) {
        searchResultsContent.innerHTML = `
          <div class="search-no-result">
            <div class="search-no-result-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <p>未找到"${keyword}"相关结果</p>
          </div>
        `;
        return;
      }

      const typeNames = { 'product': '产品', 'solution': '方案', 'case': '案例' };
      let html = '';
      results.forEach(item => {
        const imageHtml = item.image
          ? `<img src="${item.image}" alt="${item.name}">`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>`;

        html += `
          <a href="${item.url}" class="search-result-item">
            <div class="search-result-icon">${imageHtml}</div>
            <div class="search-result-info">
              <div class="search-result-name">${highlightKeyword(item.name, keyword)}</div>
              <div class="search-result-desc">${highlightKeyword(item.desc || item.model || '', keyword)}</div>
            </div>
            <span class="search-result-tag ${item.type}">${typeNames[item.type]}</span>
          </a>
        `;
      });

      html += `<div class="search-results-footer">找到 ${results.length} 个结果</div>`;
      searchResultsContent.innerHTML = html;
    };

    // 绑定事件
    let searchTimer = null;

    searchInput.addEventListener('focus', () => {
      searchResults.classList.add('active');
      if (searchInput.value.trim()) {
        performSearch(searchInput.value.trim());
      }
    });

    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        performSearch(e.target.value.trim());
      }, 300);
    });

    if (closeSearch) {
      closeSearch.addEventListener('click', () => {
        searchResults.classList.remove('active');
      });
    }

    document.addEventListener('click', (e) => {
      const searchBox = document.getElementById('searchBox');
      if (searchBox && !searchBox.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });
  };

  // 启动搜索初始化
  initSearch();

  // ==================== 结束搜索功能 ====================

  // megamenu 交互已移至 nav-component.js（导航HTML由JS注入后绑定）

  // 下拉菜单交互（移动端点击）
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');

    if (link && dropdown) {
      // 移动端点击展开
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });

  // ==================== 场景展示视频块渲染（懒加载） ====================
  var videoEls = document.querySelectorAll('.scene-video[data-src]');
  if (videoEls.length > 0 && 'IntersectionObserver' in window) {
    var videoObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var src = el.dataset.src;
          if (src) {
            el.outerHTML = '<section class="scene-video-section"><div class="scene-video-container"><span class="scene-video-title">场景展示</span><video autoplay muted loop playsinline class="scene-video-player"><source src="' + src + '" type="video/mp4"></video></div></section>';
          }
          videoObserver.unobserve(el);
        }
      });
    }, { rootMargin: '200px' });
    videoEls.forEach(function(el) { videoObserver.observe(el); });
  } else {
    videoEls.forEach(function(el) {
      var src = el.dataset.src;
      if (src) {
        el.outerHTML = '<section class="scene-video-section"><div class="scene-video-container"><span class="scene-video-title">场景展示</span><video autoplay muted loop playsinline class="scene-video-player"><source src="' + src + '" type="video/mp4"></video></div></section>';
      }
    });
  }
  // ==================== 结束场景展示视频块 ====================

  // ==================== 面包屑导航渲染 ====================
  document.querySelectorAll('.breadcrumb[data-title]').forEach(el => {
    const path = window.location.pathname;
    const cats = [
      { key: 'smart', prefix: '/smart/', name: '医院智能化医疗专项' },
      { key: 'purify', prefix: '/purify/', name: '医院净化（手术部/ICU）' },
      { key: 'info', prefix: '/info/', name: '医院信息化' }
    ];
    const cat = cats.find(c => path.includes(c.prefix));
    if (!cat) return;
    el.innerHTML = '<div class="breadcrumb-list">' +
      '<a href="../../index.html">首页</a><span>/</span>' +
      '<a href="../index.html">解决方案</a><span>/</span>' +
      '<a href="../index.html?cat=' + cat.key + '">' + cat.name + '</a><span>/</span>' +
      '<span>' + el.dataset.title + '</span>' +
      '</div>';
  });
  // ==================== 结束面包屑导航 ====================

  // 页面加载动画
  const animateElements = document.querySelectorAll('.product-card');

  if (animateElements.length > 0) {
    const animateOnScroll = () => {
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) {
          el.classList.add('animate-fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初始检查
  }

});
