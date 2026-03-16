"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [ripple, setRipple] = useState(false);

  const updateState = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct =
      docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0;
    setProgress(pct);
    setVisible(scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateState, { passive: true });
    return () => window.removeEventListener("scroll", updateState);
  }, [updateState]);

  const scrollToTop = () => {
    setIsClicked(true);
    setRipple(true);
    setTimeout(() => setRipple(false), 520);
    setTimeout(() => setIsClicked(false), 300);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Arrow color flips to white once fill covers the icon (above ~55%)
  const arrowColor = progress > 55 ? "#ffffff" : "#C85A38";
  const t = useTranslations('backToTop')
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        .stt-pill-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 9999;
          width: 44px;
          height: 88px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          transition:
            opacity 0.3s ease,
            transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stt-pill-btn.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }

        .stt-pill-btn.hidden {
          opacity: 0;
          transform: scale(0.72) translateY(12px);
          pointer-events: none;
        }

        .stt-pill-btn:hover {
          transform: scale(1.06) translateY(0);
        }

        .stt-pill-btn:active,
        .stt-pill-btn.clicked {
          transform: scale(0.95) translateY(0);
        }

        /* Outer shell */
        .stt-pill-shell {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: #ffffff;
          border: 1.5px solid rgba(200, 90, 56, 0.3);
          overflow: hidden;
          box-shadow:
            0 4px 16px rgba(200, 90, 56, 0.1),
            0 1px 4px rgba(0, 0, 0, 0.06);
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .stt-pill-btn:hover .stt-pill-shell {
          border-color: rgba(200, 90, 56, 0.55);
          box-shadow:
            0 6px 24px rgba(200, 90, 56, 0.2),
            0 2px 6px rgba(0, 0, 0, 0.08);
        }

        /* Liquid fill */
        .stt-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, #E8805F 0%, #C85A38 100%);
          border-radius: 0 0 20px 20px;
          transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Wave on fill surface */
        .stt-wave {
          position: absolute;
          top: -7px;
          left: 0;
          width: 44px;
          overflow: visible;
          animation: pill-wave 2.2s ease-in-out infinite;
        }

        @keyframes pill-wave {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(-9px); }
        }

        /* Arrow icon */
        .stt-arrow-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 2;
        }

        .stt-arrow-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stt-pill-btn:hover .stt-arrow-icon {
          transform: translateY(-3px);
        }

        .stt-pill-btn.clicked .stt-arrow-icon {
          transform: translateY(1px);
        }

        /* Percentage badge above pill */
        .stt-pct {
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.35);
          letter-spacing: 0.04em;
          white-space: nowrap;
          user-select: none;
          transition: color 0.2s ease;
        }

        .stt-pill-btn:hover .stt-pct {
          color: #C85A38;
        }

        /* Tooltip label */
        .stt-label {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #ffffff;
          border: 0.5px solid rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.6);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.04em;
          white-space: nowrap;
          padding: 5px 10px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition:
            opacity 0.15s ease,
            transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
        }

        .stt-label::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: rgba(0, 0, 0, 0.1);
          margin-left: -1px;
        }

        .stt-pill-btn:hover .stt-label {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* Click ripple */
        .stt-ripple {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          border: 2px solid rgba(200, 90, 56, 0.5);
          animation: pill-ripple 0.52s ease-out forwards;
          pointer-events: none;
          z-index: 3;
        }

        @keyframes pill-ripple {
          0%   { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0;   transform: scale(1.3); }
        }

        /* Dark-mode overrides */
        @media (prefers-color-scheme: dark) {
          .stt-pill-shell {
            background: #1a1a1a;
            border-color: rgba(232, 128, 95, 0.25);
            box-shadow:
              0 4px 16px rgba(200, 90, 56, 0.15),
              0 1px 4px rgba(0, 0, 0, 0.3);
          }
          .stt-pill-btn:hover .stt-pill-shell {
            border-color: rgba(232, 128, 95, 0.5);
            box-shadow:
              0 6px 24px rgba(200, 90, 56, 0.25),
              0 2px 6px rgba(0, 0, 0, 0.3);
          }
          .stt-pct { color: rgba(255, 255, 255, 0.3); }
          .stt-pill-btn:hover .stt-pct { color: #E8805F; }
          .stt-label {
            background: #1a1a1a;
            border-color: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
          }
          .stt-label::after { border-left-color: rgba(255, 255, 255, 0.1); }
        }
      `}</style>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={`${t('title')} — ${Math.round(progress)}% read`}
        className={`stt-pill-btn ${visible ? "visible" : "hidden"} ${
          isClicked ? "clicked" : ""
        }`}
      >
        {/* Percentage badge */}
        <span className="stt-pct" aria-hidden="true">
          {Math.round(progress)}%
        </span>

        {/* Pill shell with liquid fill */}
        <div className="stt-pill-shell">
          <div
            className="stt-fill"
            style={{ height: `${progress}%` }}
            aria-hidden="true"
          >
            {/* Wave surface */}
            <svg
              className="stt-wave"
              viewBox="0 0 44 8"
              height="8"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 4 Q11 0 22 4 Q33 8 44 4 Q55 0 66 4 L66 8 L0 8Z"
                fill="#E8805F"
                opacity="0.65"
              />
            </svg>
          </div>
        </div>

        {/* Upward arrow */}
        <div className="stt-arrow-wrap" aria-hidden="true">
          <svg
            className="stt-arrow-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14V4"
              strokeWidth="1.8"
              strokeLinecap="round"
              stroke={arrowColor}
              style={{ transition: "stroke 0.25s ease" }}
            />
            <path
              d="M4.5 8L9 3.5L13.5 8"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={arrowColor}
              style={{ transition: "stroke 0.25s ease" }}
            />
          </svg>
        </div>

        {/* Click ripple */}
        {ripple && (
          <span className="stt-ripple" aria-hidden="true" />
        )}

        {/* Tooltip */}
        <span className="stt-label" aria-hidden="true">
          {t('title')}
        </span>
      </button>
    </>
  );
}