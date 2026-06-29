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

<!-- 密码输入区域 -->
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
    onclick="checkPassword()"
    style="width: 100%; padding: 10px; background-color: #005197; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; transition: background-color 0.2s;"
    onmouseover="this.style.backgroundColor='#003d73'"
    onmouseout="this.style.backgroundColor='#005197'"
  >
    确认访问
  </button>
  <p id="error-tip" style="color: #d93025; margin-top: 15px; display: none;">密码错误，请重试</p>
</div>

<!-- 数据内容区域（默认隐藏） -->
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

<script>
// 在这里设置你的访问密码
const CORRECT_PASSWORD = "000516";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorTip = document.getElementById("error-tip");
  const passwordSection = document.getElementById("password-section");
  const dataContent = document.getElementById("data-content");

  if (input === CORRECT_PASSWORD) {
    // 密码正确：隐藏输入框，显示内容
    passwordSection.style.display = "none";
    dataContent.style.display = "block";
    // 密码存入本地存储，24小时内无需重复输入
    localStorage.setItem("dataPlatformAccess", "true");
    const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("dataPlatformExpire", expireTime);
  } else {
    // 密码错误：显示提示
    errorTip.style.display = "block";
  }
}

// 页面加载时检查是否已经验证过
window.onload = function() {
  const hasAccess = localStorage.getItem("dataPlatformAccess");
  const expireTime = localStorage.getItem("dataPlatformExpire");
  const now = new Date().getTime();
  
  if (hasAccess === "true" && now < expireTime) {
    document.getElementById("password-section").style.display = "none";
    document.getElementById("data-content").style.display = "block";
  }
}

// 支持回车键提交
document.getElementById("password-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
</script>
