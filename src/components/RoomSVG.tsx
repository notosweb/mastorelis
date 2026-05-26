"use client";

interface RoomSVGProps {
  wallColor: string;
  accentWallColor: string;
  ceilingColor: string;
  onClickWall: () => void;
  onClickAccent: () => void;
  onClickCeiling: () => void;
  activeZone: string | null;
}

export function LivingRoomSVG({
  wallColor,
  accentWallColor,
  ceilingColor,
  onClickWall,
  onClickAccent,
  onClickCeiling,
  activeZone,
}: RoomSVGProps) {
  return (
    <svg viewBox="0 0 1200 750" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lv-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4A882" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>
        <linearGradient id="lv-wall-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="black" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="lv-shadow-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="black" stopOpacity="0.15" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </linearGradient>
        <filter id="lv-soft-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
        </filter>
        <filter id="lv-lamp-glow">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>

      {/* === CEILING === */}
      <rect
        x="0" y="0" width="1200" height="120"
        fill={ceilingColor}
        onClick={onClickCeiling}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "ceiling" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-95"}`}
      />
      {/* Ceiling shadow line */}
      <rect x="0" y="115" width="1200" height="8" fill="url(#lv-shadow-bottom)" className="pointer-events-none" />

      {/* === MAIN WALL === */}
      <rect
        x="0" y="120" width="1200" height="380"
        fill={wallColor}
        onClick={onClickWall}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "wall" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-[0.97]"}`}
      />
      {/* Wall light gradient overlay */}
      <rect x="0" y="120" width="1200" height="380" fill="url(#lv-wall-light)" className="pointer-events-none" />

      {/* === FLOOR === */}
      <rect x="0" y="500" width="1200" height="250" fill="url(#lv-floor)" className="pointer-events-none" />
      {/* Floor boards */}
      {[520, 555, 590, 625, 660, 695, 730].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="#B89A74" strokeWidth="0.5" opacity="0.4" className="pointer-events-none" />
      ))}
      {/* Baseboard */}
      <rect x="0" y="495" width="1200" height="10" fill="#E8E0D4" className="pointer-events-none" />

      {/* === WINDOW (center-right) === */}
      <g className="pointer-events-none">
        {/* Window frame */}
        <rect x="680" y="160" width="200" height="260" rx="2" fill="#B0D8F0" />
        <rect x="680" y="160" width="200" height="260" rx="2" fill="none" stroke="white" strokeWidth="10" />
        <line x1="780" y1="160" x2="780" y2="420" stroke="white" strokeWidth="5" />
        <line x1="680" y1="290" x2="880" y2="290" stroke="white" strokeWidth="5" />
        {/* Window light on floor */}
        <polygon points="680,500 880,500 950,750 610,750" fill="white" opacity="0.06" />
        {/* Curtain left */}
        <rect x="650" y="140" width="40" height="360" rx="4" fill="#D4C8B4" opacity="0.8" />
        <rect x="660" y="140" width="5" height="360" fill="#C8BCA8" opacity="0.5" />
        {/* Curtain right */}
        <rect x="870" y="140" width="40" height="360" rx="4" fill="#D4C8B4" opacity="0.8" />
        <rect x="880" y="140" width="5" height="360" fill="#C8BCA8" opacity="0.5" />
        {/* Curtain rod */}
        <rect x="640" y="138" width="280" height="4" rx="2" fill="#8A7A6A" />
      </g>

      {/* === SOFA === */}
      <g className="pointer-events-none" filter="url(#lv-soft-shadow)">
        {/* Sofa shadow on floor */}
        <ellipse cx="380" cy="510" rx="220" ry="12" fill="black" opacity="0.08" />
        {/* Sofa base */}
        <rect x="160" y="400" width="440" height="100" rx="16" fill="#B8AFA4" />
        {/* Sofa seat cushions */}
        <rect x="170" y="380" width="210" height="35" rx="12" fill="#C8BFB4" />
        <rect x="390" y="380" width="200" height="35" rx="12" fill="#C8BFB4" />
        {/* Sofa back */}
        <rect x="160" y="310" width="440" height="80" rx="14" fill="#AEA598" />
        {/* Sofa arm left */}
        <rect x="145" y="320" width="35" height="185" rx="12" fill="#A89E92" />
        {/* Sofa arm right */}
        <rect x="580" y="320" width="35" height="185" rx="12" fill="#A89E92" />
        {/* Cushion stitch lines */}
        <line x1="275" y1="390" x2="275" y2="413" stroke="#A8A090" strokeWidth="1" />
        <line x1="490" y1="390" x2="490" y2="413" stroke="#A8A090" strokeWidth="1" />
        {/* Throw pillows */}
        <rect x="195" y="340" width="60" height="50" rx="12" fill="#D4A574" transform="rotate(-8, 225, 365)" />
        <rect x="510" y="340" width="55" height="48" rx="12" fill="#8A9AA8" transform="rotate(6, 537, 365)" />
      </g>

      {/* === COFFEE TABLE === */}
      <g className="pointer-events-none">
        <ellipse cx="380" cy="560" rx="80" ry="6" fill="black" opacity="0.06" />
        <rect x="300" y="530" width="160" height="8" rx="4" fill="#5A4A3A" />
        <rect x="310" y="538" width="4" height="22" fill="#4A3A2A" />
        <rect x="446" y="538" width="4" height="22" fill="#4A3A2A" />
        {/* Items on table */}
        <rect x="340" y="522" width="30" height="10" rx="3" fill="#2A5A3A" opacity="0.7" />
        <circle cx="400" cy="526" r="8" fill="#E8E0D0" />
      </g>

      {/* === FLOOR LAMP (left) === */}
      <g className="pointer-events-none">
        {/* Lamp glow on wall */}
        <ellipse cx="80" cy="250" rx="100" ry="120" fill="white" opacity="0.04" />
        {/* Base */}
        <circle cx="80" cy="500" r="18" fill="#2A2A2A" />
        {/* Pole */}
        <rect x="78" y="200" width="4" height="300" fill="#2A2A2A" />
        {/* Arm */}
        <rect x="80" y="200" width="120" height="3" fill="#2A2A2A" />
        {/* Shade */}
        <circle cx="200" cy="198" r="22" fill="#1A1A1A" />
        {/* Light */}
        <circle cx="200" cy="205" r="4" fill="#FFE8B0" opacity="0.8" />
      </g>

      {/* === RUG === */}
      <g className="pointer-events-none">
        <rect x="200" y="540" width="360" height="160" rx="4" fill="#C8B898" opacity="0.6" />
        <rect x="210" y="550" width="340" height="140" rx="2" fill="none" stroke="#B8A888" strokeWidth="1" opacity="0.5" />
      </g>

      {/* === WALL ART (left) === */}
      <g className="pointer-events-none">
        <rect x="180" y="180" width="120" height="90" rx="2" fill="#2A2A2A" />
        <rect x="185" y="185" width="110" height="80" rx="1" fill="#4A6858" />
        <circle cx="220" cy="210" r="12" fill="#E8C870" opacity="0.5" />
        <rect x="200" y="230" width="80" height="2" fill="#3A5848" opacity="0.5" />
      </g>

      {/* === PLANT (right of sofa) === */}
      <g className="pointer-events-none">
        {/* Pot */}
        <rect x="940" y="440" width="40" height="55" rx="4" fill="#C8A882" />
        <rect x="935" y="435" width="50" height="10" rx="3" fill="#B89872" />
        {/* Leaves */}
        <ellipse cx="960" cy="410" rx="35" ry="35" fill="#3A7A4A" />
        <ellipse cx="945" cy="395" rx="25" ry="30" fill="#4A8A5A" />
        <ellipse cx="975" cy="400" rx="22" ry="28" fill="#3A7040" />
      </g>

      {/* === SIDE TABLE (right) === */}
      <g className="pointer-events-none">
        <circle cx="1050" cy="465" r="25" fill="#1A1A1A" />
        <circle cx="1050" cy="460" r="25" fill="#2A2A2A" />
        {/* Object on table */}
        <rect x="1040" y="448" width="20" height="14" rx="3" fill="#E8D8C0" />
      </g>

      {/* Active zone indicator glow */}
      {activeZone === "wall" && (
        <rect x="0" y="120" width="1200" height="380" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
      {activeZone === "ceiling" && (
        <rect x="0" y="0" width="1200" height="120" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
    </svg>
  );
}

export function BedroomSVG({
  wallColor,
  accentWallColor,
  ceilingColor,
  onClickWall,
  onClickAccent,
  onClickCeiling,
  activeZone,
}: RoomSVGProps) {
  return (
    <svg viewBox="0 0 1200 750" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bd-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4A882" />
          <stop offset="100%" stopColor="#A08060" />
        </linearGradient>
        <linearGradient id="bd-wall-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="black" stopOpacity="0.05" />
        </linearGradient>
        <filter id="bd-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Ceiling */}
      <rect x="0" y="0" width="1200" height="110" fill={ceilingColor}
        onClick={onClickCeiling}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "ceiling" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-95"}`}
      />

      {/* Accent wall (behind bed) */}
      <rect x="0" y="110" width="1200" height="390" fill={accentWallColor}
        onClick={onClickAccent}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "accent" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-[0.97]"}`}
      />
      <rect x="0" y="110" width="1200" height="390" fill="url(#bd-wall-light)" className="pointer-events-none" />

      {/* Floor */}
      <rect x="0" y="500" width="1200" height="250" fill="url(#bd-floor)" className="pointer-events-none" />
      <rect x="0" y="495" width="1200" height="10" fill="#E8E0D4" className="pointer-events-none" />

      {/* === BED === */}
      <g className="pointer-events-none" filter="url(#bd-shadow)">
        {/* Headboard */}
        <rect x="250" y="200" width="700" height="180" rx="12" fill="#5C4A38" />
        <rect x="260" y="210" width="680" height="160" rx="8" fill="#6B583E" />
        {/* Vertical headboard panels */}
        <rect x="280" y="220" width="200" height="140" rx="4" fill="#5C4A38" opacity="0.3" />
        <rect x="500" y="220" width="200" height="140" rx="4" fill="#5C4A38" opacity="0.3" />
        <rect x="720" y="220" width="200" height="140" rx="4" fill="#5C4A38" opacity="0.3" />

        {/* Mattress */}
        <rect x="240" y="370" width="720" height="120" rx="8" fill="#F0EBE2" />
        {/* Duvet */}
        <rect x="250" y="375" width="700" height="105" rx="6" fill="#E8E2D8" />
        <rect x="250" y="375" width="700" height="30" rx="6" fill="#F5F0E8" />
        {/* Pillows */}
        <rect x="290" y="355" width="140" height="40" rx="16" fill="#FAFAF5" />
        <rect x="460" y="355" width="140" height="40" rx="16" fill="#FAFAF5" />
        <rect x="630" y="355" width="140" height="40" rx="16" fill="#FAFAF5" />
        {/* Decorative pillow */}
        <rect x="520" y="360" width="60" height="30" rx="10" fill="#8A9AAA" />
      </g>

      {/* === NIGHTSTAND LEFT === */}
      <g className="pointer-events-none">
        <rect x="100" y="380" width="100" height="110" rx="4" fill="#D4C4B0" />
        <rect x="105" y="420" width="90" height="35" rx="2" fill="#C8B8A4" />
        <rect x="140" y="433" width="20" height="5" rx="2" fill="#A89880" />
        {/* Lamp */}
        <rect x="140" y="340" width="8" height="42" rx="2" fill="#888" />
        <ellipse cx="144" cy="335" rx="22" ry="16" fill="#F0E8D8" />
        <ellipse cx="144" cy="335" rx="8" ry="8" fill="#FFF5E0" opacity="0.5" />
      </g>

      {/* === NIGHTSTAND RIGHT === */}
      <g className="pointer-events-none">
        <rect x="1000" y="380" width="100" height="110" rx="4" fill="#D4C4B0" />
        <rect x="1005" y="420" width="90" height="35" rx="2" fill="#C8B8A4" />
        <rect x="1040" y="433" width="20" height="5" rx="2" fill="#A89880" />
        {/* Lamp */}
        <rect x="1040" y="340" width="8" height="42" rx="2" fill="#888" />
        <ellipse cx="1044" cy="335" rx="22" ry="16" fill="#F0E8D8" />
      </g>

      {/* === WALL ART === */}
      <g className="pointer-events-none">
        <rect x="480" y="145" width="240" height="50" rx="2" fill="#3A3A3A" />
        <rect x="485" y="150" width="230" height="40" rx="1" fill="#7A95A8" />
      </g>

      {/* === RUG === */}
      <g className="pointer-events-none">
        <rect x="280" y="560" width="640" height="140" rx="4" fill="#D4C4B0" opacity="0.5" />
      </g>

      {/* Active zone indicators */}
      {activeZone === "accent" && (
        <rect x="0" y="110" width="1200" height="390" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
      {activeZone === "ceiling" && (
        <rect x="0" y="0" width="1200" height="110" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
    </svg>
  );
}

export function KitchenSVG({
  wallColor,
  accentWallColor,
  ceilingColor,
  onClickWall,
  onClickAccent,
  onClickCeiling,
  activeZone,
}: RoomSVGProps) {
  return (
    <svg viewBox="0 0 1200 750" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="kt-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8D0C4" />
          <stop offset="100%" stopColor="#C0B8AC" />
        </linearGradient>
        <filter id="kt-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Ceiling */}
      <rect x="0" y="0" width="1200" height="100" fill={ceilingColor}
        onClick={onClickCeiling}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "ceiling" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-95"}`}
      />

      {/* Main wall */}
      <rect x="0" y="100" width="1200" height="400" fill={wallColor}
        onClick={onClickWall}
        className={`cursor-pointer transition-all duration-300 ${activeZone === "wall" ? "stroke-blue-400 stroke-[3]" : "hover:brightness-[0.97]"}`}
      />

      {/* Floor tiles */}
      <rect x="0" y="500" width="1200" height="250" fill="url(#kt-floor)" className="pointer-events-none" />
      {/* Tile grid */}
      {[540, 580, 620, 660, 700, 740].map((y, i) => (
        <line key={`h${i}`} x1="0" y1={y} x2="1200" y2={y} stroke="#C8C0B4" strokeWidth="0.5" opacity="0.4" className="pointer-events-none" />
      ))}
      {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200].map((x, i) => (
        <line key={`v${i}`} x1={x} y1="500" x2={x} y2="750" stroke="#C8C0B4" strokeWidth="0.5" opacity="0.3" className="pointer-events-none" />
      ))}

      {/* === UPPER CABINETS === */}
      <g className="pointer-events-none" filter="url(#kt-shadow)">
        <rect x="50" y="110" width="240" height="140" rx="4" fill="#F5F0E8" />
        <line x1="170" y1="110" x2="170" y2="250" stroke="#E8E0D4" strokeWidth="2" />
        <rect x="100" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />
        <rect x="210" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />

        <rect x="320" y="110" width="240" height="140" rx="4" fill="#F5F0E8" />
        <line x1="440" y1="110" x2="440" y2="250" stroke="#E8E0D4" strokeWidth="2" />
        <rect x="370" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />
        <rect x="480" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />

        <rect x="900" y="110" width="250" height="140" rx="4" fill="#F5F0E8" />
        <line x1="1025" y1="110" x2="1025" y2="250" stroke="#E8E0D4" strokeWidth="2" />
        <rect x="955" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />
        <rect x="1065" y="175" width="30" height="4" rx="2" fill="#C0B0A0" />
      </g>

      {/* === BACKSPLASH === */}
      <g className="pointer-events-none">
        <rect x="50" y="260" width="1100" height="80" fill="#E8E2D8" rx="2" />
        {/* Subway tile pattern */}
        {[270, 290, 310, 330].map((y, r) => (
          [0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <rect key={`${r}-${i}`} x={55 + i * 90 + (r % 2 ? 45 : 0)} y={y} width="85" height="16" rx="1" fill="none" stroke="#D8D2C8" strokeWidth="0.5" />
          ))
        ))}
      </g>

      {/* === COUNTER === */}
      <g className="pointer-events-none">
        <rect x="40" y="340" width="1120" height="18" rx="2" fill="#9A9A9A" />
        <rect x="40" y="340" width="1120" height="4" fill="#AAAAAA" />
      </g>

      {/* === LOWER CABINETS === */}
      <g className="pointer-events-none" filter="url(#kt-shadow)">
        <rect x="50" y="358" width="1100" height="140" rx="4" fill="#F5F0E8" />
        {[190, 330, 470, 740, 880, 1020].map((x, i) => (
          <line key={i} x1={x} y1="358" x2={x} y2="498" stroke="#E8E0D4" strokeWidth="2" className="pointer-events-none" />
        ))}
        {[120, 260, 400, 605, 810, 950, 1090].map((x, i) => (
          <rect key={i} x={x} y="425" width="30" height="4" rx="2" fill="#C0B0A0" className="pointer-events-none" />
        ))}
      </g>

      {/* === SINK === */}
      <g className="pointer-events-none">
        <rect x="580" y="342" width="120" height="14" rx="4" fill="#BABABA" />
        <rect x="590" y="344" width="100" height="8" rx="3" fill="#A0A0A0" />
        {/* Faucet */}
        <rect x="635" y="300" width="6" height="44" rx="2" fill="#C0C0C0" />
        <rect x="625" y="295" width="26" height="8" rx="4" fill="#D0D0D0" />
      </g>

      {/* === RANGE HOOD === */}
      <g className="pointer-events-none">
        <polygon points="590,100 810,100 830,180 570,180" fill="#E0E0E0" />
        <rect x="620" y="180" width="160" height="6" fill="#D0D0D0" />
      </g>

      {/* === STOVE === */}
      <g className="pointer-events-none">
        <rect x="600" y="260" width="200" height="80" rx="2" fill="#888" />
        <circle cx="660" cy="295" r="16" fill="#666" stroke="#777" strokeWidth="2" />
        <circle cx="740" cy="295" r="16" fill="#666" stroke="#777" strokeWidth="2" />
        <circle cx="660" cy="295" r="4" fill="#555" />
        <circle cx="740" cy="295" r="4" fill="#555" />
      </g>

      {/* === WINDOW === */}
      <g className="pointer-events-none">
        <rect x="680" y="120" width="180" height="120" rx="2" fill="#B0D8F0" />
        <rect x="680" y="120" width="180" height="120" fill="none" stroke="white" strokeWidth="8" />
        <line x1="770" y1="120" x2="770" y2="240" stroke="white" strokeWidth="4" />
      </g>

      {/* Active zone */}
      {activeZone === "wall" && (
        <rect x="0" y="100" width="1200" height="400" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
      {activeZone === "ceiling" && (
        <rect x="0" y="0" width="1200" height="100" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8 4" opacity="0.5" className="pointer-events-none" />
      )}
    </svg>
  );
}
