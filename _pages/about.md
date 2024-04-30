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

I am currently working as a postdoctoral researcher at the Department of Earth System Science of Tsinghua University. I received the Ph.D. degree with honour from Tsinghua University, advised by [Prof. Haohuan Fu](http://www.thuhpgc.net/mediawiki/index.php/Haohuan_Fu). I have also spent time at [Prof. Xiao Xiang Zhu](https://www.asg.ed.tum.de/sipeo/team/zhu/)'s lab in Technical University of Munich.

My current research interests lie in remote sensing and computer vision. My research started from large-scale land cover mapping, aiming to improve resolution and accuracy within fine-grained classification systems through AI techniques. Key technologies in this project include image super-resolution, multi-source data fusion, self-supervised and weakly supervised learning, semantic segmentation, etc. Building on the advancements in land cover mapping products, I am trying to understand the land cover changes on the Earth and the patterns of urban development. My research vision is to leverage AI to establish innovative paradigms for Earth observation applications and derive fresh scientific insights for sustainable human development.


# 🔥 News
- *2024.02*: Ref-Diff is accepted by CVPR 2024. 


# 📝 Publications 
(\*Corresponding Author)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/CVPR2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Building Bridges across Spatial and Temporal Resolutions: Reference-Based Super-Resolution via Change Priors and Conditional Diffusion Model](https://arxiv.org/abs/2403.17460)

**Runmin Dong**, Shuai Yuan, Bin Luo, Mengxuan Chen, Jinxiao Zhang, Lixian Zhang, Weijia Li, Juepeng Zheng, Haohuan Fu\*

[**Code and data**](https://github.com/dongrunmin/RefDiff)
- *IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**)*, 2024 (CCF-A)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><img src='images/ICCV2023.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Large-Scale Land Cover Mapping with Fine-Grained Classes via Class-Aware Semi-Supervised Semantic Segmentation](https://openaccess.thecvf.com/content/ICCV2023/papers/Dong_Large-Scale_Land_Cover_Mapping_with_Fine-Grained_Classes_via_Class-Aware_Semi-Supervised_ICCV_2023_paper.pdf)

**Runmin Dong**, Lichao Mou, Mengxuan Chen, Weijia Li, Xinyi Tong, Shuai Yuan, Lixian Zhang, Juepeng Zheng, Xiaoxiang Zhu, and Haohuan Fu\*

- *IEEE International Conference on Computer Vision (**ICCV**)*, 2023 (CCF-A)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISPRS 2022</div><img src='images/ISPRS2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Real-World Remote Sensing Image Super-Resolution via a Practical Degradation Model and a Kernel-Aware Network](https://www.sciencedirect.com/science/article/abs/pii/S0924271622001824)

**Runmin Dong**, Lichao Mou\*, Lixian Zhang, Haohuan Fu\*, and Xiao Xiang Zhu\*

- *ISPRS Journal of Photogrammetry and Remote Sensing (**ISPRS**)*, 2022 (SCI, Q1 TOP, IF=12.7)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TGRS 2021</div><img src='images/TGRS2021-RefSR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RRSGAN: Reference-based Super-Resolution for Remote Sensing Image](https://ieeexplore.ieee.org/abstract/document/9328132/)

**Runmin Dong**, Lixian Zhang and Haohuan Fu\*

[**Code and data**](https://github.com/dongrunmin/RRSGAN)
- *IEEE Transactions on Geoscience and Remote Sensing (**TGRS**)*, 2021 (SCI, CCF-B, IF=8.2)
- **ESI Highly Cited Papers**

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TGRS 2021</div><img src='images/TGRS2021-LC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[High-Resolution Land Cover Mapping Through Learning with Noise Correction](https://ieeexplore.ieee.org/abstract/document/9397290/)

**Runmin Dong**, Weizhen Fang, Haohuan Fu\*, Lin Gan, Jie Wang, and Peng Gong\*

- *IEEE Transactions on Geoscience and Remote Sensing (**TGRS**)*, 2021 (SCI, CCF-B, IF=8.2)

</div>
</div>

- Lixian Zhang, Shuai Yuan, **Runmin Dong**\*, Juepeng Zheng, Bin Gan, Dengmao Fang, and Haohuan Fu\*. SWCARE: Switchable learning and connectivity-aware refinement method for multi-city and diverse-scenario road mapping using remote sensing images. *International Journal of Applied Earth Observation and Geoinformation (**JAG**)*. 2024. (SCI, Q1, IF=7.5)
- **Runmin Dong**, Lixian Zhang, Weijia Li, Shuai Yuan, Lin Gan, Juepeng Zheng, Haohuan Fu\*, Lichao Mou\*, and Xiao Xiang Zhu\*. An Adaptive Image Fusion Method for Sentinel-2 Images and High-Resolution Images with Long-Time Intervals. *International Journal of Applied Earth Observation and Geoinformation(**JAG**)*. 2023. (SCI, Q1, IF=7.5)
- **Runmin Dong**, Cong Li, Haohuan Fu\*, Jie Wang, Weijia Li, Yi Yao, Lin Gan, Le Yu, and Peng Gong\*. Improving 3-m Resolution Land Cover Mapping Through Efficient Learning from an Imperfect 10-m Resolution Map. *Remote Sensing*, 2020.
- **Runmin Dong**, Weijia Li\*, Haohuan Fu, Lin Gan, and Maocai Xia. Oil Palm Plantation Mapping from High-Resolution Remote Sensing Images Using Deep Learning. *International Journal of Remote Sensing*, 2019.


# 🌟 Fundings and Projects
- *2023.12 - 2026.11*, Highly Scalable Parallel and Intelligent Computing Technologies for High-Resolution Regional Climate Models. National Key Research and Development Plan of China. Subtask Leader, ¥450,000 (国家重点研发计划子课题负责人)
- *2024.01 - 2025.12*, Fine-Grained Land Cover Classification Based on Reliable Fusion and Label Generation. The Young Scientists Fund of the National Natural Science Foundation of China. PI, ¥200,000 (主持国家自然科学基金青年基金)
- *2024.01 - 2025.12*, Large-Factor Super-Resolution and Application of Remote Sensing Images Based on Progressive Reconstruction and Reference-Guided Texture Transfer. The China Postdoctoral Science Foundation. PI, ¥80,000 (主持中国博士后面上基金)
- *2023.07 - 2024.07*, Pre-training and Segmentation Foundational Models for Remote Sensing Images. SenseTime. PI, ¥300,000 (支撑和主导商汤科技校企合作项目)


# 🎖 Selected Honors and Awards
- *2023.09*, First Prize and Bole Award of the Smart City Innovation Application Competition Empowered by Aerospace Information Technology, Chinese Society for Geodesy Photogrammetry and Cartography (中国测绘学会颁发的空天地信息技术赋能智慧城市创新应用大赛一等奖(最高奖项)、伯乐奖(仅两名))
- *2022.07*, Shuimu Tsinghua Scholar, Tsinghua University (清华大学“水木学者”博士后人才项目)
- *2022.06*, Excellent PhD Thesis Award, Tsinghua University (清华大学优秀博士毕业论文)
- *2022.06*, Outstanding PhD Graduates Award, Tsinghua University（清华大学优秀博士毕业生）
- *2021.09*, Beyond Fellow Scholarship, Technical University of Munich（慕尼黑工业大学访问学者资助项目）
- *2020.10*, National Scholarship for Graduate Student, Tsinghua University（博士生国家奖学金）
- *2019.08*, SenseTime Outstanding Intern, SenseTime (商汤科技优秀实习生)

# 📖 Educations
- *2017.09 - 2022.06*, Ph.D. degree, Department of Earth System Science, Tsinghua University
- *2021.09 - 2022.03*, Beyond Fellow, [AI4EO Future Lab](https://ai4eo.de/our-team), Technical University of Munich
- *2013.09 - 2017.06*, B.S. degree, Department of Science, Beijing Jiaotong University

# 💻 Research Experience and Academic Services
- *2022.07 – Present*, Postdoc. Department of Earth System Science, Tsinghua University
- *2021.06 - 2022.12*, Guest Editor. Special Issue on Deep Learning in Remote Sensing Application, Remote Sensing
- *2018.02 – 2021.06*, Teaching Assistant. Geoscience Big Data Analysis Course for Undergraduate Students, Tsinghua University
- *2020.01 – Present*, Reviewer. ISPRS, IEEE TGRS, ACM MM, IEEE GRSL, SRS, JSTARS, RS, IJDE, IJRS, etc.

# 💬 Talks and Presentations
- *2023.10*, IEEE International Conference on Computer Vision (ICCV), Paris, France (Poster)
- *2023.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Pasadena, USA (Oral)
- *2023.06*, Quantitative Remote Sensing Forum, Chengdu, China (Oral)
- *2023.05*, Youth Geoscience Forum, Wuhan, China (Oral)
- *2021.07*, IEEE International Geoscience and Remote Sensing Symposium (IGARSS), Online (Oral)
- *2020.10*, IEEE GRSS Webinars, Online (Oral)
- *2019.10*, IEEE International Conference on Computer Vision Workshop (ICCVW), Seoul, Korea (Oral)
