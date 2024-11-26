// Calcular el total de ventas por producto
db.transacciones.aggregate([
    {
      $group: {
        _id: "$productoId",
        totalVentas: { $sum: "$total" },
        cantidadVendida: { $sum: "$cantidad" }
      }
    }
  ]);
  
  // Calcular el promedio de precio de los productos disponibles
  db.productos.aggregate([
    { $match: { quantity: { $gt: 0 } } },
    { $group: { _id: null, promedioPrecio: { $avg: "$price" } } }
  ]);
  