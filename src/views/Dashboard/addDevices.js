import axios from '../../utils/axiosConfig'
import { getToken } from '../../utils/axiosConfig'
import { toast } from 'react-toastify'

export const addDevices = async (devices) => {
  const token = await getToken()
  try {
    const response = await axios.post('devices/multiple',
    {devices},
    {headers: { authorization: `Bearer ${token}`, token: "this is" },
  }
    
   )
    if (response.status === 201) {
      toast.success(response.data.message)
    }
    
    if (response.status >= 400) {
      toast.error(response.error.message || 'Something went wrong. Please try Again')
    }
  } catch (error) {
    if (error.response) {
      return toast.error(error.response.data.error || 'Something went wrong. Please try Again')
    }

    if (error.message === 'Network Error') {
      return toast.error('Something went wrong. Please try Again')
    }
    toast.error(error.error)
  }
}
