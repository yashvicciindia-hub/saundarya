/**
 * SaundaryaVedaAppDownloadCTA
 *
 * A globally mounted, floating Android app-download CTA.
 * – Positioned on the RIGHT side of the viewport, ABOVE the existing
 *   Chatbot button (bottom-5 / ~20px + chatbot height ~48px + gap ~12px → bottom-24 ≈ 96px).
 * – Collapsed by default; expands leftward on hover (desktop).
 * – Fully accessible: semantic <a>, aria-label, keyboard focus ring.
 * – Styled to match the Saundarya Veda brand palette exactly.
 * – All styles are namespaced under .saundarya-veda-app-download.
 */

import { Smartphone } from 'lucide-react';

export default function SaundaryaVedaAppDownloadCTA() {
  return (
    <>
      {/* ─── Scoped styles ─────────────────────────────────────────────────── */}
      <style>{`
        /* Container */
        .saundarya-veda-app-download {
          position: fixed;
          /* Sit above the chatbot button: chatbot is bottom-5 (20px) + ~48px height + 12px gap */
          bottom: 88px;
          right: 16px;
          z-index: 49; /* just below chatbot z-50 so chat panel stays on top */
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media (min-width: 640px) {
          .saundarya-veda-app-download {
            right: 24px;
          }
        }

        /* The anchor */
        .saundarya-veda-app-download__btn {
          display: flex;
          align-items: center;
          gap: 0;
          overflow: hidden;
          /* Collapsed width = icon + padding */
          width: 48px;
          max-width: 48px;
          height: 48px;
          border-radius: 9999px;
          /* Brand palette: gold accent outline, pink-deep fill */
          background-color: var(--color-pink-deep, #d99aae);
          border: 1.5px solid rgba(200, 168, 120, 0.55); /* gold tint */
          box-shadow: 0 6px 24px rgba(217, 154, 174, 0.38), 0 1px 4px rgba(41, 35, 38, 0.12);
          color: var(--color-text, #292326);
          text-decoration: none;
          cursor: pointer;
          /* Smooth expand */
          transition:
            width 320ms cubic-bezier(0.4, 0, 0.2, 1),
            max-width 320ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 200ms ease,
            transform 200ms ease,
            background-color 200ms ease;
          white-space: nowrap;
          /* Entrance animation */
          animation: sveda-cta-enter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
          animation-delay: 1.2s;
          opacity: 0;
        }

        @keyframes sveda-cta-enter {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Hover / focus: expand left, reveal label */
        .saundarya-veda-app-download__btn:hover,
        .saundarya-veda-app-download__btn:focus-visible {
          width: 190px;
          max-width: 190px;
          box-shadow: 0 10px 32px rgba(217, 154, 174, 0.50), 0 2px 8px rgba(41, 35, 38, 0.14);
          transform: translateY(-1px);
          background-color: #c88499; /* slightly deeper on hover */
          outline: none;
        }

        /* Keyboard-only focus ring (distinct from hover) */
        .saundarya-veda-app-download__btn:focus-visible {
          outline: 2px solid var(--color-pink-deep, #d99aae);
          outline-offset: 3px;
        }

        /* Icon wrapper — always visible, fixed 48px column */
        .saundarya-veda-app-download__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 46px;       /* match btn height so icon is centred */
          height: 46px;
          transition: transform 200ms ease;
        }

        .saundarya-veda-app-download__btn:hover .saundarya-veda-app-download__icon,
        .saundarya-veda-app-download__btn:focus-visible .saundarya-veda-app-download__icon {
          transform: scale(0.9);
        }

        /* Label text — hidden until expanded */
        .saundarya-veda-app-download__label {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-right: 14px;
          overflow: hidden;
          opacity: 0;
          transform: translateX(8px);
          transition:
            opacity 220ms ease 80ms,
            transform 220ms ease 80ms;
          pointer-events: none;
        }

        .saundarya-veda-app-download__btn:hover .saundarya-veda-app-download__label,
        .saundarya-veda-app-download__btn:focus-visible .saundarya-veda-app-download__label {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .saundarya-veda-app-download__primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text, #292326);
          line-height: 1.2;
          letter-spacing: 0.01em;
        }

        .saundarya-veda-app-download__secondary {
          font-family: 'Playfair Display', serif;
          font-size: 10px;
          font-weight: 400;
          font-style: italic;
          color: rgba(41, 35, 38, 0.72);
          line-height: 1.2;
          margin-top: 1px;
        }

        /* ── Dark mode overrides ─────────────────────────────────────────── */
        :root.dark .saundarya-veda-app-download__btn {
          background-color: var(--color-pink-deep, #e8afc0);
          border-color: rgba(200, 168, 120, 0.35);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35), 0 1px 4px rgba(0, 0, 0, 0.25);
          color: #171315;
        }

        :root.dark .saundarya-veda-app-download__btn:hover,
        :root.dark .saundarya-veda-app-download__btn:focus-visible {
          background-color: #d99aae;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.40), 0 2px 8px rgba(0, 0, 0, 0.28);
        }

        :root.dark .saundarya-veda-app-download__primary {
          color: #171315;
        }

        :root.dark .saundarya-veda-app-download__secondary {
          color: rgba(23, 19, 21, 0.70);
        }

        /* ── Mobile: compact pill, no hover expansion ───────────────────── */
        @media (max-width: 639px) {
          .saundarya-veda-app-download__btn:hover,
          .saundarya-veda-app-download__btn:focus-visible {
            width: 48px;
            max-width: 48px;
          }

          .saundarya-veda-app-download__label {
            display: none;
          }
        }

        /* ── Respect prefers-reduced-motion ─────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .saundarya-veda-app-download__btn {
            animation: none;
            opacity: 1;
            transition: box-shadow 200ms ease;
          }

          .saundarya-veda-app-download__btn:hover,
          .saundarya-veda-app-download__btn:focus-visible {
            transform: none;
          }

          .saundarya-veda-app-download__icon,
          .saundarya-veda-app-download__label {
            transition: none;
          }
        }
      `}</style>

      {/* ─── Floating CTA ──────────────────────────────────────────────────── */}
      <div className="saundarya-veda-app-download">
        <a
          href="/SaundaryaVeda.apk"
          download="SaundaryaVeda.apk"
          aria-label="Download Saundarya Veda Android App"
          className="saundarya-veda-app-download__btn"
        >
          {/* Icon — always visible */}
          <span className="saundarya-veda-app-download__icon" aria-hidden="true">
            <Smartphone size={20} strokeWidth={1.75} />
          </span>

          {/* Label — revealed on hover/focus */}
          <span className="saundarya-veda-app-download__label">
            <span className="saundarya-veda-app-download__primary">Download App</span>
            <span className="saundarya-veda-app-download__secondary">Saundarya Veda</span>
          </span>
        </a>
      </div>
    </>
  );
}
