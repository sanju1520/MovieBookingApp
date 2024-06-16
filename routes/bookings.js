const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const { movieId, seats, showtime, totalPrice } = req.body;
  const userId = req.user.userId;
  const newBooking = new Booking({ user: userId, movie: movieId, seats, showtime, totalPrice });
  await newBooking.save();
  res.status(201).send('Booking confirmed');
});
