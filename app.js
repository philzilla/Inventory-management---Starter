// Categories list
  const categoriesList = ['Vegetable', 'Meat', 'Fish', 'Fruit'];

  // DOM : access to the ID category element quickly
  const category = document.getElementById('category');
  
  
  categoriesList.forEach((item) => {
    // 1 // console.log(item);

    // 2 // console.log(`<option>${item}</option>`);
    
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    category.add(option);
  })
  