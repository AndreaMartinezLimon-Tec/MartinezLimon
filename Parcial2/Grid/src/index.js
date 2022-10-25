new gridjs.Grid({
    columns: ['id Ingrediente','Nombre', 'Existencias', 'Existencias Minimas'],
    server: {
      url: 'http://localhost:8082/ingrediente',
      then: data => data.map(ingre => 
        [ingre.id_Ingrediente, ingre.Nombre, ingre.Existencias, ingre.Existencias_Minimas]
      )
    } 
}).render(document.getElementById("wrapper"));