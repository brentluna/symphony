# Store Page Demo

This is an example of an e-commerce store's product page. 

## Technologies Used

- JavaScript 
- React.js
- Redux.js
- Ajax 

## Description 

Upon entering the page, I utilized ajax to hit an api and get the product info
for the page. I store that data on the client side using Redux, and render the
page using React Components. 

```
export const fetchProducts = success => (
  $.ajax({
    method: 'get',
    url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
    success, 
    error: () => console.log('Error in fetchAllProducts util')
  })
);
```

I added a "Sort By" feature to the product page that utilizes redux to keep
track of the current "Sort By" method, and sorts the products appropriately.

```
const sortMap = {
  'Price: Low': (a, b) => {
    return Math.sign(a.msrpInCents - b.msrpInCents);
   },
  'Price: High': (a, b) => {
    return Math.sign(b.msrpInCents - a.msrpInCents);
  },
  'Name': (a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }
  
  
}
const mapStateToProps = state => {

  let sortedProducts = []; 
  if (state.products && state.products.products && state.products.products.length) {
    let sortType = sortMap[state.sort];
    sortedProducts = state.products.products.sort(sortType);
  }

  return({
    products: sortedProducts,
    sort: state.sort
  });
}
```

I also added a client side cart, where you can click "Add to Cart" on a product
and it will be viewable via a drop down from the cart icon. I utilized redux to
manage actions to update the cart.


