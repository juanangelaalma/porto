import { toast } from 'react-toastify'

const notifyFail = (message) => {
  toast.error(message, {
    theme: 'dark'
  })
} 

const notifySuccess = (message) => {
  toast.success(message, {
    theme: 'dark'
  })
}

export { notifyFail, notifySuccess }