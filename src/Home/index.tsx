import { StyleSheet, SafeAreaView, Text, View, ScrollView} from 'react-native';
import TopHome from '../Components/TopHome';
import BannerPromotion from '../Components/BannerPromotion';
import Items from '../Components/Items';
import Banner from '../Components/Banner';

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <TopHome/>
      <ScrollView 
        style={styles.scrool} 
        overScrollMode='never'
        centerContent={true}
        >
          <BannerPromotion/>
          <Items/>
          <Banner/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scrool: {
    marginTop: 70,
  }
});
