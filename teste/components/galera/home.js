import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Essa é a home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('coffees')}
      />
    </View>
  );
};

export default Home;