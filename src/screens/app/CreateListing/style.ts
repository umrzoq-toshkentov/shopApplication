import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    padding: 24,
  },
  formItem: {
    marginBottom: 24,
  },
  imageContent: {},
  uploadImageContainer: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
    marginTop: 10,
  },
  uploadWrapper: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: 50,
  },
  upload: {
    width: 19,
    height: 19,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.blue,
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  uploadedImage: {
    position: 'relative',
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  deleteImageContainer: {
    position: 'absolute',

    top: -5,
    right: -5,
  },
  deleteImage: {
    width: 20,
    height: 20,
  },
  imageList: {
    paddingVertical: 10,
  },
  description: {
    minHeight: 150,
    paddingTop: 20,
  },
  button: {
    marginBottom: 100,
  },
});
