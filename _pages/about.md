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

<span class='anchor' id='about-me'></span>

## 👤 About Me

I am currently a MPhil student at the School of Integrated Circuits, Wuhan University. Previously, I completed my undergraduate studies in Communication Engineering at the School of Information Engineering, Wuhan University of Technology.

My research interests are broad and interdisciplinary, encompassing **AI for Science**, **AI for Medicine**, and **Stochastic Physics**. I am particularly passionate about leveraging artificial intelligence to advance natural science and healthcare research.

<!--
- **AI-driven data science** is a new paradigm in scientific discovery, significantly accelerating the exploration of materials space;
- I also explore the application of AI methods in **biomedical research**, aiming to uncover hidden associations between diseases and physiological characteristics;
- **Thermoelectric materials and devices** show great promise as power supplies and sensors. When integrated with signal processing techniques, they offer exciting potential in **health monitoring and energy harvesting**.
-->

If you're interested in my work, feel free to reach out!  
[👉📧 Email me](mailto:florian@whu.edu.cn)

## 📖 Educations
- *2023.09 - 2026.06*, MPhil., School of Integrated Circuits, Wuhan University
- *2019.09 - 2023.06*, Bachelor, School of Information Engineering, Wuhan University of Technology
- *2016.09 - 2019.06*, High school, Ouhai Middle School, Zhejiang Province

## 📝 Publications 
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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Mater. Futures</div><img src='images/5488c62bc07cdbe7cc1b11a59884b7ea.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating the discovery of materials with expected thermal conductivity via a synergistic strategy of DFT and interpretable deep learning](https://iopscience.iop.org/article/10.1088/2752-5724/ae08d0)

**Abstract**: Lattice thermal conductivity (LTC) is a critical parameter for thermal transport properties, playing a pivotal role in advancing thermoelectric materials and thermal management technologies. Traditional computational methods, such as density functional theory (DFT) and molecular dynamics (MD), are resource-intensive, limiting their applicability for high-throughput LTC prediction. While AI-driven approaches have made significant strides in material science, the trade-off between accuracy and interpretability remains a major bottleneck. In this study, we introduce an interpretable deep learning framework that enables rapid and accurate LTC prediction, effectively bridging the gap between interpretability and precision. Leveraging this framework, we identify and validate four promising thermal conductors/insulators using DFT and MD. Moreover, by combining sensitivity analysis with DFT calculations, we uncover novel insights into phonon thermal transport mechanisms, providing a deeper understanding of the underlying physics. This work not only accelerates the discovery of thermal materials but also sets a new benchmark for interpretable AI in material science.

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/LTC-modeling)
- *Materials Futures (**Mater. Futures**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">npj Comput. Mater.</div><img src='images/paper3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating Multi-Objective Collaborative Optimization of Doped Thermoelectric Materials via Artificial Intelligence](https://arxiv.org/abs/2504.08258)

**Abstract**: The thermoelectric performance of materials exhibits complex nonlinear dependencies on both elemental types and their proportions, rendering traditional trial-and-error approaches inefficient and time-consuming for material discovery. In this work, we present a deep learning model capable of accurately predicting thermoelectric properties of doped materials directly from their chemical formulas, achieving state-of-the-art performance. To enhance interpretability, we further incorporate sensitivity analysis techniques to elucidate how physical descriptors affect the thermoelectric figure of merit ($zT$). Moreover, we establish a coupled framework that integrates a surrogate model with a multi-objective genetic algorithm to efficiently explore the vast compositional space for high-performance candidates. Experimental validation confirms the discovery of a novel thermoelectric material with superior $zT$ values in the medium-temperature regime.

**Yuxuan Zeng**, Wenhao Xie, Wei Cao\*, Tan Peng, Yue Hou, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/WaveTENet)
- *npj Computational Materials (**npj Comput. Mater.**)* (under review), 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">npj Digit. Med.</div><img src='images/heatmap.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Artificial intelligence-driven multivariate integration for pulmonary arterial pressure prediction in pulmonary hypertension](https://www.nature.com/articles/s41746-025-02233-6)

**Yuxuan Zeng**, Gonghao Ling, Haojie Zhang, Wei Cao, Xuan Zheng\*, Xiaoxian Deng, Lan Lan, Rongqing Sun, Xintian Liu, Lin Tian, Haibo Xu\*, Ziyu Wang\* & Gangcheng Zhang\* 

**Abstract**: Reliable machine learning techniques have vast potential in assisting clinical decision-making, including applications in bioinformatics and medical imaging analysis. However, AI-driven medical research is often limited by data scarcity, data quality, and the black-box nature of machine learning models. Thus, there is an urgent need for reliable surrogate models to overcome these challenges, enabling accurate learning from small datasets to guide clinical diagnosis. Here, we conducted a retrospective observational clinical study and proposed a data-driven predictive model that estimates mean pulmonary artery pressure (mPAP) based on individual patient clinical diagnostic features, enabling accurate assessment of pulmonary hypertension. Furthermore, we innovatively incorporate CMR-related features into the disease evaluation framework. Compared to traditional invasive measurement methods, this framework can not only accurately predict a patient’s mPAP using easily accessible noninvasive physiological features but also incorporate uncertainty quantification to extract qualitative patterns, aiding clinical diagnosis.

**Collection**: Emerging Applications of Machine Learning and AI for Predictive Modeling in Precision Medicine

[**Code and data**](https://github.com/FlorianTseng/mPAP-Pred)
- *npj Digital Medicine (**npj Digit. Med.**)*, 2025 (SCI Q1)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Phys. Rev. Appl.</div><img src='images/crystal-graph.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Thermoelectric Transport from Crystal Structures via Multiscale Graph Neural Network](https://doi.org/10.48550/arXiv.2512.06697)

**Abstract**: Graph neural networks (GNNs) are designed to extract latent patterns from graph-structured data, making them particularly well suited for crystal representation learning. Here, we propose a GNN model tailored for estimating electronic transport coefficients in inorganic thermoelectric crystals. The model encodes crystal structures and physicochemical properties in a multiscale manner, encompassing global, atomic, bond, and angular levels. It achieves state-of-the-art performance on benchmark datasets with remarkable extrapolative capability. By combining the proposed GNN with *ab initio* calculations, we successfully identify compounds exhibiting outstanding electronic transport properties and further perform interpretability analyses from both global and atomic perspectives, tracing the origins of their distinct transport behaviors. Interestingly, the decision process of the model naturally reveals underlying physical patterns, offering new insights into computer-assisted materials design.

**Yuxuan Zeng**, Wei Cao\*, Yijing Zuo, Fang Lyu, Wenhao Xie, Tan Peng, Yue Hou, Ling Miao, Ziyu Wang\*, Jing Shi

[**Code and data**](https://github.com/FlorianTseng/TECSA-GNN)
- *Physical Review Applied (**Phys. Rev. Appl.**)* (under review), 2025 (SCI Q2)

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
