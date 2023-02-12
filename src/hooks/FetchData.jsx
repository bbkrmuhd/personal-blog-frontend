import axios from "axios"
import {useQuery} from 'react-query'
import {config} from '../config/environment'

const base_url = config.base_url

const fetchCategories = () => {
    return axios.get(`${base_url}/category/list`)
} 

const fetchFeaturedArticle = () => {
    return axios.get(`${base_url}/posts/featured`)
}


export const useCategoriesData = () => {
    return useQuery('categories', fetchCategories)
}

export const useFeaturedArticleData = () => {
    return useQuery('featured-article', fetchFeaturedArticle)
}