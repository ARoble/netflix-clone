function Test({ shows }) {
  return (
    <div>
      {shows.map((show) => (
        <h1>{show.name}</h1>
      ))}
      <h1>{shows.score}</h1>
    </div>
  );
}

export default Test;
