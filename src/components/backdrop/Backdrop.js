import { StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const Backdrop = ({visible, onClose }) => {

  const handleBackdropPress = () => {
    onClose();
  }

  return (
    <>
      {visible && (
        <TouchableOpacity
          style={styles.backdropContainer}
          onPress={handleBackdropPress}
        >
          <BlurView        
            blurType="light"
            blurAmount={10}
            style={[styles.backdrop]}
          />
        </TouchableOpacity>
      )}
    </>
  )
};

const styles = StyleSheet.create({
  backdropContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    bluRadius: 3,
  },
});

export default Backdrop;
