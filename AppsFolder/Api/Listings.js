import client from "./client";

const endPoint = '/listings';

const getListings = () => client.get(endPoint);

const postListings = (listings) => {
  const data = new FormData();
  data.append('title',listings.title);
  data.append('price',listings.price);
  data.append('categoryId',listings.categoryId);
  data.append('description',listings.description);

  listings.images.forEach((image,index) => {
      data.append('images', {
          name: "image" + index,
          type: "image/jpeg",
          uri: image
      })
  });
// data.append('email',listings.email);
// data.append('password',listings.password);

  if(listings.location) {
      data.append('location',JSON.stringify(listings.location))
  }

  return client.post(endPoint,data);
}

export default  {getListings,postListings};

// export default  {getListings};