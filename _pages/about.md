---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<style>
.language-switcher {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 1.2rem 0;
}

.language-switcher button {
  border: 1px solid #d0d0d0;
  border-radius: 999px;
  background: #fff;
  color: #333;
  cursor: pointer;
  font-size: 0.78rem;
  line-height: 1;
  padding: 0.42rem 0.72rem;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.language-switcher button:hover,
.language-switcher button.is-active {
  border-color: #555;
  background: #555;
  color: #fff;
}

.lang-content {
  display: none;
}

.lang-content.is-active {
  display: block;
}
</style>

<div class="language-switcher" aria-label="Language switcher">
  <button type="button" data-lang-button="en">English</button>
  <button type="button" data-lang-button="zh">中文</button>
</div>

<script>
(function () {
  var STORAGE_KEY = "homepage-language";

  function getInitialLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "zh") return saved;
    } catch (e) {}
    return navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function setLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-lang-content]").forEach(function (el) {
      var active = el.getAttribute("data-lang-content") === lang;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-hidden", active ? "false" : "true");
    });

    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      var active = button.getAttribute("data-lang-button") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang-button"));
      });
    });
    setLanguage(getInitialLanguage());
  });
})();
</script>

<div class="lang-content is-active" data-lang-content="en" markdown="1">

<span class='anchor' id='about-me'></span>

## 👤 About Me

I am currently a PhD student at the School of Artificial Intelligence and Data Science, University of Science and Technology of China. Previously, I completed my M.Sc. and B.Sc. degrees at Wuhan University and Wuhan University of Technology, respectively.

My research interests are interdisciplinary, including **AI for Physics**, **Physics of AI**, **Computational Physics/Chemistry** and **AI for Medicine**. I am particularly passionate about using AI methods to advance science and health research.

If you're interested in my work, feel free to reach out. [📧 Email me](mailto:florian@whu.edu.cn)

## 🏫 Educations
- *2026.09 - Present*, PhD (candidate) in *Intelligence Science & Technology*, School of Artificial Intelligence and Data Science, University of Science and Technology of China. Supervisor: [Prof. Zhicheng Zhong](https://ai4s.work/zhichengzhong/).
- *2023.09 - 2026.06*, M.Sc. in *Electronic Science & Technology*, School of Integrated Circuits, Wuhan University.
- *2019.09 - 2023.06*, B.Sc. in *Communications Engineering*, School of Information Engineering, Wuhan University of Technology.
- *2016.09 - 2019.06*, High-school, Ouhai Middle School, Wenzhou, Zhejiang.

## 📚 Publications 
(\*Corresponding Author)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Appl. Mater. Today</div><img src='images/paper1.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A machine learning-based framework for predicting the power factor of thermoelectric materials](https://www.sciencedirect.com/science/article/pii/S2352940725000460)

**Abstract**: Thermoelectric materials represent an innovative energy solution, capable of converting waste heat into usable electrical power. Recent advances have leveraged machine learning to identify new thermoelectric materials, yet challenges remain in balancing applicability, feature complexity, and interpretability. In this study, we introduce an interpretable framework based on ensemble learning and Magpie chemical element features to predict the power factor (PF) of various materials. Our approach yields approximate analytical expressions for PF using simple elemental features, providing both accuracy and transparency. We validate our predictions with density functional theory, successfully identifying two high-PF selenides as promising candidates for thermoelectric applications.

**Yuxuan Zeng**, Wei Cao\*, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/TE-PF-Prediction)
- *Applied Materials Today (**Appl. Mater. Today**)*, 2025 (SCI Q2)

