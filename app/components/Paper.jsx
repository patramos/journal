"use client";

/**
 * Paper — a single torn-edge paper card rendered as SVG so it scales
 * cleanly and recolors via the theme.
 *
 * Construction:
 *  - A single <path> defines the paper's outline, with jagged zig-zag
 *    edges on the top and bottom. Left/right are clean.
 *  - A subtle darker band just inside the top and bottom edges gives the
 *    impression of a slightly-shaded torn edge (like the Figma asset).
 *
 * The path is designed on a 600 × 420 viewBox and stretches to fit the
 * parent.
 */
export default function Paper({ className = "", children }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 600 420"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full drop-shadow-[0_4px_40px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_4px_40px_rgba(0,0,0,0.45)]"
        aria-hidden="true"
      >
        {/* Main paper body */}
        <path d={PAPER_PATH} fill="var(--paper-fill)" />
        {/* Inner torn shadow along the top edge */}
        <path
          d={TOP_SHADOW_PATH}
          fill="var(--paper-shadow-edge)"
          opacity="0.55"
        />
        {/* Inner torn shadow along the bottom edge */}
        <path
          d={BOTTOM_SHADOW_PATH}
          fill="var(--paper-shadow-edge)"
          opacity="0.55"
        />
      </svg>
      {/* Content sits above the SVG */}
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Hand-crafted torn-edge path. The top zig-zag oscillates between
   y≈2 and y≈28; the bottom between y≈392 and y≈418. Sides are clean.
   --------------------------------------------------------------- */
const PAPER_PATH = `
M 0 20
L 14 8 L 28 22 L 42 6 L 56 18 L 70 4 L 84 24 L 98 10 L 112 20 L 126 5
L 140 15 L 154 25 L 168 9 L 182 22 L 196 4 L 210 18 L 224 12 L 238 24
L 252 7 L 266 19 L 280 3 L 294 15 L 308 25 L 322 10 L 336 20 L 350 4
L 364 14 L 378 24 L 392 8 L 406 18 L 420 3 L 434 13 L 448 23 L 462 9
L 476 19 L 490 5 L 504 15 L 518 25 L 532 10 L 546 20 L 560 4 L 574 14
L 588 24 L 600 18
L 600 398
L 586 412 L 572 398 L 558 414 L 544 400 L 530 414 L 516 398 L 502 412
L 488 398 L 474 414 L 460 400 L 446 413 L 432 398 L 418 414 L 404 402
L 390 415 L 376 400 L 362 414 L 348 398 L 334 412 L 320 400 L 306 415
L 292 400 L 278 414 L 264 402 L 250 413 L 236 400 L 222 414 L 208 402
L 194 413 L 180 398 L 166 412 L 152 400 L 138 414 L 124 400 L 110 413
L 96 402 L 82 414 L 68 400 L 54 413 L 40 400 L 26 414 L 12 400 L 0 410
Z
`.replace(/\s+/g, " ").trim();

// A thin band following the top tear, giving the edge subtle depth.
const TOP_SHADOW_PATH = `
M 0 20
L 14 8 L 28 22 L 42 6 L 56 18 L 70 4 L 84 24 L 98 10 L 112 20 L 126 5
L 140 15 L 154 25 L 168 9 L 182 22 L 196 4 L 210 18 L 224 12 L 238 24
L 252 7 L 266 19 L 280 3 L 294 15 L 308 25 L 322 10 L 336 20 L 350 4
L 364 14 L 378 24 L 392 8 L 406 18 L 420 3 L 434 13 L 448 23 L 462 9
L 476 19 L 490 5 L 504 15 L 518 25 L 532 10 L 546 20 L 560 4 L 574 14
L 588 24 L 600 18
L 600 34
L 588 38 L 574 32 L 560 22 L 546 36 L 532 26 L 518 40 L 504 30 L 490 22
L 476 34 L 462 26 L 448 38 L 434 28 L 420 20 L 406 34 L 392 24 L 378 40
L 364 30 L 350 22 L 336 36 L 322 26 L 308 40 L 294 30 L 280 20 L 266 34
L 252 24 L 238 38 L 224 28 L 210 34 L 196 22 L 182 38 L 168 26 L 154 40
L 140 32 L 126 22 L 112 36 L 98 26 L 84 40 L 70 22 L 56 34 L 42 24
L 28 38 L 14 26 L 0 36
Z
`.replace(/\s+/g, " ").trim();

const BOTTOM_SHADOW_PATH = `
M 0 396
L 12 386 L 26 398 L 40 386 L 54 398 L 68 384 L 82 398 L 96 386 L 110 398
L 124 386 L 138 400 L 152 386 L 166 400 L 180 384 L 194 399 L 208 388
L 222 400 L 236 386 L 250 399 L 264 388 L 278 400 L 292 386 L 306 401
L 320 386 L 334 398 L 348 384 L 362 400 L 376 386 L 390 401 L 404 388
L 418 400 L 432 384 L 446 399 L 460 386 L 474 400 L 488 384 L 502 398
L 516 384 L 530 400 L 544 386 L 558 400 L 572 384 L 586 398 L 600 384
L 600 398
L 586 412 L 572 398 L 558 414 L 544 400 L 530 414 L 516 398 L 502 412
L 488 398 L 474 414 L 460 400 L 446 413 L 432 398 L 418 414 L 404 402
L 390 415 L 376 400 L 362 414 L 348 398 L 334 412 L 320 400 L 306 415
L 292 400 L 278 414 L 264 402 L 250 413 L 236 400 L 222 414 L 208 402
L 194 413 L 180 398 L 166 412 L 152 400 L 138 414 L 124 400 L 110 413
L 96 402 L 82 414 L 68 400 L 54 413 L 40 400 L 26 414 L 12 400 L 0 410
Z
`.replace(/\s+/g, " ").trim();
