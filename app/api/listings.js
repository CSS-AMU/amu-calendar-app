import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
<<<<<<< HEAD
  data.append("title", listing.title);
  data.append("subTitle", listing.subTitle);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
=======
  data.append("id", listing.id);
  data.append("title", listing.title);
  data.append("body", listing.body);
>>>>>>> 68872962a38cb68add2d635195871c64caaa5afc

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
