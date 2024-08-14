import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { githubRepositories } from "../../../../data/repositories/github"
import { ISearchRepositoryParams } from "../../interfaces/port"
import { IGithubSearchResponse } from "../../../../data/repositories/github/interface"
import { QueryKeys } from "../../../../data/common/enums"


export const useGetSearchRepositoryData = (port: ISearchRepositoryParams): UseQueryResult<IGithubSearchResponse, Error> => {

    const execute = async (): Promise<IGithubSearchResponse> => {
        return githubRepositories.searchRepositories(port)
    }

    return useQuery({
        queryFn: execute, queryKey: [QueryKeys.getSearchRepository, port],
        retryDelay: 15 * 1000,
        staleTime: 5 * 60 * 1000,
        retry: 5
    })
}