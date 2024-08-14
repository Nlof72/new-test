import { intlFormat } from "date-fns";
import { StarIcon } from "../assets/svg/icons/star-icon";
import { IGithubCard } from "./interface";


export const GithubReositoryCard = ({
    html_url,
    full_name,
    description,
    topics,
    owner,
    language,
    stargazers_count,
    updated_at,
    archived
}: IGithubCard) => {

    return (
        <div className="border-[#30363d] border p-4 rounded-md flex flex-col gap-2">
            <div className="flex flex-row gap-3 items-center">
                <img className="w-5 h-5 object-cover rounded" src={owner.avatar_url} alt="avatar" />
                <a className="text-blue-500" href={html_url} target="_blank" rel="noreferrer">
                    {full_name}
                </a>
                {
                    archived === true && <div
                        className="rounded-xl border border-[#9e6a03] px-[7px] py-1 text-[#d29922] text-xs"
                    >
                        Public archive
                    </div>
                }
            </div>

            <p className="text-stone-100 line-clamp-3 text-ellipsis">{description}</p>
            <div className="flex flex-row gap-2">
                {topics.slice(0, 3).map(item => (
                    <div key={item} className="text-[#2f81f7] bg-[rgba(56,139,253,0.1)] rounded-[2em] px-[10px] py-1 text-xs">
                        {item}
                    </div>
                ))}
            </div>
            <div className="flex flex-row text-[#848d97] text-xs gap-3">
                <div className="flex flex-row items-center gap-2">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#3178c6]" />
                    <p >{language}</p>
                </div>
                <div >|</div>
                <div className="flex flex-row gap-1 items-center">
                    <StarIcon />
                    <p>{stargazers_count}</p>
                </div>
                <div >|</div>
                <div>
                    {`Updated on ${intlFormat(updated_at, {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }, {
                        locale: 'en-EN',
                    })}`}
                </div>
            </div>
        </div>
    )
}

