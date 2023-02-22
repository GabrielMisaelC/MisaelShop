import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { SafeAreaView, Text, StyleSheet, View, Dimensions, Image } from "react-native";
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

export default function Banner(){

    const DATA = [
        {
          coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
          cornerLabelColor: '#FFD300',
          cornerLabelText: 'GOTY',
        },
        {
          coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
          cornerLabelColor: '#0080ff',
          cornerLabelText: 'NEW',
        },
        {
          coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
          cornerLabelColor: '#2ECC40',
          cornerLabelText: '-75%',
        },
        {
          coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
          cornerLabelColor: '#2ECC40',
          cornerLabelText: '-20%',
        },
      ];

      const renderItem = (data: { coverImageUri: Key | null | undefined; cornerLabelColor: any; cornerLabelText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
        <View
          key={data.coverImageUri}
          style={styles.cardContainer}
        >
          <View
            style={styles.cardWrapper}
          >
            <Image
              style={styles.card}
              source={{ uri: data.coverImageUri }}
            />
            <View
              style={[
                styles.cornerLabel,
                { backgroundColor: data.cornerLabelColor },
              ]}
            >
              <Text style={styles.cornerLabelText}>
                { data.cornerLabelText }
              </Text>
            </View>
          </View>
        </View>
      );

    return(
        <View style={styles.banner}>
            <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={DATA}
            loop
            autoplay
            />
        </View>
    );
}

const styles = StyleSheet.create({
        banner: {
            flex: 1,
            width: '95%',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            marginLeft: 5,
            marginRight: 10,
        },
      cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
      },
      cardWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
      },
      card: {
        width: width * 0.9,
        height: width * 0.5,
      },
      cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
      },
      cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
      },
  });