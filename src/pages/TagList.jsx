import React, {useState, useLayoutEffect} from 'react'
import { usePostByTagData } from '../hooks/FetchData';
import {H1, Pagination} from '../components'
import {useParams, useLocation } from 'react-router-dom';
import { PostListData as TagListData } from './PostList';

const TagList = () => {
    let { tagSlug } = useParams()
    const { pathname } = useLocation();
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, data, error, isError} = usePostByTagData(tagSlug, pageNumber)


    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


    if (isLoading){
      return <h1>Loading..</h1>
    }

    if (isError) {
      return <div>{error.message}</div>
    }


    return (
        <div className='flex-auto min-h-screen sm:px-4 my-4'>
          <H1 text={`#${tagSlug}`}/>
        {data?.data.posts.map(post => (
            <TagListData key={post.id} post={post} />
            ))}
          <Pagination setPageNumber={setPageNumber} data={data?.data}/>
        </div>
    )
}

export default TagList