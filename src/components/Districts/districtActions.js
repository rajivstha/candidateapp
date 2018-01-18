export const ACTIVE_DISTRICT = 'ACTIVE_DISTRICT';

export function activeDistrict(district) {
  return {
    type: ACTIVE_DISTRICT,
    district
  };
}