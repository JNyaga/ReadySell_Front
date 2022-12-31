import client from "./client"

const endpoint = '/listings';

const getListings = () => client.get(endpoint)

const getUserListings = () => client.get("/my/listings")

const addListing = (listing, onUploadProgress) => {
    // senf form data to api
    const data = new FormData()
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) => (data.append('images', {
        name: 'image' + index,
        type: 'Image/jpeg',
        uri: image
    })))

    if (listing.location) {
        data.append('location', JSON.stringify(listing.location))
    }


    return client.post(endpoint, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
        //progress
        // {"isTrusted": false, "lengthComputable": true, "loaded": 1073152, "total": 5760364}
    });


}


export default {
    addListing,
    getListings,
    getUserListings,
};