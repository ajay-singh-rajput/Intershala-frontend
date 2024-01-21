import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'


const defaultUrl = 'http://localhost:8080'
const Api= {
  get:async(path)=>{
    try {
      const response = await axios({
        method:'get',
        url:`${defaultUrl}${path}`
      })
      return response
    } catch (error) {
      return returnData.response.status ? error : false
    }
  },
  post: async(path, data)=>{
    try {
      const response = await axios({
        method:'post',
        url:`${defaultUrl}${path}`,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:data
      })
      return response
    } catch (error) {
      return returnData.response.status ? error : false
    }
  }
}

export default Api