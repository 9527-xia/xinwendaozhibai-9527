// 解决方案数据
const solutionsData = {
  // 智慧手术室方案
  smart: {
    id: 'smart',
    name: '医院智能化医疗专项',
    subtitle: 'SMART MEDICAL',
    desc: '以数字化手术室为核心，整合手术示教、ICU探视、远程会诊等系统，打造智慧医院手术部整体解决方案',
    color: '#0066cc',
    features: [
      '数字化手术室系统',
      'ICU探视对讲系统',
      '手术示教系统',
      '远程会诊平台',
      '手术室集中控制',
      '手术行为管理'
    ],
    solutions: [
      // 示教系统优先
      { id: 'mobile-teaching', title: '移动示教系统', desc: '移动示教车、无线传输、多终端观看', image: 'smart/mobile-teaching.html' },
      { id: 'operation-teaching', title: '手术示教系统', desc: '术野摄像机、全景摄像、示教直播', image: 'smart/operation-teaching.html' },
      // 其他系统
      { id: 'behavior', title: '排队叫号系统', desc: '排队管理、叫号显示、数据统计', image: 'smart/behavior.html' },
      { id: 'nurse-intercom', title: '医护对讲系统', desc: '人员准入、更衣管理、追溯记录', image: 'smart/nurse-intercom.html' },
      { id: 'or-call', title: '手术室对讲系统', desc: '医护呼叫、手术调度、信息发布', image: 'smart/or-call.html' },
      { id: 'or-control', title: '信息发布系统', desc: '设备集中控制、环境监测、手术排班', image: 'smart/or-control.html' },
      { id: 'digital-or', title: '数字化手术系统', desc: '手术数字化管理、音视频集成、信息交互', image: 'smart/digital-or.html' },
      { id: 'icu-visit', title: 'ICU探视对讲系统', desc: '床边探视终端、移动探视APP、探视管理后台', image: 'smart/icu-visit.html' },
      { id: 'mobile-visit', title: '移动探视对讲系统', desc: '灵活便捷的移动探视解决方案', image: 'smart/mobile-visit.html' },
      { id: 'remote-consultation', title: '远程会诊系统', desc: '跨地域医疗会诊解决方案，实现优质医疗资源共享', image: 'smart/remote-consultation.html' }
    ]
  },
  // 医院净化方案
  purify: {
    id: 'purify',
    name: '医院净化（手术部/ICU）',
    subtitle: 'HOSPITAL PURIFICATION',
    desc: '提供手术室、ICU、实验室等医疗场所的空气净化解决方案，保障洁净环境',
    color: '#10b981',
    features: [
      '手术示教系统',
      'ICU探视对讲系统',
      'ICU信息管理系统',
      '医疗云直播系统',
      '设备管理系统',
      '移动示教系统'
    ],
    solutions: [
      // 示教系统优先
      { id: 'dispenser', title: '移动示教系统', desc: '移动示教车、无线传输、多终端观看', image: 'purify/dispenser.html' },
      { id: 'laminar-flow', title: '手术示教系统', desc: '术野摄像机、全景摄像、示教直播', image: 'purify/laminar-flow.html' },
      // 其他系统
      { id: 'behavior', title: '手术行为管理系统', desc: '人员准入、更衣管理、追溯记录', image: 'purify/behavior.html' },
      { id: 'access', title: 'ICU探视对讲系统', desc: '床边探视终端、移动探视APP、探视管理后台', image: 'purify/access.html' },
      { id: 'ac-unit', title: '医疗云直播系统', desc: '高清直播、多方协作、数据共享', image: 'purify/ac-unit.html' },
      { id: 'air-purifier', title: '数字化手术系统', desc: '手术数字化管理、音视频集成、信息交互', image: 'purify/air-purifier.html' },
      { id: 'collector', title: '设备管理系统', desc: '设备档案、维护管理、使用统计', image: 'purify/collector.html' },
      { id: 'locker', title: 'ICU信息管理系统', desc: 'ICU信息系统、设备管理', image: 'purify/locker.html' },
      { id: 'monitoring', title: '手术室集中控制系统', desc: '设备集中控制、环境监测、手术排班', image: 'purify/monitoring.html' },
      { id: 'shoe-cabinet', title: '手术信息管理平台(手麻)', desc: '手术麻醉全过程信息化管理', image: 'purify/shoe-cabinet.html' }
    ]
  },
  // 信息科方案
  info: {
    id: 'info',
    name: '医院信息化',
    subtitle: 'HOSPITAL IT',
    desc: '医院信息化整体解决方案，包括HIS、EMR、智慧病房、远程医疗等核心系统',
    color: '#8b5cf6',
    features: [
      'EMR电子病历',
      '腾讯云合作',
      'ICU信息系统',
      '远程医疗平台',
      '智慧病房系统'
    ],
    solutions: [
      { id: 'emr', title: '互联网医院系统', desc: '电子病历系统、病历管理、数据共享', image: 'info/emr.html' },
      { id: 'his', title: '医院体检报告解读系统', desc: '医院综合信息管理平台', image: 'info/his.html' },
      { id: 'icu-info', title: 'ICU信息管理系统', desc: 'ICU信息系统、设备管理', image: 'info/icu-info.html' },
      { id: 'smart-ward', title: '手术室信息控制系统', desc: '手术室设备与信息一体化管理，实现智能化手术环境控制', image: 'info/smart-ward.html' },
      { id: 'telemedicine', title: '手术信息管理平台(手麻)', desc: '手术麻醉全过程信息化管理', image: 'info/telemedicine.html' },
      { id: 'tencent-cloud', title: '远程会诊系统', desc: '腾讯云医疗解决方案、云存储', image: 'info/tencent-cloud.html' }
    ]
  }
};
