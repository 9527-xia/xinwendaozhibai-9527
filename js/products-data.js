/**
 * 产品数据 - 按八大类顺序排列
 */
const productsData = {
  // ==================== ICU探视对讲 ====================
  'icu-nurse-station-15': {
    id: 'icu-nurse-station-15',
    name: 'ICU护士站主机15.6寸',
    model: 'WD-ICU-N01',
    category: 'icu',
    categoryName: 'ICU探视对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/ICU护士站主机15.6寸.jpg'
    ],
    summary: '15.6寸高清触控屏幕，管理ICU病房探视呼叫系统',
    features: [
      { icon: '📺', title: '高清显示', desc: '15.6寸FHD触控屏，1920×1080分辨率' },
      { icon: '📞', title: '双向对讲', desc: '高清音视频双向通话，清晰流畅' },
      { icon: '👥', title: '多方通话', desc: '支持一对多、多对多通话模式' },
      { icon: '🎥', title: '录音录像', desc: '通话过程可录音录像存档' }
    ],
    specs: [
      { label: '系统', value: 'Android 8.0' },
      { label: 'CPU', value: 'MTK 64位10核' },
      { label: '内存', value: '4GB+128GB' },
      { label: '显示屏', value: '15.6寸FHD 1920×1080' }
    ],
    scenarios: ['ICU病房', '护士站', '探视室'],
    relatedProducts: ['icu-bed-terminal', 'icu-visit-terminal', 'icu-visit-cart']
  },

  'icu-nurse-station': {
    id: 'icu-nurse-station',
    name: 'ICU护士站主机',
    model: 'WD-ICU-N02',
    category: 'icu',
    categoryName: 'ICU探视对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/ICU护士站主机.jpg'
    ],
    summary: '护士站探视管理主机，支持多方探视调度',
    features: [
      { icon: '🖥️', title: '可视管理', desc: '直观的图形化管理界面' },
      { icon: '📊', title: '状态监控', desc: '实时显示各床位探视状态' },
      { icon: '🔔', title: '呼叫提醒', desc: '病床呼叫即时提醒' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '10.1/13.3/15.6寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V/2A' }
    ],
    scenarios: ['护士站', 'ICU病房'],
    relatedProducts: ['icu-nurse-station-15', 'icu-bed-terminal']
  },

  'icu-bed-terminal': {
    id: 'icu-bed-terminal',
    name: 'ICU病床分机',
    model: 'WD-ICU-B01',
    category: 'icu',
    categoryName: 'ICU探视对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/ICU病床分机.jpg'
    ],
    summary: '床旁探视终端，高清视频通话',
    features: [
      { icon: '📹', title: '高清视频', desc: '1080P高清视频通话' },
      { icon: '🔊', title: '清晰音质', desc: '回声消除，噪音抑制' },
      { icon: '🚨', title: '一键呼叫', desc: '紧急情况一键呼叫护士站' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '10.1寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V DC' }
    ],
    scenarios: ['ICU病床旁'],
    relatedProducts: ['icu-nurse-station-15', 'icu-visit-terminal']
  },

  'icu-visit-terminal': {
    id: 'icu-visit-terminal',
    name: 'ICU探视分机',
    model: 'WD-ICU-V01',
    category: 'icu',
    categoryName: 'ICU探视对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/ICU探视分机.jpg'
    ],
    summary: '家属探视终端，远程视频探视ICU患者',
    features: [
      { icon: '👨‍👩‍👧', title: '家属探视', desc: '家属远程视频探视患者' },
      { icon: '🔒', title: '权限管理', desc: '探视时间和时长可控' },
      { icon: '📱', title: '操作简便', desc: '触控操作，老人也能轻松使用' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '10.1寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V DC' }
    ],
    scenarios: ['探视室', '家属等候区'],
    relatedProducts: ['icu-nurse-station-15', 'icu-bed-terminal']
  },

  'icu-visit-cart': {
    id: 'icu-visit-cart',
    name: '移动探视推车',
    model: 'WD-ICU-C01',
    category: 'icu',
    categoryName: 'ICU探视对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/移动探视推车.jpg'
    ],
    summary: '可移动探视终端推车，灵活部署',
    features: [
      { icon: '🛒', title: '移动便捷', desc: '万向轮设计，轻松移动' },
      { icon: '📏', title: '高度可调', desc: '升降支架，适应不同身高' },
      { icon: '🔋', title: '续航持久', desc: '内置电池，续航8小时' }
    ],
    specs: [
      { label: '台面尺寸', value: '470×490mm' },
      { label: '可调节高度', value: '气动升降，行程250mm' },
      { label: '抽屉', value: '带锁抽屉，阻尼静音滑轨' },
      { label: '材质', value: '航空铝合金立柱' },
      { label: '万向医疗轮', value: '4寸静音万向轮' },
      { label: '电芯容量', value: '80000mAh' },
      { label: '额定容量', value: '240Wh' },
      { label: '输出DC', value: '12Vdc ≤3A' },
      { label: '输出USB', value: '5Vdc ≤3A' }
    ],
    scenarios: ['ICU病房', '移动探视'],
    relatedProducts: ['icu-nurse-station-15', 'icu-bed-terminal']
  },

  // ==================== 医护对讲 ====================
  'nurse-station-host': {
    id: 'nurse-station-host',
    name: '医护对讲护士站主机',
    model: 'WD-NH-N01',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/医护对讲护士站主机.jpg'
    ],
    summary: '护士站呼叫管理主机，响应病房呼叫',
    features: [
      { icon: '🔔', title: '呼叫管理', desc: '实时接收病房呼叫' },
      { icon: '📢', title: '广播通知', desc: '病区广播和单独呼叫' },
      { icon: '📋', title: '信息显示', desc: '病人信息一览表显示' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '10.1/13.3/15.6寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V/2A' }
    ],
    scenarios: ['护士站', '病房区'],
    relatedProducts: ['nurse-bed-terminal', 'nurse-door-terminal']
  },

  'nurse-bed-terminal': {
    id: 'nurse-bed-terminal',
    name: '医护病床分机',
    model: 'WD-NH-B01',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/医护病床分机.jpg'
    ],
    summary: '床旁呼叫对讲终端',
    features: [
      { icon: '🆘', title: '一键呼叫', desc: '床头一键呼叫护士站' },
      { icon: '🔊', title: '双向对讲', desc: '免提对讲，解放双手' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '7/10.1寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V DC' }
    ],
    scenarios: ['病房床头'],
    relatedProducts: ['nurse-station-host', 'nurse-door-terminal']
  },

  'nurse-door-terminal': {
    id: 'nurse-door-terminal',
    name: '医护门口机分机',
    model: 'WD-NH-D01',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/医护门口机分机.jpeg'
    ],
    summary: '病房门口显示与呼叫终端',
    features: [
      { icon: '📟', title: '信息显示', desc: '显示病房号、床号、护理等级' },
      { icon: '🔔', title: '门灯提醒', desc: '呼叫时门灯闪烁提醒' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '10.1/13.3/15.6寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V DC' }
    ],
    scenarios: ['病房门口'],
    relatedProducts: ['nurse-station-host', 'nurse-bed-terminal']
  },

  'nurse-station-host-15': {
    id: 'nurse-station-host-15',
    name: '医护对讲护士站主机15.6寸',
    model: 'WD-NH-N02',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: ['../images/products/医护对讲护士站主机15.6寸.jpg'],
    summary: '15.6寸大屏医护对讲管理主机，高清显示',
    features: [
      { icon: '📺', title: '大屏显示', desc: '15.6寸FHD触控屏' },
      { icon: '🔔', title: '呼叫管理', desc: '实时响应病房呼叫' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '15.6英寸' },
      { label: '分辨率', value: '1920×1080' }
    ],
    scenarios: ['护士站'],
    relatedProducts: ['nurse-station-host', 'nurse-bed-terminal']
  },

  'nurse-bulletin-board': {
    id: 'nurse-bulletin-board',
    name: '医护一览表分机',
    model: 'WD-NH-BB01',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/医护一览表分机.jpg'
    ],
    summary: '电子一览表显示病房信息',
    features: [
      { icon: '📋', title: '信息展示', desc: '显示病房床位信息' },
      { icon: '🔄', title: '实时更新', desc: '与HIS系统同步' }
    ],
    specs: [
      { label: '屏幕尺寸', value: '43/55/65寸' },
      { label: '分辨率', value: '1920×1080' },
      { label: '传输方式', value: 'TCP/IP' },
      { label: '输入电源', value: '12V DC' }
    ],
    scenarios: ['护士站'],
    relatedProducts: ['nurse-station-host']
  },

  'nurse-workstation': {
    id: 'nurse-workstation',
    name: '护士工作站',
    model: 'WD-NH-WS01',
    category: 'nurse',
    categoryName: '医护对讲',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/护士工作站.jpg'
    ],
    summary: '护士站综合管理终端',
    features: [
      { icon: '💻', title: '综合管理', desc: '集成多种护理功能' },
      { icon: '📊', title: '数据统计', desc: '护理数据统计分析' }
    ],
    specs: [
      { label: '尺寸', value: '27寸/32寸可定制' },
      { label: '视频输入', value: 'VGA×1, HDMI×1' },
      { label: '对比度', value: '3000:1' },
      { label: '亮度', value: '400cd/m²' },
      { label: '可视角度', value: '178°/178°' },
      { label: '摄像头', value: '1080P双目摄像头' },
      { label: '分辨率', value: '1920×1080' }
    ],
    scenarios: ['护士站'],
    relatedProducts: ['nurse-station-host']
  },

  // ==================== 手术示教 ====================
  'teach-cart': {
    id: 'teach-cart',
    name: '手术示教移动推车',
    model: 'WD-TC-C01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/手术示教移动推车.jpg'
    ],
    summary: '可移动手术示教推车，灵活部署',
    features: [
      { icon: '🛒', title: '移动便捷', desc: '万向轮，轻松移动到任意手术室' },
      { icon: '📹', title: '多路采集', desc: '支持术野、全景、腹腔镜等多路视频' },
      { icon: '📡', title: '直播推流', desc: '实时直播到示教室或远程' }
    ],
    specs: [
      { label: '显示器支架承重', value: '10kg' },
      { label: '桌面承重', value: '20kg' },
      { label: '推车顶部离地高度', value: '1765mm' },
      { label: '材质', value: '铝合金+钢板+ABS/PC' }
    ],
    scenarios: ['手术室', '示教室'],
    relatedProducts: ['teach-camera-4k', 'teach-server']
  },

  'teach-camera-4k': {
    id: 'teach-camera-4k',
    name: '4K医用术野摄像机',
    model: 'WD-TC-CM01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/手术示教4K医用术野摄像机.jpg'
    ],
    summary: '4K高清术野摄像，清晰记录手术细节',
    features: [
      { icon: '🎥', title: '4K超清', desc: '3840×2160超高清画质' },
      { icon: '🔍', title: '光学变焦', desc: '20倍光学变焦，看清细节' },
      { icon: '💡', title: '低光拍摄', desc: '手术无影灯下色彩还原准确' }
    ],
    specs: [
      { label: '传感器', value: '1/2.5英寸Exmor R CMOS' },
      { label: '有效像素', value: '851万' },
      { label: '变焦', value: '20倍光学+12倍数字' },
      { label: '分辨率', value: '4KP30/1080P60' }
    ],
    scenarios: ['手术室', '示教中心'],
    relatedProducts: ['teach-cart', 'teach-server']
  },

  'teach-server': {
    id: 'teach-server',
    name: '手术示教媒体服务器',
    model: 'WD-TC-S01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/手术示教媒体伺服服务器.jpg'
    ],
    summary: '手术示教流媒体处理服务器',
    features: [
      { icon: '🖥️', title: '高性能', desc: '支持多路视频同时处理' },
      { icon: '💾', title: '大容量存储', desc: 'TB级存储，支持长时间录像' },
      { icon: '🌐', title: '网络直播', desc: '支持RTMP/RTSP直播推流' }
    ],
    specs: [
      { label: '处理器', value: 'Intel Xeon E5' },
      { label: '内存', value: '32GB DDR4' },
      { label: '存储', value: '8TB RAID' },
      { label: '网络接口', value: '千兆×4' }
    ],
    scenarios: ['机房', '示教中心'],
    relatedProducts: ['teach-cart', 'teach-camera-4k']
  },

  'teach-panorama-camera': {
    id: 'teach-panorama-camera',
    name: '手术示教全景摄像机',
    model: 'WD-TC-PC01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/手术示教全景摄像机.jpg'
    ],
    summary: '全景记录手术室全貌',
    features: [
      { icon: '📷', title: '全景拍摄', desc: '180°全景视角' },
      { icon: '🎥', title: '高清画质', desc: '1080P高清画质' }
    ],
    specs: [
      { label: '传感器', value: '1/2.5英寸SONY CMOS' },
      { label: '有效像素', value: '851万' },
      { label: '光学变焦', value: '12X' },
      { label: '分辨率', value: '4K@60fps' }
    ],
    scenarios: ['手术室', '示教室'],
    relatedProducts: ['teach-cart', 'teach-camera-4k']
  },

  'teach-wireless-mic': {
    id: 'teach-wireless-mic',
    name: '手术示教无线麦克风',
    model: 'WD-TC-WM01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/手术示教无线麦克风.jpg'
    ],
    summary: '无线音频采集，清晰记录手术讲解',
    features: [
      { icon: '🎤', title: '无线传输', desc: 'U段无线传输' },
      { icon: '🔊', title: '降噪处理', desc: '智能降噪算法' }
    ],
    specs: [
      { label: '频率范围', value: '470~960MHz' },
      { label: '动态范围', value: '≥90dBA+' },
      { label: '信道数量', value: '64' },
      { label: '综合信噪比', value: '≥95dB A+' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['teach-cart', 'teach-camera-4k']
  },

  'teach-encode-server': {
    id: 'teach-encode-server',
    name: '示教编码服务器',
    model: 'WD-TC-ES01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/示教编码服务器.jpg',
      '../images/products/示教编码服务器接口说明.jpg'
    ],
    summary: '视频编码处理服务器',
    features: [
      { icon: '📦', title: '高效编码', desc: 'H.265高效编码' },
      { icon: '🔄', title: '多路处理', desc: '支持多路视频同时编码' }
    ],
    specs: [
      { label: '视频编码', value: 'H.264' },
      { label: '帧率', value: '1~60帧' },
      { label: '分辨率', value: '1080P' },
      { label: '规格', value: '2U服务器' }
    ],
    scenarios: ['机房', '示教中心'],
    relatedProducts: ['teach-server', 'teach-decode-server']
  },

  'teach-decode-server': {
    id: 'teach-decode-server',
    name: '示教解码服务器',
    model: 'WD-TC-DS01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/示教解码服务器.jpg'
    ],
    summary: '视频解码输出服务器',
    features: [
      { icon: '📺', title: '高清解码', desc: '4K高清解码' },
      { icon: '🖥️', title: '多屏输出', desc: '支持多屏同时输出' }
    ],
    specs: [
      { label: '面板尺寸', value: '23.8英寸' },
      { label: '视频输出分辨率', value: '3840*2160' },
      { label: '音视频格式', value: 'H.264+H.265+AAC' },
      { label: '操作系统', value: 'Windows' },
      { label: '亮度', value: '400cd/m²' }
    ],
    scenarios: ['机房', '示教室'],
    relatedProducts: ['teach-server', 'teach-encode-server']
  },

  'teach-main-screen': {
    id: 'teach-main-screen',
    name: '示教主控屏',
    model: 'WD-TC-MS01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/示教主控屏.jpg'
    ],
    summary: '手术示教主控操作屏幕',
    features: [
      { icon: '🎛️', title: '触控操作', desc: '10点触控操作' },
      { icon: '📹', title: '视频切换', desc: '多路视频一键切换' }
    ],
    specs: [
      { label: '面板尺寸', value: '27英寸' },
      { label: '最佳分辨率', value: '1920×1080@60Hz' },
      { label: 'CPU', value: 'Intel Core i5-10代' },
      { label: '内存', value: '16GB DDR4' },
      { label: '硬盘', value: '512G SATA' },
      { label: '防护等级', value: 'IP65' }
    ],
    scenarios: ['示教室'],
    relatedProducts: ['teach-cart', 'teach-server']
  },

  'teach-dual-screen': {
    id: 'teach-dual-screen',
    name: '示教双屏',
    model: 'WD-TC-TS01',
    category: 'teach',
    categoryName: '手术示教',
    mainCategory: 'cat-teach',
    mainCategoryName: '精准手术与示教中枢',
    images: [
      '../images/products/示教双屏.jpg'
    ],
    summary: '双屏手术示教显示终端',
    features: [
      { icon: '📺', title: '双屏显示', desc: '双屏同时显示不同内容' },
      { icon: '🔄', title: '画中画', desc: '支持画中画模式' }
    ],
    specs: [
      { label: '面板尺寸', value: '27英寸' },
      { label: '最佳分辨率', value: '1920×1080' },
      { label: '显示尺寸', value: '55英寸' },
      { label: '分辨率', value: '3840×2160' },
      { label: 'CPU', value: 'Intel Core/i5-10代' },
      { label: '内存', value: '16GB DDR4' },
      { label: '防护等级', value: 'IP65' }
    ],
    scenarios: ['示教室'],
    relatedProducts: ['teach-main-screen', 'teach-server']
  },

  // ==================== 数字化手术室 ====================
  'digital-host': {
    id: 'digital-host',
    name: '数字化手术室主机',
    model: 'WD-DG-H01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/数字化手术室主机.jpg',
      '../images/products/数字化手术室主机1.jpg'
    ],
    summary: '手术室核心控制主机',
    features: [
      { icon: '🎮', title: '集中控制', desc: '统一控制手术室内所有设备' },
      { icon: '📊', title: '数据采集', desc: '实时采集手术数据' },
      { icon: '🔗', title: '系统互联', desc: '与HIS/PACS等系统对接' }
    ],
    specs: [
      { label: '视频编码', value: 'H.264' },
      { label: '视频清晰度', value: '1080p' },
      { label: '视频帧率', value: '30/50/60帧/秒' },
      { label: '工作电压', value: '220V AC' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['digital-cabinet', 'digital-terminal']
  },

  'digital-terminal': {
    id: 'digital-terminal',
    name: '双屏主控终端',
    model: 'WD-DG-T01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/双屏主控终端.jpg'
    ],
    summary: '双屏触控操作终端',
    features: [
      { icon: '📺', title: '双屏显示', desc: '上下双屏，信息与操控分离' },
      { icon: '👆', title: '触控操作', desc: '10点触控，操作便捷' },
      { icon: '🧹', title: '易清洁', desc: '医疗级面板，易消毒清洁' }
    ],
    specs: [
      { label: '65寸分辨率', value: '3840×2160' },
      { label: '24寸分辨率', value: '1920×1080' },
      { label: '系统配置', value: 'Win10 I7-4770 8G 128G SSD' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['digital-host', 'control-panel']
  },

  'digital-cabinet': {
    id: 'digital-cabinet',
    name: '数字化手术室机柜',
    model: 'WD-DG-CB01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/数字化手术室机柜.jpg'
    ],
    summary: '手术室设备集成机柜',
    features: [
      { icon: '🗄️', title: '设备集成', desc: '集成多种手术设备' },
      { icon: '❄️', title: '散热设计', desc: '专业散热设计' }
    ],
    specs: [
      { label: '医用监视器个数', value: '8个可定制' },
      { label: '影像设备个数', value: '56个可定制' },
      { label: '视频编码格式', value: '4K H.265' }
    ],
    scenarios: ['手术室设备间'],
    relatedProducts: ['digital-host']
  },

  'digital-decode-server': {
    id: 'digital-decode-server',
    name: '数字化解码服务器',
    model: 'WD-DG-DS01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: ['../images/products/数字化解码服务器.png'],
    summary: '数字化手术室视频解码',
    features: [
      { icon: '📺', title: '多路解码', desc: '支持多路视频解码' },
      { icon: '🖥️', title: '多屏输出', desc: '支持多屏显示' }
    ],
    specs: [
      { label: '解码能力', value: '16路1080P' },
      { label: '输出接口', value: 'HDMI×4' }
    ],
    scenarios: ['手术室', '机房'],
    relatedProducts: ['digital-host', 'digital-encode-server']
  },

  'digital-4k-camera': {
    id: 'digital-4k-camera',
    name: '4K医用术野摄像机',
    model: 'WD-DG-CM01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/手术示教4K医用术野摄像机.jpg'
    ],
    summary: '4K高清术野摄像设备',
    features: [
      { icon: '🎥', title: '4K超清', desc: '3840×2160超高清' },
      { icon: '🔍', title: '光学变焦', desc: '20倍光学变焦' }
    ],
    specs: [
      { label: '分辨率', value: '4K' },
      { label: '光学变焦', value: '20倍' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['digital-host']
  },

  'digital-record-server': {
    id: 'digital-record-server',
    name: '录播服务器',
    model: 'WD-DG-RS01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/录播服务器.jpg'
    ],
    summary: '手术录像与直播服务器',
    features: [
      { icon: '💾', title: '录像存储', desc: '长时间录像存储' },
      { icon: '📡', title: '直播推流', desc: '支持实时直播' }
    ],
    specs: [
      { label: '存储容量', value: '16TB' },
      { label: '录像路数', value: '8路' }
    ],
    scenarios: ['手术室', '机房'],
    relatedProducts: ['digital-host']
  },

  'digital-decode-server-2': {
    id: 'digital-decode-server-2',
    name: '解码服务器',
    model: 'WD-DG-DS02',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/解码服务器.jpg'
    ],
    summary: '视频解码处理服务器',
    features: [
      { icon: '📺', title: '高清解码', desc: '4K高清解码' },
      { icon: '🔄', title: '实时处理', desc: '低延迟实时处理' }
    ],
    specs: [
      { label: '解码能力', value: '8路4K' },
      { label: '延迟', value: '<200ms' }
    ],
    scenarios: ['手术室', '机房'],
    relatedProducts: ['digital-host']
  },

  'digital-encode-server': {
    id: 'digital-encode-server',
    name: '编码服务器',
    model: 'WD-DG-ES01',
    category: 'digital',
    categoryName: '数字化手术室',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/编码服务器.jpg'
    ],
    summary: '视频编码处理服务器',
    features: [
      { icon: '📦', title: '高效编码', desc: 'H.265高效编码' },
      { icon: '🔄', title: '多路处理', desc: '多路同时编码' }
    ],
    specs: [
      { label: '编码格式', value: 'H.264/H.265' },
      { label: '输入路数', value: '8路' }
    ],
    scenarios: ['手术室', '机房'],
    relatedProducts: ['digital-host', 'digital-decode-server']
  },

  // ==================== 手术室集中控制 ====================
  'control-panel': {
    id: 'control-panel',
    name: '集控系统六联板',
    model: 'WD-CT-P01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/集控系统六联板.jpg'
    ],
    summary: '六联控制面板，集中控制设备',
    features: [
      { icon: '🎛️', title: '集中控制', desc: '灯光、空调、设备一键控制' },
      { icon: '📱', title: '触摸屏', desc: '彩色触摸屏，操作直观' },
      { icon: '⏰', title: '定时功能', desc: '支持定时开关设备' }
    ],
    specs: [
      { label: '尺寸', value: '32英寸/43英寸可定制' },
      { label: '分辨率', value: '1920*1080' },
      { label: '输入电压', value: '交流220V' },
      { label: '屏寿命', value: '>50000小时' },
      { label: '工作温度', value: '0-50℃' }
    ],
    scenarios: ['手术室墙面'],
    relatedProducts: ['digital-terminal', 'control-ac']
  },

  'control-ac': {
    id: 'control-ac',
    name: '空调控制屏',
    model: 'WD-CT-AC01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/空调控制屏.jpg'
    ],
    summary: '手术室空调智能控制面板',
    features: [
      { icon: '❄️', title: '温湿度控制', desc: '精确控制手术室温湿度' },
      { icon: '🔄', title: '模式切换', desc: '手术/值班模式一键切换' }
    ],
    specs: [
      { label: '显示尺寸', value: '380×290mm' },
      { label: '分辨率', value: '1920×1080' },
      { label: 'CPU', value: '四核1.8GHz' },
      { label: '系统', value: 'Android 11' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['control-panel']
  },

  'control-media-server': {
    id: 'control-media-server',
    name: '集控系统媒体伺服服务器',
    model: 'WD-CT-MS01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: ['../images/products/数字化解码服务器.png'],
    summary: '集中控制系统流媒体服务器',
    features: [
      { icon: '🖥️', title: '媒体处理', desc: '集中处理媒体流' },
      { icon: '🔄', title: '分发管理', desc: '统一分发管理' }
    ],
    specs: [
      { label: '处理器', value: 'Intel Xeon' },
      { label: '网络接口', value: '千兆×4' }
    ],
    scenarios: ['手术室机房'],
    relatedProducts: ['control-panel']
  },

  'control-triple-screen': {
    id: 'control-triple-screen',
    name: '手术室门口机三联屏',
    model: 'WD-CT-TS01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/手术室门口机三联屏.jpg'
    ],
    summary: '手术室门口信息显示三联屏',
    features: [
      { icon: '📺', title: '三屏显示', desc: '三块屏幕组合显示' },
      { icon: '📋', title: '信息展示', desc: '手术信息实时展示' }
    ],
    specs: [
      { label: '显示尺寸', value: '380*290mm' },
      { label: '分辨率', value: '1920*1080' },
      { label: 'CPU', value: '四核1.8GHz' },
      { label: '系统', value: 'Android 11' }
    ],
    scenarios: ['手术室门口'],
    relatedProducts: ['control-panel']
  },

  'control-door-terminal': {
    id: 'control-door-terminal',
    name: '手术室门口机',
    model: 'WD-CT-DT01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/手术室门口机.jpg'
    ],
    summary: '手术室门口信息显示与控制终端',
    features: [
      { icon: '📟', title: '信息显示', desc: '显示手术室状态' },
      { icon: '🎛️', title: '门口控制', desc: '门口设备控制' }
    ],
    specs: [
      { label: '显示尺寸', value: '21.5英寸' },
      { label: '分辨率', value: '1920*1080' },
      { label: 'CPU', value: '四核1.8GHz' },
      { label: '内存', value: '2G' },
      { label: '存储', value: '16G' },
      { label: '系统', value: 'Android 11' }
    ],
    scenarios: ['手术室门口'],
    relatedProducts: ['control-panel']
  },

  'bulletin-info-screen': {
    id: 'bulletin-info-screen',
    name: '手术信息公告屏',
    model: 'WD-BL-IS01',
    category: 'control',
    categoryName: '手术室集中控制',
    mainCategory: 'cat-digital',
    mainCategoryName: 'AI手术全息中枢',
    images: [
      '../images/products/手术信息公告屏.jpg'
    ],
    summary: '实时显示手术室状态和排程信息',
    features: [
      { icon: '📺', title: '信息公告', desc: '手术室状态实时公告' },
      { icon: '📋', title: '排程显示', desc: '手术排程信息展示' }
    ],
    specs: [
      { label: '显示区域', value: '1209.6×680.4mm' },
      { label: '分辨率', value: '1920×1080' },
      { label: '功率', value: '≤110W' },
      { label: '可视角度', value: '178°' }
    ],
    scenarios: ['手术部大厅', '家属等候区'],
    relatedProducts: ['control-panel']
  },

  // ==================== 手术行为管理 ====================
  'behavior-clothes': {
    id: 'behavior-clothes',
    name: '智能发衣机',
    model: 'WD-BH-CL01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能发衣机.jpg'
    ],
    summary: '自动发放手术衣设备',
    features: [
      { icon: '👔', title: '自动发放', desc: '刷卡/人脸识别自动发衣' },
      { icon: '📊', title: '库存管理', desc: '自动统计库存数量' },
      { icon: '👤', title: '权限管理', desc: '不同人员不同领取权限' }
    ],
    specs: [
      { label: '储衣容量', value: '110套' },
      { label: '发放速度', value: '<2秒' },
      { label: '外形尺寸', value: '1600×620×2191.5mm' },
      { label: '屏幕分辨率', value: '1920×1080' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-shoes', 'behavior-locker']
  },

  'behavior-shoes': {
    id: 'behavior-shoes',
    name: '智能发鞋机',
    model: 'WD-BH-SH01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能发鞋机.png'
    ],
    summary: '自动发放手术鞋设备',
    features: [
      { icon: '👟', title: '自动发放', desc: '根据鞋码自动发放' },
      { icon: '📈', title: '库存预警', desc: '库存不足自动提醒' }
    ],
    specs: [
      { label: '储鞋容量', value: '84双' },
      { label: '发放速度', value: '<2秒' },
      { label: '外形尺寸', value: '1600×620×2191.5mm' },
      { label: '屏幕分辨率', value: '1920×1080' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-clothes', 'behavior-locker']
  },

  'behavior-locker': {
    id: 'behavior-locker',
    name: '智能更衣柜',
    model: 'WD-BH-LK01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能更衣柜.jpg'
    ],
    summary: '刷卡/人脸识别智能更衣柜',
    features: [
      { icon: '🔐', title: '安全存储', desc: '个人物品安全存放' },
      { icon: '🧹', title: '易清洁', desc: '医疗级材质，易消毒' },
      { icon: '💡', title: '状态指示', desc: 'LED显示柜门使用状态' }
    ],
    specs: [
      { label: '外形尺寸', value: '1880×400×450mm' },
      { label: '柜体钢板厚度', value: '≥0.8mm' },
      { label: '电控锁寿命', value: '30万次以上' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-clothes', 'behavior-shoes']
  },

  'behavior-collect-clothes': {
    id: 'behavior-collect-clothes',
    name: '智能收衣机',
    model: 'WD-BH-CC01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能收衣机.jpg'
    ],
    summary: '自动回收手术衣设备',
    features: [
      { icon: '👕', title: '自动回收', desc: '自动回收使用过的手术衣' },
      { icon: '📊', title: '统计管理', desc: '回收数量统计' }
    ],
    specs: [
      { label: '外形尺寸', value: '1000×750×1391.5mm' },
      { label: '屏幕分辨率', value: '1920×1080' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-clothes']
  },

  'behavior-collect-shoes': {
    id: 'behavior-collect-shoes',
    name: '智能收鞋机',
    model: 'WD-BH-CS01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: ['../images/products/智能发鞋机.png'],
    summary: '自动回收手术鞋设备',
    features: [
      { icon: '👟', title: '自动回收', desc: '自动回收使用过的手术鞋' },
      { icon: '📈', title: '库存联动', desc: '与发鞋机库存联动' }
    ],
    specs: [
      { label: '外形尺寸', value: '1000×750×1391.5mm' },
      { label: '屏幕分辨率', value: '1920×1080' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-shoes']
  },

  'behavior-shoe-locker': {
    id: 'behavior-shoe-locker',
    name: '智能更鞋柜',
    model: 'WD-BH-SL01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能更鞋柜.jpg'
    ],
    summary: '智能手术鞋存储柜',
    features: [
      { icon: '🗄️', title: '智能存储', desc: '手术鞋智能存储' },
      { icon: '🔐', title: '权限管理', desc: '刷卡领取' }
    ],
    specs: [
      { label: '外形尺寸', value: '1880×400×450mm' },
      { label: '单箱尺寸', value: '225×290×450mm' },
      { label: '电控锁寿命', value: '30万次以上' }
    ],
    scenarios: ['手术部更衣区'],
    relatedProducts: ['behavior-shoes']
  },

  'behavior-scanner': {
    id: 'behavior-scanner',
    name: '手持PAD扫码枪',
    model: 'WD-BH-SC01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/手持PAD扫码枪.jpg'
    ],
    summary: '手术衣鞋扫码领取设备',
    features: [
      { icon: '📱', title: '便携操作', desc: '手持便携设计' },
      { icon: '📊', title: '扫码领用', desc: '扫描RFID标签领用' }
    ],
    specs: [
      { label: '处理器', value: '8核2.0GHz' },
      { label: '操作系统', value: 'Android 11.0' },
      { label: '内存', value: '64GB+4GB' },
      { label: '显示屏', value: '6.21英寸' },
      { label: '防护等级', value: 'IP67' }
    ],
    scenarios: ['手术部更衣室'],
    relatedProducts: ['behavior-clothes', 'behavior-shoes']
  },

  'behavior-door-terminal': {
    id: 'behavior-door-terminal',
    name: '门禁门口机',
    model: 'WD-BH-DT01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/门禁门口机.jpg'
    ],
    summary: '手术部门禁管理终端',
    features: [
      { icon: '🔐', title: '门禁管理', desc: '手术部门禁控制' },
      { icon: '👤', title: '身份识别', desc: '人脸/刷卡识别' }
    ],
    specs: [
      { label: '显示屏', value: '5英寸触摸屏' },
      { label: '分辨率', value: '480×854' },
      { label: '识别准确率', value: '99.99%' },
      { label: '人像容量', value: '10000张' },
      { label: '防护等级', value: 'IP65' }
    ],
    scenarios: ['手术部门口'],
    relatedProducts: ['behavior-locker']
  },

  'cleaning-bracelet': {
    id: 'cleaning-bracelet',
    name: '智能清洁手环',
    model: 'WD-CL-BR01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/智能清洁手环.jpg'
    ],
    summary: '手术室人员清洁状态智能监测',
    features: [
      { icon: '⌚', title: '佩戴监测', desc: '佩戴手环监测清洁状态' },
      { icon: '🔔', title: '提醒功能', desc: '清洁时间提醒' }
    ],
    specs: [
      { label: '内置存储', value: '16GB' },
      { label: '运行内存', value: '1.5GB' },
      { label: '屏幕尺寸', value: '1.4英寸' },
      { label: '屏幕分辨率', value: '450×450' }
    ],
    scenarios: ['手术室'],
    relatedProducts: ['cleaning-info-screen']
  },

  'cleaning-info-screen': {
    id: 'cleaning-info-screen',
    name: '清洁信息智能公告屏',
    model: 'WD-CL-IS01',
    category: 'behavior',
    categoryName: '手术行为管理',
    mainCategory: 'cat-behavior',
    mainCategoryName: '智能更衣与环境监测',
    images: [
      '../images/products/清洁信息智能公告屏.jpg'
    ],
    summary: '显示手术室清洁状态信息',
    features: [
      { icon: '📺', title: '状态显示', desc: '显示清洁状态' },
      { icon: '⏰', title: '时间记录', desc: '记录清洁时间' }
    ],
    specs: [
      { label: '显示区域', value: '1209.6×680.4mm' },
      { label: '分辨率', value: '1920×1080' },
      { label: '功率', value: '≤110W' },
      { label: '可视角度', value: '178°' }
    ],
    scenarios: ['手术室走廊'],
    relatedProducts: ['cleaning-bracelet']
  },

  // ==================== 远程会诊 ====================
  'remote-panorama-camera': {
    id: 'remote-panorama-camera',
    name: '远程会诊全景摄像机',
    model: 'WD-RC-PC01',
    category: 'remote',
    categoryName: '远程会诊',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: ['../images/products/远程会诊全景摄像机.jpg'],
    summary: '全景视频采集，支持远程会诊',
    features: [
      { icon: '📷', title: '全景视角', desc: '180°全景拍摄' },
      { icon: '🌐', title: '远程传输', desc: '低延迟远程传输' }
    ],
    specs: [
      { label: '传感器', value: '1/2.5英寸SONY CMOS' },
      { label: '有效像素', value: '851万' },
      { label: '光学变焦', value: '12X' },
      { label: '分辨率', value: '4K@60fps' }
    ],
    scenarios: ['会诊室', '手术室'],
    relatedProducts: ['remote-media-server']
  },

  'remote-media-server': {
    id: 'remote-media-server',
    name: '远程会诊媒体伺服服务器',
    model: 'WD-RC-MS01',
    category: 'remote',
    categoryName: '远程会诊',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: ['../images/products/数字化解码服务器.png'],
    summary: '远程会诊流媒体处理服务器',
    features: [
      { icon: '🖥️', title: '流媒体处理', desc: '专业流媒体转发' },
      { icon: '🔒', title: '安全传输', desc: '加密传输保障' }
    ],
    specs: [
      { label: '用户权限', value: '多级用户权限管理' },
      { label: '网卡', value: '千兆网卡' },
      { label: '视频格式', value: 'H.264+H.265+AAC' },
      { label: '尺寸', value: '机架(2U)' }
    ],
    scenarios: ['机房', '会诊中心'],
    relatedProducts: ['remote-panorama-camera']
  },

  'remote-screen': {
    id: 'remote-screen',
    name: '远程会诊屏',
    model: 'WD-RC-RS01',
    category: 'remote',
    categoryName: '远程会诊',
    mainCategory: 'cat-comm',
    mainCategoryName: '智慧护理与ICU',
    images: [
      '../images/products/远程会诊屏.jpg'
    ],
    summary: '远程视频会诊显示终端',
    features: [
      { icon: '📹', title: '视频会诊', desc: '高清视频通话' },
      { icon: '👥', title: '多方会诊', desc: '支持多方视频会诊' }
    ],
    specs: [
      { label: '面板尺寸', value: '86英寸' },
      { label: '分辨率', value: '3840*2160' },
      { label: '亮度', value: '500cd/m²' },
      { label: '操作系统', value: 'Windows10' }
    ],
    scenarios: ['会诊室'],
    relatedProducts: ['remote-panorama-camera']
  },

  // ==================== 腾讯云服务 ====================
  'tencent-avatar': {
    id: 'tencent-avatar',
    name: '腾讯云智能数智人',
    model: 'TC-AV-01',
    category: 'tencent',
    categoryName: '腾讯云服务',
    mainCategory: 'cat-tencent',
    mainCategoryName: '腾讯云服务',
    images: [
      '../images/products/腾讯云智能数智人.jpg',
      '../images/products/腾讯云智能数智人 (2).jpg'
    ],
    summary: 'AI虚拟数字人智能交互服务',
    features: [
      { icon: '🤖', title: 'AI驱动', desc: 'AI驱动的虚拟形象' },
      { icon: '💬', title: '智能对话', desc: '自然语言智能对话' },
      { icon: '🎭', title: '多场景', desc: '导诊、咨询、客服等场景' }
    ],
    specs: [],
    scenarios: ['医院大厅', '门诊导诊', '客服中心'],
    relatedProducts: ['tencent-ioa']
  },

  'tencent-ioa': {
    id: 'tencent-ioa',
    name: '腾讯iOA零信任管理平台',
    model: 'TC-IOA-01',
    category: 'tencent',
    categoryName: '腾讯云服务',
    mainCategory: 'cat-tencent',
    mainCategoryName: '腾讯云服务',
    images: [
      '../images/products/腾讯 iOA 零信任管理平台.jpg'
    ],
    summary: '企业零信任安全访问管理',
    features: [
      { icon: '🔒', title: '零信任', desc: '持续验证，永不信任' },
      { icon: '📱', title: '多终端', desc: 'PC、移动端统一管理' },
      { icon: '📊', title: '审计日志', desc: '访问行为全程审计' }
    ],
    specs: [],
    scenarios: ['医院信息科', '远程办公'],
    relatedProducts: ['tencent-avatar']
  }
};

// 获取产品数据
function getProduct(id) {
  return productsData[id] || null;
}

// 获取相关产品
function getRelatedProducts(productId, limit = 4) {
  const product = getProduct(productId);
  if (!product || !product.relatedProducts) return [];

  return product.relatedProducts
    .map(id => getProduct(id))
    .filter(p => p !== null)
    .slice(0, limit);
}
