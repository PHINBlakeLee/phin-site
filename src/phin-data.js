// PHIN 정적 데이터
// 경로: src/phin-data.js
// _ds_bundle.js 의존성 제거 후 독립 데이터 파일

window.PHIN = window.PHIN || {};

window.PHIN.typeNames = {
  ESTJ:'현실 관리형', ENTJ:'전략 주도형',
  ESFJ:'돌봄 실천형', ENFJ:'공감 리더형',
  ESTP:'즉흥 행동형', ENTP:'도전 탐구형',
  ESFP:'활기 공감형', ENFP:'열정 탐색형',
  ISTJ:'원칙 수호형', INTJ:'독립 설계형',
  ISFJ:'조용한 돌봄형',INFJ:'통찰 계획형',
  ISTP:'분석 행동형', INTP:'사색 탐구형',
  ISFP:'감성 실천형', INFP:'이상 추구형',
};

window.PHIN.personalityQs = [
  { id:'EI', q:'새로운 사람들과 함께할 때 나는?',
    A:{ label:'에너지가 생기고 활기차진다' },
    B:{ label:'금방 피로해지고 혼자 있고 싶어진다' } },
  { id:'SN', q:'문제를 해결할 때 나는?',
    A:{ label:'경험과 검증된 방법을 따른다' },
    B:{ label:'새로운 가능성과 아이디어를 탐색한다' } },
  { id:'TF', q:'중요한 결정을 내릴 때 나는?',
    A:{ label:'논리와 객관적 사실을 우선시한다' },
    B:{ label:'감정과 사람들에게 미치는 영향을 고려한다' } },
  { id:'JP', q:'일상에서 나는?',
    A:{ label:'계획을 세우고 체계적으로 움직인다' },
    B:{ label:'상황에 맞게 유연하게 대응한다' } },
];

window.PHIN.bodyIssues = [
  { key:'weight',    icon:'⚖️', label:'체중',       desc:'비만 또는 과체중' },
  { key:'fatigue',   icon:'😴', label:'만성피로',    desc:'항상 피곤하고 에너지 부족' },
  { key:'sleep',     icon:'🌙', label:'수면',        desc:'잠들기 어렵거나 수면의 질 저하' },
  { key:'stress',    icon:'🧠', label:'스트레스',    desc:'정신적 압박과 긴장' },
  { key:'back',      icon:'🦴', label:'허리·관절',   desc:'통증 또는 불편함' },
  { key:'digestion', icon:'🫃', label:'소화',        desc:'더부룩함, 변비, 속쓰림' },
  { key:'skin',      icon:'✨', label:'피부',        desc:'트러블, 칙칙함, 노화' },
  { key:'none',      icon:'💪', label:'별로 없음',   desc:'전반적으로 건강한 편' },
];

window.PHIN.digital = [
  { key:'low',  icon:'📵', label:'1시간 미만',  desc:'의식적으로 줄이는 편' },
  { key:'mid',  icon:'📱', label:'1~3시간',     desc:'평균적인 사용' },
  { key:'high', icon:'📲', label:'3~6시간',     desc:'꽤 많이 사용하는 편' },
  { key:'very', icon:'🖥️', label:'6시간 이상',  desc:'거의 항상 화면을 본다' },
];

window.PHIN.lifestyle = [
  { key:'smoke',     icon:'🚬', label:'흡연',         desc:'현재 담배를 피운다' },
  { key:'drink',     icon:'🍺', label:'음주',          desc:'주 2회 이상 음주' },
  { key:'nosport',   icon:'🛋️', label:'운동 안함',     desc:'주 1회 미만 운동' },
  { key:'latenight', icon:'🌙', label:'야식',          desc:'밤 10시 이후 식사 잦음' },
  { key:'irregular', icon:'⏰', label:'불규칙 식사',   desc:'끼니를 자주 거른다' },
  { key:'highsalt',  icon:'🧂', label:'짜고 매운 음식',desc:'자극적인 식단 선호' },
  { key:'caffeine',  icon:'☕', label:'카페인 과다',   desc:'하루 3잔 이상 커피·에너지음료' },
  { key:'none',      icon:'🥗', label:'해당 없음',     desc:'건강한 생활을 유지 중' },
];

window.PHIN.steps = [
  { key:'low',  icon:'🐌', label:'3,000보 미만',   desc:'거의 앉아서 생활' },
  { key:'mid',  icon:'🚶', label:'3,000~7,000보',  desc:'가벼운 이동 수준' },
  { key:'high', icon:'🏃', label:'7,000~10,000보', desc:'꽤 활동적인 편' },
  { key:'very', icon:'⚡', label:'10,000보 이상',  desc:'매우 활동적' },
];

window.PHIN.basics = {
  gender: ['남성','여성'],
  age:    ['20대 초반','20대 후반','30대 초반','30대 후반','40대 초반','40대 후반','50대 이상'],
  height: ['150~160','160~170','170~180','180 이상'],
  weight: ['50~60kg','60~70kg','70~80kg','80~90kg','90kg 이상'],
};

window.PHIN._lastRaw = null;