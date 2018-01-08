export const ACTIVE_DISTRICT = 'ACTIVE_DISTRICT';

export function activeDistrict(districtId) {
  return {
    type: ACTIVE_DISTRICT,
    districtId
  };
}