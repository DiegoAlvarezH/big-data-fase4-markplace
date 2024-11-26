// Filtrar productos con precio menor a 30
db.productos.find({ price: { $lt: 30 } });

// Buscar usuarios con rol "vendedor"
db.usuarios.find({ role: "vendedor" });
