export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export const calculateTotalPrice = (devices) =>
  devices.reduce((total, device) => {
    return total + parseInt(device.price);
  }, 0);
