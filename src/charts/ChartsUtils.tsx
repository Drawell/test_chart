export function getPercents(value: number, total: number): number {
  const precise = (100.0 * value) / total
  return Math.round(precise)
}
