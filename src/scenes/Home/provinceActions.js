export const ACTIVE_PROVINCE = 'ACTIVE_PROVINCE';

export function activeProvince(province) {
  return {
    type: ACTIVE_PROVINCE,
    province
  };
}