</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Mater. Futures (Cover Story)</div><img src='images/5488c62bc07cdbe7cc1b11a59884b7ea.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1"> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Mater. Futures (Cover Story)</div><img src='images/mf-cover.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating the discovery of materials with expected thermal conductivity via a synergistic strategy of DFT and interpretable deep learning](https://iopscience.iop.org/article/10.1088/2752-5724/ae08d0)

**Abstract**: Lattice thermal conductivity (LTC) is a critical parameter for thermal transport properties, playing a pivotal role in advancing thermoelectric materials and thermal management technologies. Traditional computational methods, such as density functional theory (DFT) and molecular dynamics (MD), are resource-intensive, limiting their applicability for high-throughput LTC prediction. While AI-driven approaches have made significant strides in material science, the trade-off between accuracy and interpretability remains a major bottleneck. In this study, we introduce an interpretable deep learning framework that enables rapid and accurate LTC prediction, effectively bridging the gap between interpretability and precision. Leveraging this framework, we identify and validate four promising thermal conductors/insulators using DFT and MD. Moreover, by combining sensitivity analysis with DFT calculations, we uncover novel insights into phonon thermal transport mechanisms, providing a deeper understanding of the underlying physics. This work not only accelerates the discovery of thermal materials but also sets a new benchmark for interpretable AI in material science.

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/LTC-modeling)
- *Materials Futures (**Mater. Futures**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/paper3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating Multi-Objective Collaborative Optimization of Doped Thermoelectric Materials via Artificial Intelligence](https://arxiv.org/abs/2504.08258)

**Abstract**: The thermoelectric performance of materials exhibits complex nonlinear dependencies on both elemental types and their proportions, rendering traditional trial-and-error approaches inefficient and time-consuming for material discovery. In this work, we present a deep learning model capable of accurately predicting thermoelectric properties of doped materials directly from their chemical formulas, achieving state-of-the-art performance. To enhance interpretability, we further incorporate sensitivity analysis techniques to elucidate how physical descriptors affect the thermoelectric figure of merit ($zT$). Moreover, we establish a coupled framework that integrates a surrogate model with a multi-objective genetic algorithm to efficiently explore the vast compositional space for high-performance candidates. Experimental validation confirms the discovery of a novel thermoelectric material with superior $zT$ values in the medium-temperature regime.

**Yuxuan Zeng**, Wenhao Xie, Wei Cao\*, Tan Peng, Yue Hou, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/WaveTENet)
- *Preprint*, 2025.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">npj Digit. Med.</div><img src='images/heatmap.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Artificial intelligence-driven multivariate integration for pulmonary arterial pressure prediction in pulmonary hypertension](https://www.nature.com/articles/s41746-025-02233-6)

**Yuxuan Zeng**, Gonghao Ling, Haojie Zhang, Wei Cao, Xuan Zheng\*, Xiaoxian Deng, Lan Lan, Rongqing Sun, Xintian Liu, Lin Tian, Haibo Xu\*, Ziyu Wang\* & Gangcheng Zhang\* 

**Abstract**: Reliable machine learning techniques have vast potential in assisting clinical decision-making, including applications in bioinformatics and medical imaging analysis. However, AI-driven medical research is often limited by data scarcity, data quality, and the black-box nature of machine learning models. Thus, there is an urgent need for reliable surrogate models to overcome these challenges, enabling accurate learning from small datasets to guide clinical diagnosis. Here, we conducted a retrospective observational clinical study and proposed a data-driven predictive model that estimates mean pulmonary artery pressure (mPAP) based on individual patient clinical diagnostic features, enabling accurate assessment of pulmonary hypertension. Furthermore, we innovatively incorporate CMR-related features into the disease evaluation framework. Compared to traditional invasive measurement methods, this framework can not only accurately predict a patient’s mPAP using easily accessible noninvasive physiological features but also incorporate uncertainty quantification to extract qualitative patterns, aiding clinical diagnosis.

