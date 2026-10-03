# AIrth

AIrth is a mobile-first energy intelligence platform that helps SMEs and households understand, predict, and reduce energy waste.

The current prototype combines energy-consumption dashboards, forecasting, anomaly detection, efficiency recommendations, and a carbon-credit marketplace preview in an Expo / React Native application.

## Problem

Buildings often waste energy because operators can see consumption after the fact but lack an easy way to identify abnormal usage, understand likely causes, and act before inefficiencies become expensive.

AIrth is designed around a simple loop:

**Detect → Optimize → Verify**

1. **Detect** unusual consumption patterns and forecast expected demand.
2. **Optimize** energy use through actionable recommendations.
3. **Verify** measurable energy-efficiency improvements so they can later support auditable environmental claims and transactions.

## Current prototype

Implemented in the repository today:

- Mobile onboarding flow
- SME and household usage modes
- Energy-consumption dashboard
- 7-day energy forecasting UI
- Anomaly-detection UI
- 30-day trend analysis
- Efficiency recommendations
- Carbon-credit marketplace preview
- Mock energy datasets for demonstrating the product flow

> The current app is a functional product prototype. Energy, forecast, anomaly, and marketplace data are presently mocked for demonstration and are not yet connected to production IoT feeds, trained production ML models, or live carbon-credit inventories.

## Crypto Worldsfair direction

For the Crypto Worldsfair build, AIrth is extending the product with a **Solana-based Energy Proof layer**.

The goal is not to put raw building telemetry on-chain. Instead, AIrth will keep high-volume energy data and AI processing off-chain, then anchor a compact verification record for a completed efficiency period.

A verification record can include:

- building / meter reference
- measurement period
- AI-estimated baseline consumption
- measured consumption
- verified energy savings
- estimated avoided CO₂
- methodology / model version
- timestamp
- hash of the supporting evidence bundle

The resulting proof can be referenced by a Solana transaction so third parties can independently verify that the record existed in a specific form at a specific time.

This architecture creates a clear separation of responsibilities:

- **AI / ML:** forecasting, anomaly detection, baseline estimation, optimization
- **Off-chain storage:** detailed telemetry and supporting evidence
- **Solana:** tamper-evident proof, provenance, and future settlement of environmental assets

## Energy Proof model

The repository includes a small domain utility for generating a normalized energy-efficiency verification record from baseline and measured consumption. This is the data object intended to be anchored to Solana as part of the hackathon implementation.

Example:

```ts
{
  baselineKwh: 10000,
  actualKwh: 8750,
  savedKwh: 1250,
  savingsPercent: 12.5,
  avoidedCo2Kg: 387.5
}
```

## Tech stack

- Expo
- React Native
- TypeScript
- Expo Router
- React Native SVG
- Lucide React Native

Planned / hackathon integrations:

- Solana devnet for Energy Proof anchoring
- Real IoT / meter data ingestion
- Production forecasting and anomaly-detection models
- Verifiable carbon-credit / environmental-asset workflows

## Run locally

```bash
npm install
npm run dev
```

For a web export:

```bash
npm run build:web
```

## Repository context for judges

AIrth predates the Crypto Worldsfair submission and has previously been developed as an AI + climate-tech prototype. The mobile product experience, analytics flows, recommendation screens, and carbon-market concept existed before this hackathon.

The hackathon-specific development focuses on adding the **verifiable Energy Proof layer on Solana** and demonstrating how AI-measured energy savings can become transparent, auditable records rather than unverifiable dashboard claims.

## Recognition

AIrth has previously received recognition through sustainability and AI innovation programs, including UN / ITU AI for Good – Innovate for Impact.

## Status

Prototype / research-stage project. Not yet intended for production energy-management or regulated carbon-market use.
