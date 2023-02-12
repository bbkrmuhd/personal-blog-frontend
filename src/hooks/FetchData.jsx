import { unorderedListCommand } from "@uiw/react-md-editor"
import axios from "axios"
import {useQuery, useQueryClient} from 'react-query'
import {config} from '../config/environment'

const base_url = config.base_url



const fetchCategories = () => {
    return axios.get(`${base_url}/category/list`)
}

const fetchCategory = ({queryKey}) => {
    const categoryName = queryKey[1]
    return axios.get(`${base_url}category/${categoryName}`)
}

const fetchFeaturedArticle = () => {
    return axios.get(`${base_url}/posts/featured`)
}

const fetchPostList = () => {
    return axios.get(`${base_url}/posts/list`)
}
const fetchPostDetail = ({queryKey}) => {
    const postSlug = queryKey[1]
    return axios.get(`${base_url}post/detail/${postSlug}`)
}

const fetchForYou = () => {
    return axios.get(`${base_url}/posts/list`)
}

const fetchLatestPosts = () => {
    return axios.get(`${base_url}/posts/updated`)
}

const fetchPostByTag = ({queryKey}) => {
    const tagSlug = queryKey[1]
    return axios.get(`${base_url}/tags/${tagSlug}`)
}


export const useCategoriesData = () => {
    return useQuery('categories', fetchCategories)
}

export const useCategoryData = (categoryName) => {
    const queryClient = useQueryClient()
    return useQuery(['category-detail', categoryName], fetchCategory, {
        initialData: () => {
            const category = queryClient.getQueryData('category-detail')
            ?.data.find(category => category.name === categoryName)
            if (category){
                return {data: category}
            } else {
                return undefined
            }
        }
    })
}

export const useFeaturedArticleData = () => {
    return useQuery('featured-article', fetchFeaturedArticle)
}

export const usePostListData = () => {
    return useQuery('post-list', fetchPostList)
}

export const usePostDetailData = (postSlug) => {
    const queryClient = useQueryClient()
    return useQuery(['post-detail', postSlug], fetchPostDetail, {
        initialData: () => {
            const hero = queryClient.getQueryData('post-detail')
            ?.data.find(post => post.slug === postSlug)
            if (hero){
                return {data: hero}
            } else {
                return undefined
            }
        }
    })
}

export const useForYouData = () => {
    return useQuery('for-you', fetchForYou)
}

export const useLatestPostsData = () => {
    return useQuery('latest-post', fetchLatestPosts)
}

export const usePostByTagData = (tagSlug) => {
    const queryClient = useQueryClient()
    return useQuery(['post-by-tag', tagSlug], fetchPostByTag, {
        initialData: () => {
            const posts = queryClient.getQueryData('post-by-tag')
            ?.data.find(tag => tag.slug === tagSlug)

            if (posts){
                return {data: posts}
            }else {
                return undefined
            }
        }
    })
}