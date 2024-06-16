router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});
