import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cesiumPort,
  arabGov,
  govDecision,
  bimPark,
  laserSim,
  scadaTopology,
  smartEnergyApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "个人介绍",
  },
  {
    id: "work",
    title: "工作经历",
  },
  {
    id: "contact",
    title: "联系方式",
  },
];

const services = [
  {
    title: "React / 全栈开发",
    icon: backend,
  },
  {
    title: "Three.js / WebGIS 3D",
    icon: creator,
  },
  {
    title: "React Native 跨端开发",
    icon: mobile,
  },
  {
    title: "AI 协同效能工程",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "高级前端开发工程师",
    company_name: "某出海软件科技公司",
    icon: tesla,
    iconBg: "#383E56",
    date: "2024.07 - 2026.10",
    points: [
      "主导阿联酋政府机构（ADAA、UAEAA 等）出海 Web 平台前端核心架构与交付，攻克全量双向 RTL（阿拉伯语）无缝镜像适配与多品牌独立编译部署",
      "深度落地基于 Claude Code + MCP 的 AI-Native 协同研发工作流，主导规范驱动开发，驱动单季度高效交付 600+ 次业务特性与缺陷修复",
      "主导天津港三维 GIS 智慧海图平台核心管线研发，攻克 IHO S-52 矢量海图渲染管线、GLSL 实时海面动态网格与 500+ 船舶轨迹高频通航推演",
      "基于 SSE 机制实现创意草稿字段级协同加锁与附件实时状态同步，将多用户并发冲突率降至 0%，搭建 RSA-2048 与无操作安全鉴权体系",
    ],
  },
  {
    title: "Three.js 开发主程 / 高级前端工程师",
    company_name: "某数字孪生科技公司",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2022.05 - 2024.07",
    points: [
      "作为公司 3D 可视化与前端核心负责人，主导多个大型数字孪生平台从零搭建，沉淀 Web 端三维模型高效加载、渲染与交互开发标准流程",
      "主导河北沧州康达制药数字化园区 3D 监管平台，攻克大型 BIM 模型与管网精细化渲染，实现逐层拆解、工况实时映射与巡航漫游",
      "实施 Draco 几何压缩与八叉树 LOD 按需加载策略，将模型体积压缩 60%+（由 150MB+ 压至 50MB 级），首屏白屏时间从 8s+ 降至 3s 级，漫游帧率稳定 50+ FPS",
      "主导河北工业大学激光器虚拟仿真实验平台，基于 Raycaster 与 CSG 三维几何网格布尔相减算法，攻克激光束微秒级实时碰撞计算与物理打孔动态仿真",
      "主导智云控 CIC 平台向 Vue 3 技术栈架构迁移与路由权限重构，显著提升系统可维护性与大屏渲染性能",
    ],
  },
  {
    title: "前端开发工程师（React Native 骨干）",
    company_name: "某智慧能源物联网公司",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2021.03 - 2022.04",
    points: [
      "负责跨平台工业组态引擎研发以及智慧能源大屏、Web 端物联网管理平台的核心功能开发与日常演进",
      "基于 GoJS 深度研发专用于暖通空调（HVAC）与电力监控的可视化组态编辑器，封装自定义图元拖拽、智能吸附、端口动态校验与网络拓扑寻路算法",
      "独立主导公司核心移动端 App（“智控”、“智捷”）从零架构与功能落地，打通设备巡检、维保抢修工单流转闭环",
      "突破移动端复杂图表与 WebView 工业组态图高性能缩放与高频数据渲染瓶颈，深度集成 GPS 地理围栏定位与现场拍照防伪水印",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "天津港 Cesium 三维海图与通航仿真平台",
    description:
      "从零构建符合 IHO S-52 标准的矢量海图渲染管线与动态水面 GLSL 着色器，实现海图要素分级展示与测深点 LOD 稀疏化算法，支持 500+ 艘船舶轨迹沿航线高频实时推演与碰撞预警，在倾斜视角下始终保持 55+ FPS 流畅渲染，成功落地调度中心。",
    tags: [
      {
        name: "React 19",
        color: "blue-text-gradient",
      },
      {
        name: "CesiumJS",
        color: "green-text-gradient",
      },
      {
        name: "GLSL",
        color: "pink-text-gradient",
      },
      {
        name: "WebGIS",
        color: "orange-text-gradient",
      },
    ],
    image: cesiumPort,
    source_code_link: "https://github.com/",
  },
  {
    name: "阿联酋政府创新创意协同平台",
    description:
      "阿联酋政务出海企业级协同管理平台。主导双向 LTR/RTL（阿拉伯语）无缝镜像适配与多品牌 Vite 编译架构；基于 SSE 实现字段级协同加锁（0% 并发冲突）；主导团队接入 Claude Code + MCP 效能工程，单季度高人效高质交付 600+ 特性与缺陷修复。",
    tags: [
      {
        name: "React 19",
        color: "blue-text-gradient",
      },
      {
        name: "RTL 出海",
        color: "green-text-gradient",
      },
      {
        name: "Claude Code / MCP",
        color: "pink-text-gradient",
      },
      {
        name: "SSE 实时加锁",
        color: "orange-text-gradient",
      },
    ],
    image: arabGov,
    source_code_link: "https://github.com/",
  },
  {
    name: "阿联酋政务效能与决策协同管理系统",
    description:
      "主导战略规划周期与 KPI 分期核算业务闭环。自研高性能通用 EditableTable 内联表格引擎，支持多类型单元格编辑、联动校验及自动防抖保存；深度二次封装 FullCalendar 实现复杂日程过滤调度；自研 Node.js 双语增量提取比对工具大幅提升交付效率。",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "FullCalendar",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js 工具链",
        color: "orange-text-gradient",
      },
    ],
    image: govDecision,
    source_code_link: "https://github.com/",
  },
  {
    name: "河北沧州康达制药园区三维数字孪生平台",
    description:
      "主导大型园区与室内工业管网 BIM 模型在 Web 端的高效解析与渲染。实施 Draco 几何压缩与八叉树 LOD 按需加载策略，将模型体积压缩 60%+（由 150MB+ 压至 50MB 级），首屏白屏时间从 8s+ 优化至 3s，复杂漫游场景下渲染帧率稳定 50+ FPS。",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js / R3F",
        color: "green-text-gradient",
      },
      {
        name: "BIM 管网",
        color: "pink-text-gradient",
      },
      {
        name: "Draco 优化",
        color: "orange-text-gradient",
      },
    ],
    image: bimPark,
    source_code_link: "https://github.com/",
  },
  {
    name: "智能激光器模拟仿真实验平台",
    description:
      "从零搭建高校微米级激光器实验器材 glTF 高保真渲染平台。基于 Raycaster 射线投射与 CSG 三维几何网格布尔相减算法，攻克激光束在目标材质表面微秒级实时碰撞计算与物理打孔动态视觉仿真；结合 GoJS 开发电路虚拟仿真接线与闭环校验。",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "CSG 布尔运算",
        color: "pink-text-gradient",
      },
      {
        name: "GoJS 电路仿真",
        color: "orange-text-gradient",
      },
    ],
    image: laserSim,
    source_code_link: "https://github.com/",
  },
  {
    name: "全平台工业组态图拓扑引擎",
    description:
      "基于 GoJS 深度研发专用于暖通空调（HVAC）与电力监控的可视化组态编辑器。封装自定义图元拖拽、智能吸附、端口动态校验与网络拓扑寻路算法；打通工程配置端到大屏监控端与移动 App 端的端到端高频数据实时消费与渲染链路。",
    tags: [
      {
        name: "GoJS",
        color: "blue-text-gradient",
      },
      {
        name: "HVAC 暖通电力",
        color: "green-text-gradient",
      },
      {
        name: "拓扑寻路",
        color: "pink-text-gradient",
      },
      {
        name: "跨端渲染",
        color: "orange-text-gradient",
      },
    ],
    image: scadaTopology,
    source_code_link: "https://github.com/",
  },
  {
    name: "“智控”、“智捷” 智慧能源移动端 App",
    description:
      "主导两款企业级 React Native App 工程底座搭建与多角色权限拦截体系。突破 WebView 复杂工业组态图高性能缩放与高频数据驱动渲染瓶颈；全流程落地设备巡检与维保工单流转闭环，深度集成 GPS 定位、地理围栏打卡与现场拍照防伪水印。",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "移动端底座",
        color: "green-text-gradient",
      },
      {
        name: "WebView 组态",
        color: "pink-text-gradient",
      },
      {
        name: "物联网巡检",
        color: "orange-text-gradient",
      },
    ],
    image: smartEnergyApp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
