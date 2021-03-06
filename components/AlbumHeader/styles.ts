import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 5
  },
  creator: {
    color: 'lightgray',
    margin: 5,
    fontSize: 15,
  },
  likes: {
    color: 'lightgray',
    margin: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#1CD05D',
    height: 50,
    width: 150,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default styles;