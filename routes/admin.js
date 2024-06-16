router.post('/screen', async (req, res) => {
  const { screenName, totalSeats } = req.body;
  const newScreen = new Screen({ screenName, totalSeats });
  await newScreen.save();
  res.status(201).send('Screen created');
});

router.get('/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('user').populate('movie');
  res.json(bookings);
});
