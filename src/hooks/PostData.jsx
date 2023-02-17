import axios from "axios"
import {useMutation, useQueryClient} from 'react-query'
import {config} from '../config/environment'

const base_url = config.base_url

const addCommentData = ({postSlug, formData: comment}) => { 
  return axios.post(`${base_url}comment/create/${postSlug}`, comment)
}


export const useAddCommentData = () => {
  const queryClient = useQueryClient()
  return useMutation((data) => addCommentData(data),{
    onSuccess: (data) => {
      queryClient.setQueryData(['post-comments', data?.data.comment.post_slug], (oldData) => {
        console.log(oldData?.data.comments)
        return {
          ...oldData, data: [...oldData?.data.comments, data.data.comment]
        }
      })
    }
  })
}
