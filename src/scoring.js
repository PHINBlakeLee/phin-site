// ============================================================
// PHIN Score Engine v5
// 경로: src/scoring.js
// 2026.06.10 — 웹 answers 변환 로직 포함
// ============================================================

(function () {
  'use strict';

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function ageMultiplier(age) {
    if (age < 30) return 0.6;
    if (age < 40) return 0.85;
    if (age < 50) return 1.0;
    if (age < 60) return 1.3;
    if (age < 70) return 1.6;
    return 1.8;
  }

  function smokingDeduction({ smokingStatus, cigarettesPerDay, quitMonths, age }) {
    if (smokingStatus === 'none') return 0;
    let base = 0;
    if (smokingStatus === 'current') {
      if (cigarettesPerDay >= 40)      base = 25;
      else if (cigarettesPerDay >= 20) base = 20;
      else if (cigarettesPerDay >= 10) base = 13;
      else                             base = 6;
    } else if (smokingStatus === 'quit') {
      base = quitMonths >= 24 ? 0 : quitMonths >= 12 ? 5 : quitMonths >= 6 ? 10 : 16;
    }
    return clamp(base * ageMultiplier(age), 0, 25);
  }

  function drinkingDeduction({ drinkingStatus, quitMonths, age }) {
    let base = 0;
    switch (drinkingStatus) {
      case 'daily':    base = 20; break;
      case 'frequent': base = 14; break;
      case 'moderate': base = 8;  break;
      case 'light':    base = 3;  break;
      case 'quit':
        base = quitMonths >= 24 ? 0 : quitMonths >= 12 ? 3 : 7;
        break;
      default: base = 0;
    }
    return clamp(base * ageMultiplier(age), 0, 20);
  }

  function exerciseDeduction({ exerciseDaysPerWeek, age }) {
    let base = 0;
    if (exerciseDaysPerWeek === 0)      base = 15;
    else if (exerciseDaysPerWeek === 1) base = 9;
    else if (exerciseDaysPerWeek === 2) base = 4;
    else                                base = 0;
    return clamp(base * ageMultiplier(age), 0, 15);
  }

  function sleepDeduction(sleepHours) {
    if (sleepHours <= 5)   return 15;
    if (sleepHours <= 6)   return 8;
    if (sleepHours <= 6.5) return 4;
    if (sleepHours <= 8.5) return 0;
    return 4;
  }

  function stressDeduction(stressLevel) {
    if (stressLevel === 4) return 10;
    if (stressLevel === 3) return 6;
    if (stressLevel === 2) return 2;
    return 0;
  }

  function bmiDeduction(bmi) {
    if (bmi >= 35)   return 12;
    if (bmi >= 30)   return 8;
    if (bmi >= 27)   return 4;
    if (bmi >= 25)   return 2;
    if (bmi >= 18.5) return 0;
    return 4;
  }

  function recoveryBonus({ smokingStatus, smokingQuitMonths, drinkingStatus, drinkingQuitMonths, exerciseDaysPerWeek, exerciseDuration, restingHeartRate }) {
    let bonus = 0;
    if (smokingStatus === 'quit') {
      if (smokingQuitMonths >= 24)      bonus += 10;
      else if (smokingQuitMonths >= 12) bonus += 5;
    }
    if (drinkingStatus === 'quit') {
      if (drinkingQuitMonths >= 24)      bonus += 8;
      else if (drinkingQuitMonths >= 12) bonus += 4;
    }
    if (exerciseDaysPerWeek >= 3) {
      if (exerciseDuration === 'over6m')     bonus += 7;
      else if (exerciseDuration === '3to6m') bonus += 3;
    }
    if (restingHeartRate > 0) {
      if (restingHeartRate <= 60)      bonus += 5;
      else if (restingHeartRate <= 70) bonus += 2;
    }
    return clamp(bonus, 0, 25);
  }

  function getTier({ rawScore, age, gender, hasOcr, ocrCount }) {
    const ageIdx = age < 30 ? 0 : age < 40 ? 1 : age < 50 ? 2 : age < 60 ? 3 : 4;
    const maleThresholds = [
      [80, 68, 54, 40, 25],
      [77, 65, 51, 37, 22],
      [74, 62, 48, 34, 19],
      [70, 58, 44, 30, 15],
      [65, 53, 39, 25, 10],
    ];
    const offset = gender === 'female' ? 5 : 0;
    const t = maleThresholds[ageIdx];
    if (rawScore >= t[0]+offset && hasOcr && ocrCount >= 3) return 'THE_PHIN';
    if (rawScore >= t[0]+offset && hasOcr && ocrCount >= 1) return 'BLACK';
    if (rawScore >= t[1]+offset) return 'GREEN';
    if (rawScore >= t[2]+offset) return 'BLUE';
    if (rawScore >= t[3]+offset) return 'YELLOW';
    if (rawScore >= t[4]+offset) return 'RED';
    return 'GRAY';
  }

  function tierInfo(tier) {
    const map = {
      'THE_PHIN': { label: '최상위 1%',  color: '#FFD700', name: 'THE PHiN' },
      'BLACK':    { label: '최상위 5%',  color: '#E5E5E5', name: 'BLACK PHiN' },
      'GREEN':    { label: '상위권',     color: '#34D378', name: 'GREEN PHiN' },
      'BLUE':     { label: '중상위',     color: '#60A5FA', name: 'BLUE PHiN' },
      'YELLOW':   { label: '중위',       color: '#FBBF24', name: 'YELLOW PHiN' },
      'RED':      { label: '중하위',     color: '#F87171', name: 'RED PHiN' },
      'GRAY':     { label: '하위권',     color: '#9CA3AF', name: 'GRAY PHiN' },
    };
    return map[tier] || map['GRAY'];
  }

  function accuracyIndex({ hasOcr, ocrCount, hasWatchData, hasHeartRate }) {
    let acc = 0.80;
    if (hasHeartRate)  acc += 0.02;
    if (hasWatchData)  acc += 0.03;
    if (hasOcr) {
      acc += ocrCount >= 5 ? 0.10 : ocrCount >= 3 ? 0.08 : ocrCount >= 2 ? 0.06 : 0.04;
    }
    return clamp(acc, 0.80, 0.95);
  }

  function calcBodyAge(age, rawScore) {
    const diff = (55.0 - rawScore) * 0.3;
    return Math.round(clamp(age + diff, 10, 99));
  }

  // ════════════════════════════════════════════════════════
  // 웹 설문 answers → v5 파라미터 변환
  // ════════════════════════════════════════════════════════
  function convertWebAnswers(answers) {
    const ls      = answers.lifestyle  || [];
    const issues  = answers.bodyIssues || [];
    const stepKey = answers.steps      || 'low';
    const digital = answers.digital    || 'mid';

    // lifestyle/bodyIssues 없을 때 → steps 기반으로 운동 유추
    // steps=low면 운동 안하는 것으로 처리
    const noExerciseSignal = ls.length === 0 && stepKey === 'low';

    const age    = parseInt(answers.ageNum    || answers.age    || 35);
    const gender = (answers.gender === 'female' || answers.gender === '여성') ? 'female' : 'male';
    const height = parseFloat(answers.heightNum || answers.height || 170);
    const weight = parseFloat(answers.weightNum || answers.weight || 70);
    const bmi    = height > 0 ? weight / Math.pow(height / 100, 2) : 22;

    // 흡연
    const smokingStatus    = ls.includes('smoke') ? 'current' : 'none';
    const cigarettesPerDay = smokingStatus === 'current' ? 20 : 0;

    // 음주 — 'drink' 선택 시 주 4~5회(frequent)로 가정
    const drinkingStatus = ls.includes('drink') ? 'frequent' : 'none';

    // 수면 — bodyIssues에 'sleep' 있으면 5h
    const sleepHours = issues.includes('sleep') ? 5.0 : 7.0;

    // 운동 — 'nosport' 있으면 0일, steps로 보완
    let exerciseDays;
    if (ls.includes('nosport') || noExerciseSignal) {
      exerciseDays = 0;
    } else {
      exerciseDays = stepKey === 'very' ? 4 : stepKey === 'high' ? 3 : stepKey === 'mid' ? 2 : 1;
    }

    // 스트레스
    let stressLevel = 1;
    if (issues.includes('stress'))                        stressLevel += 2;
    if (ls.includes('latenight') || ls.includes('irregular')) stressLevel += 1;
    if (digital === 'high' || digital === 'very')         stressLevel += 1;
    stressLevel = clamp(stressLevel, 1, 4);

    return {
      age, gender, bmi,
      smokingStatus, cigarettesPerDay, smokingQuitMonths: 0,
      drinkingStatus, drinkingQuitMonths: 0,
      sleepHours, exerciseDaysPerWeek: exerciseDays,
      exerciseDuration: 'under3m',
      stressLevel, restingHeartRate: 0,
      hasOcr: false, ocrCount: 0, hasWatchData: false, exerciseBonus: 0,
    };
  }

  // ════════════════════════════════════════════════════════
  // 메인 계산 함수
  // ════════════════════════════════════════════════════════
  function score(answers) {
    const p = convertWebAnswers(answers);

    const sd = smokingDeduction({ smokingStatus: p.smokingStatus, cigarettesPerDay: p.cigarettesPerDay, quitMonths: p.smokingQuitMonths, age: p.age });
    const dd = drinkingDeduction({ drinkingStatus: p.drinkingStatus, quitMonths: p.drinkingQuitMonths, age: p.age });
    const ed = exerciseDeduction({ exerciseDaysPerWeek: p.exerciseDaysPerWeek, age: p.age });
    const sl = sleepDeduction(p.sleepHours);
    const st = stressDeduction(p.stressLevel);
    const bm = bmiDeduction(p.bmi);

    const totalDeduction = clamp(sd + dd + ed + sl + st + bm, 0, 75);

    const rb         = recoveryBonus({ smokingStatus: p.smokingStatus, smokingQuitMonths: p.smokingQuitMonths, drinkingStatus: p.drinkingStatus, drinkingQuitMonths: p.drinkingQuitMonths, exerciseDaysPerWeek: p.exerciseDaysPerWeek, exerciseDuration: p.exerciseDuration, restingHeartRate: p.restingHeartRate });
    const totalBonus = clamp(rb, 0, 25);

    const rawScore   = clamp(100 - totalDeduction + totalBonus, 0, 100);
    const finalScore = Math.round(rawScore);

    const tier = getTier({ rawScore, age: p.age, gender: p.gender, hasOcr: p.hasOcr, ocrCount: p.ocrCount });
    const info = tierInfo(tier);
    const acc  = accuracyIndex({ hasOcr: p.hasOcr, ocrCount: p.ocrCount, hasWatchData: p.hasWatchData, hasHeartRate: p.restingHeartRate > 0 });
    const bAge = calcBodyAge(p.age, rawScore);

    // Supabase 저장용
    window.PHIN._lastRaw = {
      gender:          p.gender,
      age:             p.age,
      height:          parseFloat(answers.heightNum || 170),
      weight:          parseFloat(answers.weightNum || 70),
      bmi:             parseFloat(p.bmi.toFixed(1)),
      mbti:            answers.mbtiDirect || null,
      web_phin_score:  finalScore,
      web_body_age:    bAge,
      smoking_status:  p.smokingStatus,
      drinking_status: p.drinkingStatus,
    };

    // 디버그 로그
    console.log('[PHINv5]', { age: p.age, gender: p.gender, bmi: p.bmi.toFixed(1), smokingStatus: p.smokingStatus, drinkingStatus: p.drinkingStatus, exerciseDays: p.exerciseDaysPerWeek, sleepHours: p.sleepHours, stressLevel: p.stressLevel });
    console.log('[PHINv5 감점]', { sd, dd, ed, sl, st, bm, totalDeduction, totalBonus, rawScore: rawScore.toFixed(1), tier });

    return {
      totalScore: rawScore,
      finalScore,
      tier,
      tierName:      info.name,
      tierLabel:     info.label,
      tierColor:     info.color,
      bodyAge:       bAge,
      accuracyIndex: acc,
      breakdown:     { smoking: sd, drinking: dd, exercise: ed, sleep: sl, stress: st, bmi: bm, bonus: totalBonus },
      score: finalScore, // 하위 호환
    };
  }

  if (typeof window !== 'undefined') {
    window.PHIN = window.PHIN || {};
    window.PHIN.score         = score;
    window.PHIN.tierInfo      = tierInfo;
    window.PHIN.accuracyIndex = accuracyIndex;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { score, tierInfo, accuracyIndex };
  }
})();
