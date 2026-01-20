export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } =  await params;

  const url = `https://api.themoviedb.org/3/movie/${id}`;

  const options = {
    method: "GET",
    
    headers: {
      accept: "application/json",
      Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWZhYzQxNzJiYThiOWJhMmNmZWU3YTljZDc4NDYzYiIsIm5iZiI6MTc2ODY1ODg4NS43MjYsInN1YiI6IjY5NmI5N2M1NDkyMjc1YjJkNDhmYzViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_2cCpIDlOhemQPaV906w5W8A2_nPoeMuams47v-pMI",
    }
  }

  const res = await fetch(url, options);
  const movie = await res.json();

  console.log(movie);

  return <div>
    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
  </div>
}