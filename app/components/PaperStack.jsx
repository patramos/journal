"use client";

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Paper from "./Paper";

/**
 * PaperStack — three torn-edge paper cards stacked together. The two cards in
 * the back are decorative (rotated to match the Figma comp); only the top
 * card is interactive.
 *
 * Drag thresholds and animation timings are kept in module-scope constants so
 * they can be tweaked in one place.
 */
const SWIPE_THRESHOLD = 120; // px the user must drag past to trigger a swipe
const EXIT_DURATION = 800; // ms — must match the .swipe-exit transition

const PaperStack = forwardRef(function PaperStack(
  { interactive = false, onSwipe, children },
  ref
) {
  const cardRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(0);
  const dxRef = useRef(0);
  const animatingRef = useRef(false);

  /* -------------------------------------------------------------
   * Helpers
   * ----------------------------------------------------------- */
  const setCardTransform = useCallback((transform, withTransition) => {
    const node = cardRef.current;
    if (!node) return;
    if (withTransition) {
      node.classList.remove("no-transition");
    } else {
      node.classList.add("no-transition");
    }
    node.style.transform = transform;
  }, []);

  const resetCard = useCallback(() => {
    const node = cardRef.current;
    if (!node) return;
    node.classList.add("no-transition");
    node.style.transform = "translate3d(0,0,0) rotate(0deg)";
    // Force a reflow before removing the no-transition class so the next
    // pointer interaction animates from a known state.
    // eslint-disable-next-line no-unused-expressions
    node.offsetHeight;
    node.classList.remove("no-transition");
  }, []);

  const triggerExit = useCallback(
    (direction) => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      const node = cardRef.current;
      if (!node) {
        animatingRef.current = false;
        return;
      }
      const sign = direction === "right" ? 1 : -1;
      // Make sure the transition is enabled before assigning the exit transform.
      node.classList.remove("no-transition");
      node.style.transform = `translate3d(${
        sign * 140
      }vw, -40px, 0) rotate(${
        sign * 18
      }deg)`;
      const handleEnd = () => {
        node.removeEventListener("transitionend", handleEnd);
        // Snap back instantly — the parent will swap the prompt content and
        // cross-fade it in.
        resetCard();
        animatingRef.current = false;
        if (typeof onSwipe === "function") onSwipe(direction);
      };
      node.addEventListener("transitionend", handleEnd);
      // Safety timeout in case transitionend doesn't fire (reduced motion etc).
      setTimeout(() => {
        if (animatingRef.current) handleEnd();
      }, EXIT_DURATION + 120);
    },
    [onSwipe, resetCard]
  );

  /* -------------------------------------------------------------
   * Imperative API for external arrow buttons
   * ----------------------------------------------------------- */
  useImperativeHandle(
    ref,
    () => ({
      swipeLeft: () => triggerExit("left"),
      swipeRight: () => triggerExit("right"),
    }),
    [triggerExit]
  );

  /* -------------------------------------------------------------
   * Pointer handlers
   * ----------------------------------------------------------- */
  const onPointerDown = useCallback(
    (e) => {
      if (!interactive || animatingRef.current) return;
      // Only respond to primary button / single touch.
      if (e.pointerType === "mouse" && e.button !== 0) return;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) {}
      startXRef.current = e.clientX;
      dxRef.current = 0;
      setDragging(true);
      setCardTransform("translate3d(0,0,0) rotate(0deg)", false);
    },
    [interactive, setCardTransform]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging) return;
      const dx = e.clientX - startXRef.current;
      dxRef.current = dx;
      const rotate = dx / 20;
      setCardTransform(
        `translate3d(${dx}px, 0, 0) rotate(${rotate}deg)`,
        false
      );
    },
    [dragging, setCardTransform]
  );

  const onPointerEnd = useCallback(
    (e) => {
      if (!dragging) return;
      try {
        if (e && e.pointerId !== undefined) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch (_) {}
      const dx = dxRef.current;
      setDragging(false);

      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        triggerExit(dx > 0 ? "right" : "left");
      } else {
        // Snap back with transition.
        setCardTransform("translate3d(0,0,0) rotate(0deg)", true);
      }
    },
    [dragging, setCardTransform, triggerExit]
  );

  /* -------------------------------------------------------------
   * Render
   * ----------------------------------------------------------- */
  // Shared sizing — Figma is ~698 × 603 desktop. Use aspect ratio + clamp.
  const stackSizeClasses =
    "w-[clamp(280px,82vw,640px)] aspect-[600/420]";

  // The two decorative back cards (no children, no interaction).
  return (
    <div className="relative grid place-items-center select-none">
      <div className={`relative ${stackSizeClasses}`}>
        {/* Back card — rotated -12.73deg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 origin-center rotate-[-12.73deg] translate-y-[6px]"
        >
          <Paper className="h-full w-full opacity-90" />
        </div>

        {/* Middle card — rotated 9.52deg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 origin-center rotate-[9.52deg] translate-y-[2px]"
        >
          <Paper className="h-full w-full" />
        </div>

        {/* Top card — interactive (swipeable) or just a slot */}
        <div
          ref={cardRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          className={[
            "absolute inset-0 origin-center",
            "card-swipe", // see globals.css
            "transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            interactive ? "cursor-grab active:cursor-grabbing" : "",
          ].join(" ")}
          style={{ transform: "translate3d(0,0,0) rotate(0deg)" }}
        >
          <Paper className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center px-6 sm:px-10">
              {children}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
});

export default PaperStack;
