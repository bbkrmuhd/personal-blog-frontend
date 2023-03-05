export const ForYouPostSkeleton = () => {
    return (
      <div className="shadow-md flex sm:flex-col rounded-lg dark:bg-gray-800">
        <div className="w-28 h-full sm:h-40 sm:w-full rounded-lg bg-gray-300 shine"></div>
        <div className="flex flex-col my-5 gap-2 px-2 w-full">
          <div className="flex flex-col gap-2">
            <div className="w-64 h-4 bg-gray-300 rounded my-1 shine"></div>
            <div className="h-12 bg-gray-300 rounded w-full shine"></div>
          </div>
          <div className="flex items sm:items-center justify-between sm:gap-2 mt-3 md:flex-row md:gap-0">
            <div className="flex items-center gap-1 text-gray-500 text-[8px] sm:text-[10px] dark:text-gray-100">
              <div className="w-10 h-10 bg-gray-300 rounded-full shine"></div>
              <div className="flex flex-col gap-1">
                <div className="w-32 h-3 bg-gray-300 rounded shine"></div>
                <div className="w-24 h-2 bg-gray-300 rounded shine"></div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs dark:text-gray-100">
              <div className="flex items-center gap-2 w-8 h-4 bg-gray-300 rounded shine"></div>
              <div className="flex items-center gap-2 w-8 h-4 bg-gray-300 rounded shine"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export const FeaturedPostSkeleton = () => {
    return (
      <div className="max-h-96 sm:my-5 rounded-lg bg-cover bg-no-repeat bg-center flex drop-shadow-xl drop-shadow-gray-300 bg-gradient-to-t from-black/75 via-black/0">
        <div className="flex flex-col gap-4 p-4 sm:basis-1/2 justify-between">
          <div className="w-full">
            <div className="h-10 bg-gray-300 rounded my-10 shine"></div>
            <div className="h-6 bg-gray-300 rounded w-full shine"></div>
          </div>
          <div>
            <div className="h-10 bg-gray-300 rounded w-full shine"></div>
          </div>
        </div>
        <div></div>
      </div>
    );
  };

  export const LatestPostsListSkeleton = () => {
    return (
      <div className='flex flex-col min-h-32 gap-6 bg-gray-50 rounded-lg shadow-sm shadow-gray-200 my-4 max-w-70 dark:bg-gray-800 dark:shadow-gray-700'>
        <div className='flex gap-2'>
          <div className='flex-none w-1/4 relative'>
            <div className='inset-0 h-full w-full absolute bg-gray-300 rounded-l-lg shine'></div>
          </div>
          <div className='flex flex-col h-full gap-2 justify-between p-2'>
            <div className='flex items-center gap-1 text-gray-500 hover:text-gray-700 text-[10px] mb-2 dark:text-gray-100'>
              <div className='w-8 h-8 bg-gray-300 rounded-full shine'></div>
              <div className='w-20 h-3 bg-gray-300 rounded shine'></div>
              <div className='w-12 h-3 bg-gray-300 rounded shine'></div>
            </div>
            <div className='font-bold text-sm text-black capitalize max-w-[200px]'>
              <div className='h-4 bg-gray-300 rounded shine'></div>
            </div>
            <div className='text-xs flex items-center gap-1 text-gray-500 dark:text-gray-100'>
              <div className='w-20 h-2 bg-gray-300 rounded shine'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export const PostDetailDataSkeleton = () => {
    return (
      <>
        <div className="flex items-center gap-2 text-gray-400 text-xs dark:text-gray-100">
          <div className="w-12 h-12 bg-gray-400 rounded-full shine"></div>
          <div className="flex flex-col gap-1">
            <div className="w-32 h-3 bg-gray-400 rounded shine"></div>
            <div className="w-24 h-2 bg-gray-400 rounded shine"></div>
          </div>
        </div>
        <div className="h-8 px-1 sm:px-2 bg-gray-400 rounded my-4 shine"></div>
        <div className="my-3 sm:my-5">
          <div className="rounded-lg inset-0 w-full h-full object-cover max-h-72 sm:max-h-[28rem] bg-gray-400"></div>
        </div>
        <div className=" dark:bg-gray-900">
          <div className="h-16 bg-gray-400 rounded my-4 shine"></div>
          <div className="h-16 bg-gray-400 rounded my-4 shine"></div>
          <div className="h-16 bg-gray-400 rounded my-4 shine"></div>
        </div>
      </>
    );
  };


  export const PostListDataSkeleton = () => {
    return (
      <div className='min-h-56 my-4 sm:my-6  rounded-lg shadow-sm shadow-gray-200 dark:shadow-gray-700 dark:bg-gray-800'>
        <div className='flex flex-col gap-6 h-full '>
          <div className='flex flex-col sm:flex-row gap-2 h-full'>
            <div className='flex-none h-44 w-auto sm:h-auto sm:w-48 relative bg-gray-300 shine'></div>
            <div className='flex-auto p-2'>
              <div className='flex flex-col gap-2 h-full items-start justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-1 text-gray-500 text-xs dark:text-gray-100'>
                    <div className='w-10 h-10 bg-gray-300 rounded-full shine'></div>
                    <div className='w-24 h-3 bg-gray-300 rounded shine'></div>
                    <div className='w-20 h-3 bg-gray-300 rounded shine'></div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='w-80 h-4 bg-gray-300 rounded my-1 shine'></div>
                    <div className='h-12 bg-gray-300 rounded w-full shine'></div>
                  </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex gap-2 flex-wrap'>
                    <div className='w-16 h-4 bg-gray-300 rounded shine'></div>
                    <div className='w-12 h-4 bg-gray-300 rounded shine'></div>
                  </div>
                  <div className='flex items-center text-gray-500 text-xs w-full justify-between dark:text-gray-100'>
                    <div className='flex items-center gap-1 hover:text-cyan-700'>
                      <div className='w-8 h-4 bg-gray-300 rounded shine'></div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-2 w-8 h-4 bg-gray-300 rounded shine'></div>
                    <div className='flex items-center gap-2 w-8 h-4 bg-gray-300 rounded shine'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const LikeCommentShareSkeleton = () => {
  return (
    <div className="sm:mt-32 sm:h-[16rem] flex sm:flex-col gap-6 sm:text-2xl fixed w-full justify-around bottom-0 sm:sticky sm:justify-start sm:w-auto sm:top-32 sm:bottom-32 py-3 sm:py-4 sm:px-2 sm:rounded-lg bg-white sm:bg-gray-100 text-gray-800 bg-opacity-90 z-10 dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gray-400 rounded-full shine"></div>
        <div className="w-10 h-3 bg-gray-400 rounded shine"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gray-400 rounded-full shine"></div>
        <div className="w-10 h-3 bg-gray-400 rounded shine"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gray-400 rounded-full shine"></div>
        <div className="w-10 h-3 bg-gray-400 rounded shine"></div>
      </div>
    </div>
  );
};

export const CategoryListSkeleton = () => {
  return (
    <li>
      <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer bg-gray-400 shine">
        <span className='text-xl'></span>
        <span className="ml-3 font-bold capitalize h-6"></span>
      </div>
    </li>
  );
}