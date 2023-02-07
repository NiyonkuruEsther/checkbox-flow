// function fetchProduct(productId, ((error, data) => {
//     if (error) {
//         // Handle the error
//     } else {
//         // Make something with your data
//     }
// }))

const fetchProductAsPromise = promisify(fetchProduct);

// Now you got a function `fetchProductAsPromise`
// that returns a promise
fetchProductAsPromise(productId)
  .then((data) => {})
  .catch((error) => {});
