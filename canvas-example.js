// Canvas API 사용 예제 (Node.js)
// PNG 이미지 생성용

const { createCanvas } = require('canvas');
const fs = require('fs');

// 1. 캔버스 생성 (너비, 높이)
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// 2. 배경 그리기
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 1200, 630);

// 3. 원 그리기 (타이어)
ctx.fillStyle = '#333333';
ctx.beginPath();
ctx.arc(300, 315, 180, 0, Math.PI * 2);
ctx.fill();

// 4. 텍스트 쓰기
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 72px Arial';
ctx.textAlign = 'center';
ctx.fillText('F1 REACTION TEST', 850, 200);

// 5. 그라디언트 사용
const gradient = ctx.createLinearGradient(0, 0, 1200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');
ctx.fillStyle = gradient;
ctx.fillRect(0, 500, 1200, 50);

// 6. PNG로 저장
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('output.png', buffer);

/* 주요 Canvas API 메서드:
- fillRect(x, y, width, height): 사각형 채우기
- strokeRect(x, y, width, height): 사각형 테두리
- arc(x, y, radius, startAngle, endAngle): 원/호 그리기
- fillText(text, x, y): 텍스트 쓰기
- createLinearGradient(): 선형 그라디언트
- createRadialGradient(): 방사형 그라디언트
- drawImage(): 이미지 그리기
*/