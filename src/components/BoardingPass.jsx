// src/components/BoardingPass.jsx
import React from "react";
import "./BoardingPass.css";

/* ── 리얼 느낌의 가짜 Barcode (CODE128 느낌) ───────────────── */
function FakeBarcode({ value = "JK2025 • 1A", showText = true }) {
  // 값으로부터 항상 같은 패턴이 나오도록 간단한 시드
  let seed = 7;
  for (const ch of value) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;

  // 막대: 1~4px 가변 폭, 양쪽 quiet zone 12px
  const bars = [];
  let rnd = seed, x = 12;
  const h = 48;

  for (let i = 0; i < 220; i++) {
    rnd = (rnd * 1664525 + 1013904223) >>> 0;
    const w = 1 + (rnd % 4);
    const isBlack = i % 2 === 0;
    if (isBlack) bars.push({ x, w });
    x += w;
    if (x > 320) break; // 우측 quiet zone 남기고 종료
  }
  const width = x + 12;

  // 텍스트 영역 여유를 늘려 겹침 방지
  const vbH = showText ? h + 30 : h + 12;

  return (
    <div className="barcode-wrap" role="img" aria-label={`Barcode for ${value}`}>
      <svg viewBox={`0 0 ${width} ${vbH}`} className="barcode-svg" shapeRendering="crispEdges">
        <rect x="0" y="0" width={width} height={vbH} fill="#fff" />
        {bars.map((b, i) => (
          <rect key={i} x={b.x} y="8" width={b.w} height={h} fill="#111" />
        ))}
        {showText && (
          <text
            x={width / 2}
            y={h + 22}                 // 글자를 더 아래로 내려 겹침 제거
            textAnchor="middle"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="10"
            letterSpacing=".08em"
          >
            {value}
          </text>
        )}
      </svg>
    </div>
  );
}

/* ── 리얼 느낌의 가짜 QR (v1 21x21, finder/타이밍 패턴 포함) ─── */
function FakeQR({ value = "JK2025-UIUX-1A", size = 112 }) {
  const N = 21; // QR v1
  // 시드
  let seed = 13;
  for (const ch of value) seed = (seed * 33 + ch.charCodeAt(0)) >>> 0;

  const m = Array.from({ length: N }, () => Array(N).fill(false));

  // finder 7x7
  const drawFinder = (ox, oy) => {
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 7; x++) {
        const border = x === 0 || y === 0 || x === 6 || y === 6;
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        if (border || core) m[oy + y][ox + x] = true;
      }
    }
  };
  drawFinder(0, 0);
  drawFinder(N - 7, 0);
  drawFinder(0, N - 7);

  // 타이밍 패턴
  for (let i = 8; i < N - 8; i++) {
    m[6][i] = i % 2 === 0;
    m[i][6] = i % 2 === 0;
  }

  // 나머지 영역 시드 기반 채움(약 40% 밀도)
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const reserved =
        (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7) ||
        x === 6 || y === 6;
      if (reserved) continue;
      seed = (seed * 1103515245 + 12345) >>> 0;
      m[y][x] = (seed & 0xff) < 102;
    }
  }

  const cell = Math.floor(size / N);
  const pad = Math.floor((size - cell * N) / 2);
  const total = cell * N + pad * 2;

  return (
    <div className="qr-wrap" role="img" aria-label={`QR for ${value}`}>
      <svg
        viewBox={`0 0 ${total} ${total}`}
        width={total}
        height={total}
        shapeRendering="crispEdges"
      >
        <rect width={total} height={total} fill="#fff" />
        {m.flatMap((row, y) =>
          row.map((on, x) =>
            on ? (
              <rect
                key={`${x}-${y}`}
                x={pad + x * cell}
                y={pad + y * cell}
                width={cell}
                height={cell}
                fill="#111"
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}

/* ── 실제 티켓 ───────────────────────────────────────────── */
export default function BoardingPass({ tearing = false }) {
  return (
    <div className={`bp ${tearing ? "is-tearing" : ""}`}>
      {/* 본표(왼쪽) */}
      <div className="panel panel-left">
        <div className="panel-inner">
          <div className="brand">
            <span className="brand-mark">JK</span>
            <span className="brand-name">Jenny Air</span>
          </div>

          <h3 className="title">BOARDING PASS</h3>

          <div className="grid">
            <div className="label">Passenger</div>
            <div className="value">Users</div>

            <div className="label">Destination</div>
            <div className="value">Jenny’s Design Journey</div>

            <div className="label">Boarding</div>
            <div className="value">Now</div>
          </div>

          <FakeBarcode value="JK2025 • 1A" showText />
        </div>
      </div>

      {/* 절개선 */}
      <div className="perf" aria-hidden="true">
        <span className="scissors" aria-hidden="true">✂︎</span>
      </div>

      {/* 스텁(오른쪽) */}
      <div className="panel panel-right">
        <div className="panel-inner right">
          <div className="stub-grid">
            <div className="stub-item">
              <div className="stub-label">Gate</div>
              <div className="stub-value mono">UIUX DESIGN</div>
            </div>

            <div className="stub-item seat">
              <div className="stub-label">Seat</div>
              <div className="stub-value big mono">12A</div>
            </div>

            <div className="stub-item">
              <div className="stub-label">Flight</div>
              <div className="stub-value mono">NY0124</div>
            </div>
          </div>

          <FakeQR value="JK2025-UIUX-1A" size={112} />
        </div>
      </div>
    </div>
  );
}
