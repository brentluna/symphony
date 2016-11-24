import $ from 'jquery';

export const fetchProducts = success => (
  $.ajax({
    method: 'get',
    url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
    success, 
    error: () => console.log('Error in fetchAllProducts util')
  });
); 
  



