import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomInput from '../../component/CustomInput';
import styles from '../../theme/screen/Admin/styleAddItem';
import CustomButton from '../../component/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {openDatabase} from 'react-native-sqlite-storage';
import database from '@react-native-firebase/database'
export default function AddItem() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageData, setImageData] = useState(null);
    const [countItem, setCountItem] = useState(0);


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                openGallery();
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const openGallery = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (result.didCancel) {
        } else {
            console.log(result);
            setImageData(result);
        }
    };
    const uploadImage = async () => {
        const reference = storage().ref(imageData.assets[0].fileName);
        const pathToFile = imageData.assets[0].uri;
        // uploads file
        await reference.putFile(pathToFile);
        const url = await storage()
            .ref(imageData.assets[0].fileName)
            .getDownloadURL();
        console.log(url);
        uploadItem(url);
    };

    const uploadItem = () => {
        firestore()
            .collection('items')
            .get()
            .then(querySnapPoint => {
                firestore()
                    .collection('items')
                    .add({
                        id: 'Product_' + querySnapPoint.size,
                        name: name,
                        price: Number(price),
                        description: description,
                        category: category,
                        imageUrl: url + '',
                    })
                    .then(() => {
                        console.log('Item Added');
                    });
            });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {imageData !== null ? (
                    <Image
                        source={{ uri: imageData.assets[0].uri }}
                        style={styles.imageData}
                    />
                ) : null}
                <CustomInput
                    placeholder={'Enter Item Name'}
                    value={name}
                    onChangeText={txt => setName(txt)}
                />
                <CustomInput
                    placeholder={'Enter Item Price'}
                    value={price}
                    onChangeText={txt => setPrice(txt)}
                    keyboardType={'numeric'}
                />
                <CustomInput
                    placeholder={'Enter Item Description'}
                    value={description}
                    onChangeText={txt => setDescription(txt)}
                />
                <CustomInput
                    placeholder={'Enter Item Category'}
                    value={category}
                    onChangeText={txt => setCategory(txt)}
                />
                <CustomInput
                    placeholder={'Enter Item Image URL'}
                    value={imageUrl}
                    onChangeText={txt => setImageUrl(txt)}
                />
                <Text style={styles.orStyle}>OR</Text>
                <TouchableOpacity>
                    <CustomButton
                        text="Pick Image From Gallery"
                        type="SECONDARY"
                        onPress={() => {
                            requestCameraPermission();
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomButton
                        text="Upload Item"
                        type="PRIMARY"
                        onPress={() => {
                            uploadImage();
                        }}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
