import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextInput from './AppTextInput';


const SearchBarTest = ({ onChangeText, searchText }) => {
    return (
        <View>

            <AppTextInput
                placeholder="Search Listing..."
                icon={'magnify'}
                onChangeText={onChangeText}
                value={searchText}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBarTest;
