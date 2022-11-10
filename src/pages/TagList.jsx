import React, {useLayoutEffect} from 'react'
import Fetch from '../hooks/Fetch';
import {H1, Button, Pagination} from '../components'
import {useParams, useLocation } from 'react-router-dom';
import { PostListData as TagListData } from './PostList';

const TagList = () => {
    let { tagSlug } = useParams()
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='flex-auto min-h-screen sm:px-4 my-4'>
          <H1 text={`#${tagSlug}`}/>
        <Fetch
          url={`tags/${tagSlug}`}
          renderSuccess={({ data: { posts } }) => (
            <>
            {posts.map(post => (
            <TagListData key={post.id} post={post} />
            ))}
            
           {!posts && (<div className='text-center my-10'>
              <Pagination />
            </div>
            )
            }
          </>
            )}
          />
        </div>
    )
}

export default TagList