const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});