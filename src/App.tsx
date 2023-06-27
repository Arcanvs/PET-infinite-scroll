import { FC } from "react"
import Loading from "./components/Loading"
import { useApi } from "./hooks/useApi"
import InfiniteScroll from 'react-infinite-scroll-component';

const App: FC = () => {
  const {  error, fetchNextPage, status, hasNextPage, characters  } = useApi();
  
  return (
    <>
      Hola mundo
      <InfiniteScroll 
        dataLength={characters ? characters.results.length: 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loading />}
      >
        <div>
        {
          characters && characters.results.map(character => (
            <div key={character.id}>
              <h1>{character.name}</h1>
              <img src={character.image} alt={character.name} />
            </div>
          ))
        }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default App
