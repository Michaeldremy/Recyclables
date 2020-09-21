import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", title.price);
  data.append("categoryId", title.category.value);
  data.append("description", title.description);

  listing.images.forEach(image, (index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
