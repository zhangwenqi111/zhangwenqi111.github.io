---
layout: single
author_profile: true
permalink: /data/
title: "数据平台"
classes: wide
---

本平台用于共享课题组内部实验数据与计算数据集，仅限课题组成员及合作研究者访问。
如需访问权限，请联系课题组管理员获取密码。

---

<div id="password-section" style="max-width: 500px; margin: 40px auto; text-align: center; padding: 30px; border: 1px solid #eee; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <h3 style="color: #005197; margin-top: 0;">请输入访问密码</h3>
  <p style="color: #666; margin-bottom: 20px;">输入正确密码后即可查看全部数据集</p>
  <input 
    type="password" 
    id="password-input" 
    placeholder="请输入密码"
    style="width: 100%; padding: 10px 15px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; margin-bottom: 15px; box-sizing: border-box;"
  >
  <button 
    id="submit-btn"
    style="width: 100%; padding: 10px; background-color: #005197; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;"
  >
    确认访问
  </button>
  <p id="error-tip" style="color: #d93025; margin-top: 15px; display: none;">密码错误，请重试</p>
</div>

<div id="data-content" style="display: none;">

  ## 🧬 宏基因组测序数据集

  <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="color: #005197; margin-top: 0;">好氧颗粒污泥微生物群落宏基因组数据</h3>
    <p><strong>测序平台：</strong>Illumina NovaSeq 6000</p>
    <p><strong>样本数量：</strong>24 个</p>
    <p><strong>数据量：</strong>约 120 G</p>
    <p><strong>发布时间：</strong>2026年3月</p>
    <p><strong>说明：</strong>包含不同运行阶段好氧颗粒污泥的细菌、古菌及真菌群落测序数据，对应论文已发表于 Water Research。</p>
    <p>
      <a href="/assets/data/ags_metagenome.zip" style="color: #005197;">📥 下载完整数据集</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/assets/data/ags_analysis_report.pdf" style="color: #005197;">📄 下载分析报告</a>
    </p>
  </div>

  <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="color: #005197; margin-top: 0;">微藻-细菌共生系统宏基因组数据</h3>
    <p><strong>测序平台：</strong>Illumina NovaSeq 6000</p>
    <p><strong>样本数量：</strong>18 个</p>
    <p><strong>数据量：</strong>约 90 G</p>
    <p><strong>发布时间：</strong>2025年10月</p>
    <p><strong>说明：</strong>抗生素胁迫下微藻-细菌颗粒污泥的群落演替数据，对应论文发表于 Journal of Hazardous Materials。</p>
    <p>
      <a href="/assets/data/microalgae_metagenome.zip" style="color: #005197;">📥 下载完整数据集</a>
    </p>
  </div>

  ## ⚗️ 反应器运行实验数据

  <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="color: #005197; margin-top: 0;">连续流好氧颗粒污泥反应器长期运行数据</h3>
    <p><strong>运行周期：</strong>240 天</p>
    <p><strong>监测指标：</strong>COD、氨氮、总氮、总磷、MLSS、SVI、颗粒粒径分布</p>
    <p><strong>数据格式：</strong>Excel 原始数据表 + Origin 作图源文件</p>
    <p>
      <a href="/assets/data/ags_reactor_data.xlsx" style="color: #005197;">📥 下载原始数据</a>
    </p>
  </div>

  ## 💻 CFD 模拟数据集

  <div style="border: 1px solid #eee; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h3 style="color: #005197; margin-top: 0;">气升式循环池流场模拟数据集</h3>
    <p><strong>软件：</strong>ANSYS Fluent 2021 R2</p>
    <p><strong>包含内容：</strong>网格文件、case 文件、data 文件、后处理结果图</p>
    <p><strong>说明：</strong>对应硕士论文《基于FLUENT对气升式循环池的数值模拟及试验研究》</p>
    <p>
      <a href="/assets/data/airlift_cfd_data.zip" style="color: #005197;">📥 下载模拟文件</a>
    </p>
  </div>

  <div style="background-color: #f0f7ff; border-left: 4px solid #005197; padding: 15px 20px; border-radius: 4px; margin: 30px 0;">
    <strong>数据使用说明：</strong><br>
    1. 所有数据仅限课题组成员内部使用，请勿对外传播或用于商业用途<br>
    2. 若使用数据发表论文，请注明数据来源并添加对应参考文献<br>
    3. 如有数据相关问题，请联系对应负责同学或李老师
  </div>

</div>

{% raw %}
<script>
;(function() {
  // ===== 配置：修改这里的密码 =====
  var PASSWORD = "liaj2026";
  var STORAGE_KEY = "data_platform_access";
  var EXPIRE_KEY = "data_platform_expire";
  var EXPIRE_HOURS = 24;

  // 获取所有需要的 DOM 元素
  var input = document.getElementById("password-input");
  var btn = document.getElementById("submit-btn");
  var error = document.getElementById("error-tip");
  var section = document.getElementById("password-section");
  var content = document.getElementById("data-content");

  // 如果缺少任何一个元素，直接退出并在控制台报错
  if (!input || !btn || !error || !section || !content) {
    console.error("[数据平台] 初始化失败：缺少必要的页面元素，请检查 HTML ID 是否一致。");
    return;
  }

  console.log("[数据平台] 脚本已加载，密码保护已就绪。");

  // 核心函数：验证密码
  function checkPassword() {
    if (input.value === PASSWORD) {
      // 隐藏密码框，显示数据内容
      section.style.display = "none";
      content.style.display = "block";
      error.style.display = "none";

      // 记住登录状态（localStorage 可能不可用）
      try {
        localStorage.setItem(STORAGE_KEY, "true");
        var expireTime = Date.now() + EXPIRE_HOURS * 60 * 60 * 1000;
        localStorage.setItem(EXPIRE_KEY, expireTime.toString());
        console.log("[数据平台] 登录成功，状态已保存" + EXPIRE_HOURS + "小时。");
      } catch (e) {
        console.warn("[数据平台] localStorage 不可用，本次登录状态不会保存。");
      }
    } else {
      // 显示错误提示
      error.style.display = "block";
    }
  }

  // 绑定点击事件
  btn.addEventListener("click", checkPassword);

  // 绑定回车事件
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

  // 自动登录：检查是否在有效期内
  try {
    var hasAccess = localStorage.getItem(STORAGE_KEY);
    var expireTime = parseInt(localStorage.getItem(EXPIRE_KEY), 10);
    if (hasAccess === "true" && Date.now() < expireTime) {
      section.style.display = "none";
      content.style.display = "block";
      console.log("[数据平台] 检测到有效登录状态，自动展示数据。");
    }
  } catch (e) {
    // 忽略
  }

  // 按钮悬停效果
  btn.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#003d73";
  });
  btn.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#005197";
  });
})();
</script>
{% endraw %}
