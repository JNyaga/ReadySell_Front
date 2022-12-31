import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView, Text } from "react-native";

import Listitem from "../components/ListItem";
import Listitemseparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Listitemdeleteaction from './../components/ListItemDeleteAction';
import messagesApi from "../api/messages";
import useApi from './../hooks/useApi';



const Messagescreen = ({ navigation }) => {
    // const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const { data: messages, error, loading, request: loadMessages } = useApi(messagesApi.getMessages)
    // console.log(messages[0])

    useEffect(() => {
        loadMessages()
    }, [])

    const handleDelete = async (messageId) => {
        const messageDeleted = await messagesApi.deleteMessage(messageId)
        // console.log(messageDeleted)
        loadMessages()

    }
    const renderItem = ({ item }) => {
        return (
            <>
                <Listitem
                    title={item.fromUserId.name.toUpperCase()}
                    subTitle={item.content}
                    imageUrl={item.fromUserId
                        .image.url}
                    thumbnailUrl={item.fromUserId.image.thumbnailUrl}
                    onPress={() => navigation.navigate("ReplyMessage", item)}
                    rightSwipeActions={() => <Listitemdeleteaction onPress={() => handleDelete(item._id)} />}
                />
            </>
        );
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message._id.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={Listitemseparator}
                refreshing={refreshing}
                onRefresh={() => {
                    loadMessages()
                }}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default Messagescreen;
