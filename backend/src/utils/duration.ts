const multipliers: Record<string, number> = {
  s: 1000,
  m: 60_000,
  h: 3_600_000,
  d: 86_400_000,
};

export const parseDurationToMs = (duration: string): number => {
  const match = duration.trim().match(/^(\d+)([smhd])$/i);

  if (!match) {
    throw new Error(`Invalid duration format: ${duration}`);
  }

  const value = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multiplier = multipliers[unit];

  if (!multiplier) {
    throw new Error(`Unsupported duration unit: ${unit}`);
  }

  return value * multiplier;
};
