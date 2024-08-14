import { axiosConfig } from "../../../domain/base";
import { ISearchRepositoryParams } from "../../../domain/github/interfaces/port";
import { IGithubSearchResponse } from "./interface";


export const githubRepositories = {
    async searchRepositories ({page}:ISearchRepositoryParams) {
        return await (axiosConfig.get<IGithubSearchResponse>(
            `/search/repositories?q=language:TypeScript&sort=stars&order=desc&page=${page}&per_page=15`
        ))
        .then(res => res.data)
    }
}