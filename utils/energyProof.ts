export type EnergyProofInput = {
  buildingId: string;
  periodStart: string;
  periodEnd: string;
  baselineKwh: number;
  actualKwh: number;
  gridEmissionFactorKgPerKwh?: number;
  methodologyVersion?: string;
  evidenceHash?: string;
};

export type EnergyProof = {
  buildingId: string;
  periodStart: string;
  periodEnd: string;
  baselineKwh: number;
  actualKwh: number;
  savedKwh: number;
  savingsPercent: number;
  avoidedCo2Kg: number;
  methodologyVersion: string;
  evidenceHash?: string;
  generatedAt: string;
};

const round = (value: number, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

export function createEnergyProof(input: EnergyProofInput): EnergyProof {
  if (input.baselineKwh <= 0) {
    throw new Error('baselineKwh must be greater than zero');
  }

  if (input.actualKwh < 0) {
    throw new Error('actualKwh cannot be negative');
  }

  const savedKwh = Math.max(input.baselineKwh - input.actualKwh, 0);
  const savingsPercent = (savedKwh / input.baselineKwh) * 100;
  const emissionFactor = input.gridEmissionFactorKgPerKwh ?? 0.31;
  const avoidedCo2Kg = savedKwh * emissionFactor;

  return {
    buildingId: input.buildingId,
    periodStart: input.periodStart,
    periodEnd: input.periodEnd,
    baselineKwh: round(input.baselineKwh),
    actualKwh: round(input.actualKwh),
    savedKwh: round(savedKwh),
    savingsPercent: round(savingsPercent),
    avoidedCo2Kg: round(avoidedCo2Kg),
    methodologyVersion: input.methodologyVersion ?? 'airth-baseline-v0.1',
    evidenceHash: input.evidenceHash,
    generatedAt: new Date().toISOString(),
  };
}

export function serializeEnergyProof(proof: EnergyProof) {
  return JSON.stringify(proof);
}
