import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Response from "../interfaces/response";
import axios from "axios";

export const useApi = () => {
    const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
        ['characters'],
        ({ pageParam = 1 }) =>
          axios
            .get(`https://rickandmortyapi.com/api/character/?page=${pageParam}`)
            .then(res => {
                console.log('MIRA ',res.data)
                return res.data
            }),
        {
          getNextPageParam: (lastPage: Response) => {
            const previousPage = lastPage.info.prev
              ? +lastPage.info.prev.split('=')[1]
              : 0;
            const currentPage = previousPage + 1;
      
            if (currentPage === lastPage.info.pages) return false;
            return currentPage + 1;
          },
        }
    )
    
    const characters = useMemo(() => data?.pages.reduce((prev, page) => {
        console.log(page.results)
        return {
            info: page.info,
            results: [...prev.results, ...page.results]
        }
    }), [data])

    return {
        error, fetchNextPage, status, hasNextPage,
        characters,
        data
    }
}