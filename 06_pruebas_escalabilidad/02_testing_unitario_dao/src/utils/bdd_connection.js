export default startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://FUSSI:fussi0117@cluster0.jmg0aoz.mongodb.net/test?retryWrites=true&w=majority",
    );
    console.log("Conectado a MongoDB");

    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    process.exit(1);
  }
};
