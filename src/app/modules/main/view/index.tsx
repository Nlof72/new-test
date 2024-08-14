import { GithubReositoryCard } from "../../../ui/card";
import { useMainPagePresenter } from "../presenter";

const MainPage = () => {
    const {
        localData,
        hasMore,
        isLoading,
        sentryRef,
        totalCount
    } = useMainPagePresenter()
    return (
        <div className="px-4 py-5 flex flex-col gap-3 min-h-screen">
            <div className={`flex flex-col gap-3 bg-slate-950 ${localData.length > 0 && 'sticky top-0 pb-2 pt-2'}`}>
                <h1 className="text-[#e6edf3] text-xl">Repositoeies with TypeScript</h1>
                <div className="text-[#e6edf3] text-lg">{`${totalCount.toLocaleString()} results`}</div>
            </div>
            {
                localData.length > 0 ? <div className="overflow-auto">
                <div className="flex flex-col gap-3">
                    {
                        localData?.map(item => {
                            return <GithubReositoryCard {...item} />
                        })
                    }
                </div>
                {
                    hasMore && !isLoading && <div className="text-stone-300" ref={sentryRef}>
                        ...
                    </div>
                }
            </div> : <div className="text-[#e6edf3] text-xl h-full w-full flex flex-col justify-center m-auto items-center">
                wait for a minute to update githab api limit and press f5
            </div>
            }

        </div>
    );
};

export default MainPage;