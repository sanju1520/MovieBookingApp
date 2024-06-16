router.post('/send-confirmation', (req, res) => {
  const { email, bookingDetails } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Booking Confirmation',
    text: `Your booking for ${bookingDetails.movieTitle} on ${bookingDetails.showtime} is confirmed. Seats: ${bookingDetails.seats}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send(error.toString());
    res.status(200).send('Confirmation email sent');
  });
});
