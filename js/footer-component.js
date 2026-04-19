/**
 * 页脚组件 - 全站统一页脚
 * 使用方法：在页面中添加 <div id="main-footer"></div>
 * 然后引入此脚本即可
 */
(function() {
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

  // 解决方案链接文字：详情页用短名，其他页面用全名
  const isDetailPage = prefix === '../../';
  const solLinks = isDetailPage
    ? `<a href="${prefix}solutions/index.html?cat=smart">智慧手术室</a><a href="${prefix}solutions/index.html?cat=purify">远程医疗平台</a><a href="${prefix}solutions/index.html?cat=info">医院智能化</a>`
    : `<a href="${prefix}solutions/index.html?cat=smart">医院智能化医疗专项</a><a href="${prefix}solutions/index.html?cat=purify">医院净化（手术部/ICU）</a><a href="${prefix}solutions/index.html?cat=info">医院信息化</a>`;

  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-qrcode"><div class="qrcode-image"><img src="${prefix}images/qrcode.png" alt="微信公众号" onerror="this.style.display='none'"></div><p class="qrcode-text">扫码关注</p></div>
      <div class="footer-column"><h4>核心业务</h4><div class="footer-links"><a href="${prefix}products/index.html?cat=teach">移动示教系统</a><a href="${prefix}products/index.html?cat=teach">手术示教系统</a><a href="${prefix}products/index.html?cat=digital">数字化手术系统</a><a href="${prefix}products/index.html?cat=remote">远程会诊系统</a></div></div>
      <div class="footer-column"><h4>解决方案</h4><div class="footer-links">${solLinks}</div></div>
      <div class="footer-brand"><div class="footer-logo"><div class="logo-text"><span class="logo-name">闻道知白</span></div></div><div class="footer-contact"><p><strong>电话：</strong>13823390404</p><p><strong>邮箱：</strong>645748732@qq.com</p><p><strong>地址：</strong>深圳市宝安区广兴源互联网产业基地8栋7楼 729-731</p></div></div>
    </div>
    <div class="footer-bottom"><p>&copy; 2024-2026 深圳市闻道知白科技有限公司 版权所有</p></div>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', function() {
    const footerEl = document.getElementById('main-footer');
    if (footerEl) {
      footerEl.innerHTML = footerHTML;
    }
  });
})();
