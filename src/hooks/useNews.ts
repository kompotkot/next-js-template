import { useQuery } from "react-query"
import axios from "axios"

const fetchNews = () => {
    return axios.get("https://api.example.com/news")
}

// {cacheTime: CACHE_TIME, staleTime: STALE_TIME_LONG}
const CACHE_TIME = 60000
const STALE_TIME_LONG = 60000 // How long it will not re-fetch data from server and show stale results

const useNews = (onSuccess, onError) => {
    return useQuery("newsQuery", fetchNews, {
        onSuccess,
        onError,
        select: (data) => {
            const newsTitle = data?.data.news.map((newsItem) => newsItem.title)
            return newsTitle
        },
    })
}

export default useNews
