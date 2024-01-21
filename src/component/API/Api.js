import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'


const defaultUrl = 'http://localhost:8080'
const errorHandler = (error)=>{
  console.log()
  if(error.response.status){
    return {success:false, msg:'network issue'}
  }
}
const Api= {
  get:async(path)=>{
    try {
      const {data} = await axios({
        method:'get',
        url:`${defaultUrl}${path}`
      })
      return {success:true, data:data}
    } catch (error) {
      errorHandler(error)
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
      return {success:true, data:data}
    } catch (error) {
      errorHandler(error)
    }
  }
}

export default Api