import { useState, useEffect, LegacyRef } from "react"
import useInfiniteScroll from "react-infinite-scroll-hook"
import { IGithubSearchItem } from "../../../../data/repositories/github/interface"
import { useGetSearchRepositoryData } from "../../../../domain/github/use-case/get-search-repositories"

interface IUseMainPagePresenter{
    localData: IGithubSearchItem[]
    hasMore: boolean
    isLoading: boolean
    sentryRef: LegacyRef<HTMLDivElement>
    totalCount: number
}

export const useMainPagePresenter = ():IUseMainPagePresenter => {
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [localData, setLocalData] = useState<IGithubSearchItem[]>([])
    const { data, isLoading } = useGetSearchRepositoryData({ page })
    const [sentryRef] = useInfiniteScroll({
      loading: isLoading,
      hasNextPage: hasMore,
      onLoadMore: () => {
        setPage(prevState => {
          console.log(prevState);
  
          return prevState + 1
        })
      },
      disabled: !hasMore,
      rootMargin: '0px 0px 800px 0px',
    });
  
    useEffect(() => {
      if (data) {
        setLocalData((prevState) => [...prevState, ...data.items])
        setTotalCount(data.total_count)
        setHasMore(localData.length < data.total_count)
      }
  
    }, [data])
    
    return {
        totalCount,
        localData,
        sentryRef,
        hasMore,
        isLoading
    }
}