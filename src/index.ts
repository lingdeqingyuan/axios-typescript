import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function Axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default Axios
