import { Platform } from "react-native";
import { Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sena.edu.co.ndaza884',
    projectId: '66c5060a00277ea5e883',
    databaseId: '66c509ef001bdc955ce0',
    userCollectioId: '66c50a3200115e0b5a15',
    videoCollectionId: '66c50a7d001c62b77a8d',
    storageId: '66c50d2a00326ac3d78f'
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('config.endpoint') // Your Appwrite Endpoint
    .setProject('config.projectId') // Your project ID
    .setPlatform('config.platform') // Your application ID or bundle ID.


    const account = new Account(client);
// Register User
export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}
