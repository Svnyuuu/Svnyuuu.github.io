// 移除头像及其子元素的动画与旋转（尽量只影响 avatar 相关元素）
document.addEventListener('DOMContentLoaded', () => {
  try {
    const selectors = ['.avatar-img', '[class*="avatar"]'];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // 移除常见动画类
        ['fa-spin','fa-pulse','fa-shake','fa-beat','spin','rotate','shake','animated'].forEach(c => el.classList.remove(c));
        // 对元素及其子元素强制覆盖动画和 transform
        const nodes = [el].concat(Array.from(el.querySelectorAll('*')));
        nodes.forEach(node => {
          try {
            node.style.setProperty('animation', 'none', 'important');
            node.style.setProperty('-webkit-animation', 'none', 'important');
            node.style.setProperty('transform', 'none', 'important');
            node.style.setProperty('-webkit-transform', 'none', 'important');
          } catch (e) {}
        });
      });
    });
  } catch (e) {}
});
