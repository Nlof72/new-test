import { IGithubSearchItem } from "../../../../data/repositories/github/interface";

interface IGithubCard extends Pick<IGithubSearchItem, 
'full_name' | 'name' | 'html_url' | 'description' | 'topics' | 'owner' | 'language'
| 'stargazers_count' | 'updated_at' | 'archived'>{

}

export type {
    IGithubCard
}