**Collection**: [Emerging Applications of Machine Learning and AI for Predictive Modeling in Precision Medicine](https://www.nature.com/collections/fdghjcecib)

[**Code and data**](https://github.com/FlorianTseng/mPAP-Pred)
- *npj Digital Medicine (**npj Digit. Med.**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Phys. Rev. Appl.</div><img src='images/crystal-graph.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Thermoelectric Transport from Crystal Structures via Multiscale Graph Neural Network](https://link.aps.org/doi/10.1103/m8nb-bbp8)

**Abstract**: Graph neural networks (GNNs) are designed to extract latent patterns from graph-structured data, making them particularly well suited for crystal representation learning. Here, we propose a GNN model tailored for estimating electronic transport coefficients in inorganic thermoelectric crystals. The model encodes crystal structures and physicochemical properties in a multiscale manner, encompassing global, atomic, bond, and angular levels. It achieves state-of-the-art performance on benchmark datasets with remarkable extrapolative capability. By combining the proposed GNN with *ab initio* calculations, we successfully identify compounds exhibiting outstanding electronic transport properties and further perform interpretability analyses from both global and atomic perspectives, tracing the origins of their distinct transport behaviors. Interestingly, the decision process of the model naturally reveals underlying physical patterns, offering new insights into computer-assisted materials design.

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Fang Lyu, Wenhao Xie, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/TECSA-GNN)
- *Physical Review Applied (**Phys. Rev. Appl.**)*, 2026 (SCI Q2)

</div>
</div>

<!--
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TGRS 2021</div><img src='images/TGRS2021-RefSR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RRSGAN: Reference-based Super-Resolution for Remote Sensing Image](https://ieeexplore.ieee.org/abstract/document/9328132/)

**Runmin Dong**, Lixian Zhang and Haohuan Fu\*

[**Code and data**](https://github.com/dongrunmin/RRSGAN)
- *IEEE Transactions on Geoscience and Remote Sensing (**TGRS**)*, 2021 (SCI, CCF-B, Q1, IF=7.5)
- **ESI Highly Cited Papers**

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TGRS 2021</div><img src='images/TGRS2021-LC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[High-Resolution Land Cover Mapping Through Learning with Noise Correction](https://ieeexplore.ieee.org/abstract/document/9397290/)

**Runmin Dong**, Weizhen Fang, Haohuan Fu\*, Lin Gan, Jie Wang, and Peng Gong\*

- *IEEE Transactions on Geoscience and Remote Sensing (**TGRS**)*, 2021 (SCI, CCF-B, Q1, IF=7.5)

</div>
</div>

- Weijia Li, Jinhua Yu, Dairong Chen, Yi Lin, **Runmin Dong**\*, Xiang Zhang, Conghui He, and Haohuan Fu\*. Fine-Grained Building Function Recognition from Street-View Images via Geometry-Aware Semi-Supervised Learning. *International Journal of Applied Earth Observation and Geoinformation (**JAG**)*. 2025. (SCI, Q1, IF=7.6)
- Jinxiao Zhang, **Runmin Dong**\*, Juepeng Zheng, Mengxuan Chen, Lixian Zhang, Yi Zhao, and Haohuan Fu\*. Spatial-Temporal Context Model for Remote Sensing Imagery Compression. *In Proceedings of the 32nd ACM International Conference on Multimedia (**ACM MM**)*. 2024. (CCF-A)
- Lixian Zhang, **Runmin Dong**\*, Shuai Yuan, Jinxiao Zhang, Mengxuan Chen, Juepeng Zheng, Haohuan Fu\*. DeepLight: Reconstructing High-Resolution Observations of Nighttime Light With Multi-Modal Remote Sensing Data. *In Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence (**IJCAI**)*. 2024. (CCF-A)
- Lixian Zhang, Shuai Yuan, **Runmin Dong**\*, Juepeng Zheng, Bin Gan, Dengmao Fang, and Haohuan Fu\*. SWCARE: Switchable learning and connectivity-aware refinement method for multi-city and diverse-scenario road mapping using remote sensing images. *International Journal of Applied Earth Observation and Geoinformation (**JAG**)*. 2024. (SCI, Q1, IF=7.6)
- **Runmin Dong**, Lixian Zhang, Weijia Li, Shuai Yuan, Lin Gan, Juepeng Zheng, Haohuan Fu\*, Lichao Mou\*, and Xiao Xiang Zhu\*. An Adaptive Image Fusion Method for Sentinel-2 Images and High-Resolution Images with Long-Time Intervals. *International Journal of Applied Earth Observation and Geoinformation (**JAG**)*. 2023. (SCI, Q1, IF=7.6)
- **Runmin Dong**, Cong Li, Haohuan Fu\*, Jie Wang, Weijia Li, Yi Yao, Lin Gan, Le Yu, and Peng Gong\*. Improving 3-m Resolution Land Cover Mapping Through Efficient Learning from an Imperfect 10-m Resolution Map. *Remote Sensing*, 2020.
- **Runmin Dong**, Weijia Li\*, Haohuan Fu, Lin Gan, and Maocai Xia. Oil Palm Plantation Mapping from High-Resolution Remote Sensing Images Using Deep Learning. *International Journal of Remote Sensing*, 2019. -->

<!--
# 🌟 Fundings and Projects
- *2023.12 - 2026.11*, Highly Scalable Parallel and Intelligent Computing Technologies for High-Resolution Regional Climate Models. National Key Research and Development Plan of China. Subtask Leader, ¥450,000 (国家重点研发计划子课题负责人)
- *2024.01 - 2025.12*, Fine-Grained Land Cover Classification Based on Reliable Fusion and Label Generation. The Young Scientists Fund of the National Natural Science Foundation of China. PI, ¥200,000 (主持国家自然科学基金青年基金)
- *2023.06 - 2025.01*, Large-Factor Super-Resolution and Application of Remote Sensing Images Based on Progressive Reconstruction and Reference-Guided Texture Transfer. The China Postdoctoral Science Foundation. PI, ¥80,000 (主持中国博士后面上基金)
- *2023.07 - 2024.07*, Pre-training and Segmentation Foundational Models for Remote Sensing Images. SenseTime. PI, ¥300,000 (支撑和主导商汤科技校企合作项目)
-->

## 🥇 Selected Honors and Awards
- *2025.12*, ASML Scholarship of the School of Integrated Circuits, Wuhan University (武汉大学集成电路学院阿斯麦奖学金)
- *2023.06*, Excellent BSc Thesis Award, Wuhan University of Technology (武汉理工大学优秀学士学位论文)
- *2021.10*, Third Prize, Undergraduate Group, 11th MathorCup Mathematical Modeling Challenge (第十一届MathorCup高校数学建模挑战赛本科组三等奖)
- *2022.06*, Third-class Scholarship, Wuhan University of Technology (武汉理工大学三等奖学金, 2021–2022)
- *2021.06*, Second-class Scholarship, Wuhan University of Technology (武汉理工大学二等奖学金, 2020–2021)
- *2022.06*, Merit Student of the School, Wuhan University of Technology (武汉理工大学院三好学生, 2021–2022)
- *2021.06*, Merit Student of the University, Wuhan University of Technology (武汉理工大学校三好学生, 2020–2021)
- *2020.06*, Merit Student of the School, Wuhan University of Technology (武汉理工大学院三好学生, 2019–2020)


## 🧑‍⚖️ Academic Service
- *2026.06*, Peer reviewer for *Advanced Intelligent Systems*
- *2026.04*, Joint peer review for *Materials & Design*
- *2026.03*, Peer reviewer for *IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing*
- *2026.02*, Peer reviewer for *Information Processing in Agriculture*
- *2026.02*, Joint peer review for *Materials Today Communications*
- *2025.08*, Joint peer review for *Applied Thermal Engineering*

<!--
# 💻 Research Experience and Academic Services
- *2022.07 – 2025.01*, Postdoc. Department of Earth System Science, Tsinghua University
- *2024.07 – 2025.02*, Visiting Postdoctoral Researcher. The University of Hong Kong
- *2021.06 - 2022.12*, Guest Editor. Special Issue on Deep Learning in Remote Sensing Application, Remote Sensing
- *2018.02 – 2021.06*, Teaching Assistant. Geoscience Big Data Analysis Course for Undergraduate Students, Tsinghua University
- *2020.01 – Present*, Reviewer. NeurIPS, ISPRS, IEEE TGRS, ACM MM, IEEE GRSL, SRS, JSTARS, RS, IJDE, IJRS, etc.


# 💬 Talks and Presentations
- *2024.06*, IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), Seattle, USA (Poster)
- *2023.10*, IEEE International Conference on Computer Vision (ICCV), Paris, France (Poster)
- *2023.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Pasadena, USA (Oral)
- *2023.06*, Quantitative Remote Sensing Forum, Chengdu, China (Oral)
- *2023.05*, Youth Geoscience Forum, Wuhan, China (Oral)
- *2021.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Online (Oral)
- *2020.10*, [IEEE GRSS Webinar](https://www.grss-ieee.org/events/deep-learning-for-remote-sensing-image-analysis-applications-methods-and-perspectives/), Online (Invited Talk)
- *2019.10*, IEEE International Conference on Computer Vision Workshop (ICCVW), Seoul, Korea (Oral)
-->

</div>

<div class="lang-content" data-lang-content="zh" markdown="1">

<span class='anchor' id='about-me-zh'></span>

## 👤 个人简介

我目前在中国科学技术大学人工智能与数据科学学院攻读博士；此前我分别在武汉理工大学信息工程学院、武汉大学集成电路学院完成了本科和硕士学业。

我的研究兴趣相当广泛，包括 **AI for Physics**、**Physics of AI**、**Computational Physics/Chemistry** 和 **AI for Medicine**。我尤其关注如何利用人工智能方法推动科学研究和医疗健康研究，以及利用统计力学方法分析神经网络在比例极限下的典型行为。

如果你对我的工作感兴趣，欢迎交流。[📧 邮件](mailto:florian@whu.edu.cn)

## 🏫 教育经历
- *2026.09 - 至今*，中国科学技术大学人工智能与数据科学学院，*智能科学与技术* 博士研究生。指导教师：[钟志诚 教授](https://ai4s.work/zhichengzhong/)。
- *2023.09 - 2026.06*，武汉大学集成电路学院，*电子科学与技术* 硕士。
- *2019.09 - 2023.06*，武汉理工大学信息工程学院，*通信工程* 学士。
- *2016.09 - 2019.06*，浙江省瓯海中学，高中。

## 📚 学术成果
(\*通讯作者)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Appl. Mater. Today</div><img src='images/paper1.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A machine learning-based framework for predicting the power factor of thermoelectric materials](https://www.sciencedirect.com/science/article/pii/S2352940725000460)

**摘要**：热电材料是一类具有应用潜力的能源材料，能够将废热转化为可利用的电能。近年来，机器学习方法被用于发现新的热电材料，但在适用性、特征复杂度和可解释性之间取得平衡仍然具有挑战性。在该研究中，我们提出了一个基于集成学习和 Magpie 元素特征的可解释框架，用于预测多种材料的功率因子（PF）。该方法能够基于简单的元素特征给出近似解析表达式，在保证准确性的同时提升模型透明度。我们进一步通过密度泛函理论验证预测结果，并成功筛选出两种具有较高 PF 的硒化物候选热电材料。

**Yuxuan Zeng**, Wei Cao\*, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/TE-PF-Prediction)
- *Applied Materials Today (**Appl. Mater. Today**)*, 2025 (SCI Q2)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Mater. Futures (Cover Story)</div><img src='images/mf-cover.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating the discovery of materials with expected thermal conductivity via a synergistic strategy of DFT and interpretable deep learning](https://iopscience.iop.org/article/10.1088/2752-5724/ae08d0)

**摘要**：晶格热导率（LTC）是描述热输运性质的关键参数，在热电材料和热管理技术中具有重要作用。传统计算方法，例如密度泛函理论（DFT）和分子动力学（MD），通常计算成本较高，限制了其在高通量 LTC 预测中的应用。尽管 AI 驱动方法已经在材料科学中取得了重要进展，预测精度与可解释性之间的权衡仍然是主要瓶颈。在该研究中，我们提出了一个可解释深度学习框架，用于实现快速且准确的 LTC 预测，有效连接可解释性与预测精度。基于该框架，我们结合 DFT 和 MD 识别并验证了四种有潜力的热导体/热绝缘体。此外，我们将敏感性分析与 DFT 计算相结合，揭示了关于声子热输运机制的新认识，加深了对相关物理机制的理解。该工作不仅加速了热功能材料的发现，也为材料科学中的可解释 AI 建立了新的基准。

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/LTC-modeling)
- *Materials Futures (**Mater. Futures**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/paper3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating Multi-Objective Collaborative Optimization of Doped Thermoelectric Materials via Artificial Intelligence](https://arxiv.org/abs/2504.08258)

**摘要**：热电材料性能与元素种类及其比例之间存在复杂的非线性关系，因此传统试错式材料发现方法通常效率较低且耗时较长。在该工作中，我们提出了一个深度学习模型，能够直接从化学式预测掺杂材料的热电性质，并取得先进的预测性能。为了提升可解释性，我们进一步引入敏感性分析方法，用于阐明物理描述符对热电优值（$zT$）的影响。此外，我们构建了一个将代理模型与多目标遗传算法相结合的耦合框架，用于在庞大的成分空间中高效搜索高性能候选材料。实验验证确认了一种在中温区间具有优异 $zT$ 的新型热电材料。

**Yuxuan Zeng**, Wenhao Xie, Wei Cao\*, Tan Peng, Yue Hou, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/WaveTENet)
- *Preprint*, 2025.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">npj Digit. Med.</div><img src='images/heatmap.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Artificial intelligence-driven multivariate integration for pulmonary arterial pressure prediction in pulmonary hypertension](https://www.nature.com/articles/s41746-025-02233-6)

**Yuxuan Zeng**, Gonghao Ling, Haojie Zhang, Wei Cao, Xuan Zheng\*, Xiaoxian Deng, Lan Lan, Rongqing Sun, Xintian Liu, Lin Tian, Haibo Xu\*, Ziyu Wang\* & Gangcheng Zhang\* 

**摘要**：可靠的机器学习技术在辅助临床决策方面具有重要潜力，包括生物信息学和医学影像分析等应用。然而，AI 驱动的医学研究常受到数据稀缺、数据质量不足以及机器学习模型黑箱特性的限制。因此，亟需可靠的代理模型来克服这些挑战，使模型能够从小样本数据中进行准确学习，并为临床诊断提供支持。在该研究中，我们开展了一项回顾性观察临床研究，并提出了一个数据驱动预测模型，能够基于个体患者临床诊断特征估计平均肺动脉压（mPAP），从而实现对肺动脉高压的准确评估。此外，我们创新性地将 CMR 相关特征纳入疾病评估框架。与传统有创测量方法相比，该框架不仅能够利用易获取的无创生理特征准确预测患者的 mPAP，还能够结合不确定性量化提取定性规律，从而辅助临床诊断。

**Collection**: [机器学习和人工智能在精准医疗预测建模中的新兴应用](https://www.nature.com/collections/fdghjcecib)

[**Code and data**](https://github.com/FlorianTseng/mPAP-Pred)
- *npj Digital Medicine (**npj Digit. Med.**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Phys. Rev. Appl.</div><img src='images/crystal-graph.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Thermoelectric Transport from Crystal Structures via Multiscale Graph Neural Network](https://link.aps.org/doi/10.1103/m8nb-bbp8)

**摘要**：图神经网络（GNN）适合从图结构数据中提取潜在模式，因此非常适用于晶体表示学习。在该研究中，我们提出了一个面向无机热电晶体电子输运系数预测的 GNN 模型。该模型从全局、原子、键和角度等多个尺度编码晶体结构与物化性质。模型在基准数据集上取得了先进性能，并表现出良好的外推能力。通过将该 GNN 与 *ab initio* 计算结合，我们成功筛选出具有优异电子输运性质的化合物，并进一步从全局和原子层面开展可解释性分析，追踪其特殊输运行为的来源。值得注意的是，模型的决策过程自然揭示了潜在物理规律，为计算辅助材料设计提供了新的认识。

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Fang Lyu, Wenhao Xie, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/TECSA-GNN)
- *Physical Review Applied (**Phys. Rev. Appl.**)*, 2026 (SCI Q2)

</div>
</div>

<!--
# 🌟 项目与基金
- *2023.12 - 2026.11*, Highly Scalable Parallel and Intelligent Computing Technologies for High-Resolution Regional Climate Models. National Key Research and Development Plan of China. Subtask Leader, ¥450,000 (国家重点研发计划子课题负责人)
- *2024.01 - 2025.12*, Fine-Grained Land Cover Classification Based on Reliable Fusion and Label Generation. The Young Scientists Fund of the National Natural Science Foundation of China. PI, ¥200,000 (主持国家自然科学基金青年基金)
- *2023.06 - 2025.01*, Large-Factor Super-Resolution and Application of Remote Sensing Images Based on Progressive Reconstruction and Reference-Guided Texture Transfer. The China Postdoctoral Science Foundation. PI, ¥80,000 (主持中国博士后面上基金)
- *2023.07 - 2024.07*, Pre-training and Segmentation Foundational Models for Remote Sensing Images. SenseTime. PI, ¥300,000 (支撑和主导商汤科技校企合作项目)
-->

## 🥇 荣誉与奖励
- *2025.12*，武汉大学集成电路学院阿斯麦奖学金
- *2023.06*，武汉理工大学优秀学士学位论文
- *2021.10*，第十一届 MathorCup 高校数学建模挑战赛本科组三等奖
- *2022.06*，武汉理工大学三等奖学金，2021–2022
- *2021.06*，武汉理工大学二等奖学金，2020–2021
- *2022.06*，武汉理工大学院三好学生，2021–2022
- *2021.06*，武汉理工大学校三好学生，2020–2021
- *2020.06*，武汉理工大学院三好学生，2019–2020


## 🧑‍⚖️ 学术服务
- *2026.06*，Peer reviewer for *Advanced Intelligent Systems*
- *2026.04*，Joint peer review for *Materials & Design*
- *2026.03*，Peer reviewer for *IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing*
- *2026.02*，Peer reviewer for *Information Processing in Agriculture*
- *2026.02*，Joint peer review for *Materials Today Communications*
- *2025.08*，Joint peer review for *Applied Thermal Engineering*

<!--
# 💻 科研经历与学术服务
- *2022.07 – 2025.01*, Postdoc. Department of Earth System Science, Tsinghua University
- *2024.07 – 2025.02*, Visiting Postdoctoral Researcher. The University of Hong Kong
- *2021.06 - 2022.12*, Guest Editor. Special Issue on Deep Learning in Remote Sensing Application, Remote Sensing
- *2018.02 – 2021.06*, Teaching Assistant. Geoscience Big Data Analysis Course for Undergraduate Students, Tsinghua University
- *2020.01 – Present*, Reviewer. NeurIPS, ISPRS, IEEE TGRS, ACM MM, IEEE GRSL, SRS, JSTARS, RS, IJDE, IJRS, etc.


# 💬 报告与展示
- *2024.06*, IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), Seattle, USA (Poster)
- *2023.10*, IEEE International Conference on Computer Vision (ICCV), Paris, France (Poster)
- *2023.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Pasadena, USA (Oral)
- *2023.06*, Quantitative Remote Sensing Forum, Chengdu, China (Oral)
- *2023.05*, Youth Geoscience Forum, Wuhan, China (Oral)
- *2021.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Online (Oral)
- *2020.10*, [IEEE GRSS Webinar](https://www.grss-ieee.org/events/deep-learning-for-remote-sensing-image-analysis-applications-methods-and-perspectives/), Online (Invited Talk)
- *2019.10*, IEEE International Conference on Computer Vision Workshop (ICCVW), Seoul, Korea (Oral)
-->

</div>
