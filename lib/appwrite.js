import { Platform } from "react-native";
import { Account, Client, Avatars, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sena.edu.co.ndaza884',
    projectId: '66c5060a00277ea5e883',
    databaseId: '66c509ef001bdc955ce0',
    userCollectionId: '66c50a3200115e0b5a15',
    videoCollectionId: '66c50a7d001c62b77a8d',
    storageId: '66c50d2a00326ac3d78f'
};


const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform);  

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Registrar usuario
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw new Error("No se pudo crear la cuenta.");

        const avatarUrl = avatars.getInitials(username);

  
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password); 
        return session;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;
        return currentUser.documents[0];
    }catch (error) {
        console.log(error)
    }
}