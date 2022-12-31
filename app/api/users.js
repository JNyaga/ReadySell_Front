import client from "./client";
/* To register new users */

const register = (userInfo) => client.post("/users", userInfo);

const updateUserImage = (image, onUploadProgress) => {
    const data = new FormData()
    data.append('image', {
        name: 'profile_image',
        type: 'Image/jpeg',
        uri: image
    })

    return client.put('/user/image', data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
    })
}

export default {
    register,
    updateUserImage,
}