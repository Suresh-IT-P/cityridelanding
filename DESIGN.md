---
name: Dravidian Kinetic
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#554336'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#5a5e6a'
  on-secondary: '#ffffff'
  secondary-container: '#dfe2f1'
  on-secondary-container: '#606471'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#dfe2f1'
  secondary-fixed-dim: '#c3c6d4'
  on-secondary-fixed: '#171b26'
  on-secondary-fixed-variant: '#434652'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-telemetry:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system articulates an architectural, street-level precision tailored to South Indian urban transit and intercity highway corridors (Chennai, Coimbatore, Madurai, Trichy). The visual identity balances high-velocity operational efficiency with executive-grade polish. It rejects neon app tropes, whimsical illustrations, and generic ride-hailing cartoon avatars in favor of clear data hierarchy, technical cartographic nuances, crisp physical-digital affordances, and unyielding roadworthiness.

The interface merges modern high-contrast utilitarianism with structural glass accents and precise linear vector work inspired by highway milestone indicators, arterial road grids, and transit telemetry. The aesthetic evokes rapid dispatch, verified reliability, and nocturnal composure—equally legible under harsh midday sunlight on Marina Beach or during midnight transit along the Grand Southern Trunk Road.

## Colors
The palette is rooted in functional mobility contrast, high legibility, and high-visibility road safety:

- **Primary Amber (`#D97706`) & Electric Amber (`#F59E0B`):** Derived from technical transit signals, reflective highway beacons, and classic taxi signposts. Used strictly for high-intent actions, active route waypoints, live ride statuses, and vehicle tier selection indicators.
- **Deep Obsidian (`#0B0F19`) & Night Black (`#111827`):** Forms the bedrock of typography, critical headers, structural toolbars, and high-contrast surfaces, providing an immediate sense of executive stability and security.
- **Structural Neutral Tints:** Subtle cool-gray ground tones (`#F8FAFC`, `#F1F5F9`, `#E2E8F0`) keep map viewports and booking panels sharp and daylight-readable without inducing glare.
- **System States:** Live telemetry Green (`#059669`) for driver arrival and vehicle status; Alert Crimson (`#DC2626`) for SOS dispatch and cancellation flags; Route Blue (`#2563EB`) reserved strictly for toll indicators and alternative route ribbons.

## Typography
Typography is tuned for immediate cognitive absorption during rapid transit, handoff, and route tracking:

- **Display & Headlines (Plus Jakarta Sans):** Geometric clarity with sculpted apertures. Headlines project energy, authority, and velocity without decorative distraction.
- **Body & Numerical Readouts (Inter):** Highly neutral and legible at glance speeds. High x-height ensures immediate decipherability of vehicle license plates, driver OTP codes, fare breakdowns in ₹ (INR), and estimated times of arrival (ETA).
- **Label Telemetry:** Used in uppercase configurations with tracking (`letter-spacing: 0.08em`) for terminal tags, toll tags, route milestones, and live GPS signals.

## Layout & Spacing
The layout system employs an adaptive fluid grid anchored against dynamic map viewports:

- **Mobile Viewports (<640px):** 4-column layout with 16px margins. Primary interface elements dock to the bottom 45% of the screen as collapsible sheets, prioritizing thumb-zone reachability for one-handed booking and emergency actions.
- **Tablet & Dashboard Viewports (640px–1024px):** 8-column layout. Trip controls transition into an anchored floating left drawer, maintaining an unobstructed live navigation canvas.
- **Desktop & Fleet Concierge (>1024px):** 12-column structural grid with 24px gutters and 40px outer canvas margins. Multi-stop outstation itineraries and billing panels dock into dedicated 4-column sidebars flanking full-bleed vector map layers.
- **Rhythm:** Spacing strictly adheres to an 8px base grid rhythm (with a 4px half-step for micro telemetry tags and input adornments).

## Elevation & Depth
Depth conveys situational urgency and physical layers:

- **Ground (Level 0):** Vector base map with desaturated terrain, minimal highway markers, and subdued Tamil Nadu arterial highways.
- **Surface Cards (Level 1):** Solid white (`#FFFFFF`) or deep obsidian (`#0B0F19`) cards using crisp 1px borders in `rgba(17, 24, 39, 0.08)` paired with an ambient tinted shadow: `0 4px 20px -2px rgba(11, 15, 25, 0.06)`.
- **Floating Controls & Sheets (Level 2):** Booking panels and outstation package pickers float over maps using calibrated glassmorphism: background `rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(12px)` and a directional shadow: `0 12px 32px -4px rgba(11, 15, 25, 0.12)`.
- **Active Alerts & Modals (Level 3):** Urgent driver arrival prompts, OTP validation sheets, and safety shields utilize an elevated depth: `0 20px 48px -8px rgba(11, 15, 25, 0.22)` surrounded by a 1px amber boundary stroke (`rgba(217, 119, 6, 0.25)`).

## Shapes
A rounded architecture (`roundedness: 2`) balances industrial precision with consumer ergonomics:

- **Base Components (0.5rem / 8px):** Applied to form inputs, vehicle segment cards, ETA pill tiles, and table rows to preserve architectural crispness.
- **Surfaces & Drawers (1rem / 16px):** Standard for bottom sheets, ride confirmation panels, and modal containers, creating soft contact boundaries.
- **Interactive Badges & Trigger Pills (Full Round / 9999px):** Status badges (e.g., "Fastag Enabled", "AC Sedan", "Airport Toll Included"), ride-stage tags, and OTP containers use structural capsule geometry to stand out against rectangular map panels.

## Components

### Buttons
- **Primary Command:** Solid night black (`#0B0F19`) with high-contrast white text, or electric amber (`#F59E0B`) with black text for instant confirmation. Height: 48px (mobile standard) or 56px (trip dispatch action). Radius: 8px. Font: `label-lg`.
- **Secondary / Action Outlines:** Ghost background with a 1.5px structural border in `#E2E8F0` transitioning to `#0B0F19` on hover.
- **Safety / SOS:** High-visibility crimson (`#DC2626`) with dual concentric pulse rings for immediate recognition.

### Chips & Pill Badges
- **Status Indicators:** Pill-shaped capsules (padding: 4px 12px) with subtle tinted backgrounds (e.g., 10% amber tint with 100% amber text for outstation travel markers).
- **Vehicle Filters:** Selectable pill chips showing micro vehicle silhouettes alongside engine/fuel classes (Sedan, Prime SUV, Intercity Electric).

### Input Fields & Location Selectors
- **Address & Route Bars:** Clean dual-input cards connecting origin (Green node) and destination (Amber node) via a vertical 2px segmented linework path. Inactive border: `#E2E8F0`; focused border: 1.5px `#D97706` with zero glow.
- **OTP Verification Box:** Large monospaced numeric cells with heavy weight, centered text, and 8px corner radii.

### Cards
- **Ride Tier Selection:** Vertical stacked cards with active state outlined in a 2px `#D97706` border, featuring upfront price lock, seating capacity pill, and accurate ETA timestamp.
- **Driver Telemetry Sheet:** Glassmorphic card displaying driver verification seal, vehicle registration badge in monospaced high-contrast format, and direct calling affordances.

### Route & Highway Markers
- Custom SVG waypoint indicators reflecting highway milestone styling—clear, geometric, and functional without skeuomorphic clutter.