import { FC } from "react"
import Loading from "./components/Loading"
import { useApi } from "./hooks/useApi"
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./components/Card";

const App: FC = () => {
  const {  error, fetchNextPage, status, hasNextPage, characters  } = useApi();
  
  return (
    <>
      <InfiniteScroll 
        dataLength={characters ? characters.results.length: 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loading />}
      >
        <div>
        {
          characters && characters.results.map(character => (
            <Card 
              key={character.id} 
              id={character.id}
              image={character.image} 
              name={character.name} 
              status={character.status}
              species={character.species}
              episode={character.episode}
            />
          ))
        }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default App
