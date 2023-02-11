import { StyleSheet, SafeAreaView, Text, View} from 'react-native';
import TopHome from '../Components/TopHome';
import BannerPromotion from '../Components/BannerPromotion';
import Items from '../Components/Items';

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <TopHome/>
      <BannerPromotion/>
      <Items/>
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
});
