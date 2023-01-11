import client from "./client";

// get specific user messages from apis
const getMessages = () => client.get("/messages")

const send = (message, listingId) =>
    client.post("/messages", {
        message,
        listingId,
    });

const sendReply = (message, oldMessageId) => client.post("/messages/reply", {
    message,
    oldMessageId,
})

const deleteMessage = (id) => client.delete(`/messages/${id}`)

export default {
    deleteMessage,
    getMessages,
    send,
    sendReply,
};
