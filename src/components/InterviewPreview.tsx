import React, { useState } from 'react';
import { Camera, FileText, CheckCircle2, RefreshCw, Eye, UserCheck, ShieldCheck } from 'lucide-react';

export const InterviewPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [isSimulatingGaze, setIsSimulatingGaze] = useState<boolean>(true);

  return (
    <div className="bg-canvas border-2 border-ink p-4 sm:p-5 font-sans shadow-retro-sm">
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-ink gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-electric-pink animate-ping"></span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
            INTERVIEW SESSION // OPENCV TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[11px] text-ink-muted">
          <span>FPS: 30</span> · <span>Latency: 14ms</span> · <span>Confidence: 94%</span>
        </div>
      </div>

      {/* Pipeline Navigation */}
      <div className="grid grid-cols-3 gap-2 mb-4 font-mono text-xs">
        <button
          onClick={() => setActiveStep(1)}
          className={`p-2 text-left border ${
            activeStep === 1
              ? 'bg-ink text-canvas border-ink font-bold'
              : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
          }`}
        >
          <div className="text-[10px] text-electric-lime">STEP 01</div>
          Resume Parsing
        </button>
        <button
          onClick={() => setActiveStep(2)}
          className={`p-2 text-left border ${
            activeStep === 2
              ? 'bg-ink text-canvas border-ink font-bold'
              : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
          }`}
        >
          <div className="text-[10px] text-electric-orange">STEP 02</div>
          Vision Tracking
        </button>
        <button
          onClick={() => setActiveStep(3)}
          className={`p-2 text-left border ${
            activeStep === 3
              ? 'bg-ink text-canvas border-ink font-bold'
              : 'bg-canvas-card text-ink-muted border-ink-border hover:text-ink'
          }`}
        >
          <div className="text-[10px] text-electric-blue">STEP 03</div>
          Diagnostic Report
        </button>
      </div>

      {/* Step 1: Resume Parsing */}
      {activeStep === 1 && (
        <div className="space-y-3 p-3 bg-canvas-card border border-ink-border text-xs font-mono">
          <div className="flex items-center justify-between text-ink font-bold border-b border-ink-border pb-2">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-electric-blue" />
              Extracted Competency Matrix
            </span>
            <span className="text-emerald-600">PARSED 100%</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-ink">
            <div>
              <span className="text-ink-muted block text-[10px]">CORE LANGUAGES:</span>
              <span className="font-semibold">Python, SQL, C++</span>
            </div>
            <div>
              <span className="text-ink-muted block text-[10px]">FRAMEWORKS:</span>
              <span className="font-semibold">OpenCV, Scikit-learn, Pandas</span>
            </div>
            <div>
              <span className="text-ink-muted block text-[10px]">PROJECT DOMAIN:</span>
              <span className="font-semibold">Computer Vision & Data Processing</span>
            </div>
            <div>
              <span className="text-ink-muted block text-[10px]">INTERVIEW LEVEL:</span>
              <span className="font-semibold">Mid-Tier Analytical Engineering</span>
            </div>
          </div>
          <div className="p-2.5 bg-blue-50 border border-blue-200 text-blue-900 text-[11px] leading-relaxed">
            <strong>Dynamic Prompt Generated:</strong> "Can you explain how you handled illumination variance and head tilt angles in your OpenCV landmark detection pipeline?"
          </div>
        </div>
      )}

      {/* Step 2: Computer Vision Telemetry */}
      {activeStep === 2 && (
        <div className="space-y-3">
          <div className="relative aspect-video bg-zinc-900 border-2 border-ink flex items-center justify-center overflow-hidden">
            {/* Simulated camera grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Subject Face Boundary Box */}
            <div className="relative w-36 h-44 border-2 border-dashed border-electric-lime flex flex-col items-center justify-between p-2">
              <div className="w-full flex justify-between text-[9px] font-mono text-electric-lime">
                <span>[POSE_LNDMK]</span>
                <span>TILT: -1.4°</span>
              </div>
              <div className="w-16 h-16 rounded-full border border-electric-lime/60 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-electric-lime animate-ping"></div>
              </div>
              <div className="text-[9px] font-mono bg-electric-lime text-zinc-900 px-1 font-bold">
                PRESENCE: DETECTED
              </div>
            </div>

            {/* Overlay Telemetry HUD */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-zinc-400 space-y-0.5">
              <div>GAZE_VEC: [0.04, -0.01, 0.99]</div>
              <div>POSTURE_DEV: 4.2%</div>
            </div>

            <div className="absolute bottom-2 right-2 font-mono text-[10px] bg-zinc-800/90 text-emerald-400 px-2 py-1 border border-zinc-700">
              STABILITY SCORE: 92/100
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2 bg-canvas-card border border-ink-border">
              <div className="text-[10px] text-ink-muted">EYE CONTACT</div>
              <div className="font-bold text-emerald-600 text-sm">88%</div>
            </div>
            <div className="p-2 bg-canvas-card border border-ink-border">
              <div className="text-[10px] text-ink-muted">POSTURE LEVEL</div>
              <div className="font-bold text-electric-blue text-sm">Upright</div>
            </div>
            <div className="p-2 bg-canvas-card border border-ink-border">
              <div className="text-[10px] text-ink-muted">PACING</div>
              <div className="font-bold text-ink text-sm">132 wpm</div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Diagnostic Feedback */}
      {activeStep === 3 && (
        <div className="space-y-3 p-3 bg-canvas-card border border-ink-border text-xs font-mono">
          <div className="flex items-center justify-between border-b border-ink-border pb-2">
            <span className="font-bold text-ink flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Candidate Readiness Assessment
            </span>
            <span className="font-bold text-ink bg-electric-lime px-2 py-0.5">GRADE: A-</span>
          </div>

          <div className="space-y-2">
            <div className="p-2 bg-emerald-50 border border-emerald-200 text-emerald-900">
              <strong>Strengths:</strong> Maintained consistent eye contact (88% of speaking duration). Strong technical articulation on computer vision concepts.
            </div>
            <div className="p-2 bg-amber-50 border border-amber-200 text-amber-900">
              <strong>Recommendation:</strong> Slightly elevated speech velocity during behavioral explanations; pause 1-2 seconds after complex questions.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
