import axios from './axiosConfig';
import { getToken } from './axiosConfig';
import { toast } from 'react-toastify';

export const addDevices = async (devices) => {
  const token = await getToken();
  try {
    const response = await axios.post(
      'devices/multiple',
      { devices },
      { headers: { authorization: `Bearer ${token}`, token: 'this is' } }
    );
    if (response.status === 201) {
      toast.success(response.data.message);
    }

    if (response.status >= 400) {
      toast.error(
        response.error.message || 'Something went wrong. Please try Again'
      );
    }
  } catch (error) {
    if (error.response) {
      toast.error(
        error.response.data.error || 'Something went wrong. Please try Again'
      );
      return error;
    }

    if (error.message === 'Network Error') {
      return toast.error('Something went wrong. Please try Again');
    }
    toast.error(error.error);
  }
};

export const addSingleDevice = async (reqObj) => {
  const token = await getToken();
  try {
    const response = await axios.post('devices/single', reqObj, {
      headers: { authorization: `Bearer ${token}`, token: 'this is' },
    });

    if (response.status === 201) {
      toast.success(
        `Device with imei: ${reqObj.imei} has been added successfully`
      );
    }

    if (response.status >= 400) {
      toast.error(
        response.error.message || 'Something went wrong. Please try Again'
      );
      return response;
    }
  } catch (error) {
    if (error.response) {
      return toast.error(
        error.response.data.error || 'Something went wrong. Please try Again'
      );
    }

    if (error.message === 'Network Error') {
      return toast.error('Something went wrong. Please try Again');
    }
    toast.error(error.error);
  }
};

export const fetchPendingPayments = async () => {
  const token = await getToken();
  try {
    const response = await axios.get('/devices?status=unpaid', {
      headers: { authorization: `Bearer ${token}`, token: 'this is' },
    });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    if (error.message === 'Network Error') {
      toast.error('Something went wrong. Please try Again');
      return;
    }
    toast.error(error.error);
    return error;
  }
};
