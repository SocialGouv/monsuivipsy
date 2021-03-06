import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../common/colors';
import InfoSvg from '../../assets/svg/info.svg';
import ArrowUpSvg from '../../assets/svg/arrow-up.svg';

const SurveyExplanation = ({category, explanation}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => setIsFullScreen(!isFullScreen), [
    setIsFullScreen,
    isFullScreen,
  ]);

  if (explanation === null) {
    return null;
  }
  return isFullScreen ? (
    <ScrollView style={styles.fullScreenContainer}>
      <Text style={styles.title}>{category}</Text>
      <Text>{explanation}</Text>
      <Text style={styles.lessButton} onPress={toggleFullScreen}>
        Réduire
      </Text>
    </ScrollView>
  ) : (
    <View>
      <TouchableOpacity style={styles.arrowUp} onPress={toggleFullScreen}>
        <ArrowUpSvg color="#26387C" />
      </TouchableOpacity>
      <View style={styles.container}>
        <InfoSvg />
        <View paddingLeft={10} style={styles.textContainer}>
          <Text style={styles.title}>{category}</Text>
          <Text numberOfLines={5} style={styles.explanation}>
            {explanation}
          </Text>
          <Text style={styles.moreButton} onPress={toggleFullScreen}>
            Afficher la suite
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(38,56,124, 0.03)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(38,56,124, 0.08)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: colors.BLUE,
    paddingBottom: 3,
  },
  textContainer: {
    width: '90%',
  },
  moreButton: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: colors.BLUE,
    paddingTop: 10,
  },
  arrowUp: {
    borderRadius: 20,
    backgroundColor: 'rgba(38,56,124, 0.03)',
    borderColor: 'rgba(38,56,124, 0.08)',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 200,
  },
  fullScreenContainer: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  explanation: {
    textAlign: 'justify',
  },
  lessButton: {
    paddingBottom: 50,
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: colors.BLUE,
    paddingTop: 10,
  },
});

export default SurveyExplanation;
