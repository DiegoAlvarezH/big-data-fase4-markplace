// Insertar un nuevo usuario
db.usuarios.insertOne({
    username: "nuevoUsuario",
    email: "nuevoUsuario@example.com",
    password: "hashed_password",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "comprador"
  });
  
  // Seleccionar todos los usuarios
  db.usuarios.find();
  
  // Actualizar el precio de un producto
  db.productos.updateOne(
    { sku: "ABC123" },
    { $set: { price: 30.00 } }
  );
  
  // Eliminar un usuario
  db.usuarios.deleteOne({ username: "ana" });
  