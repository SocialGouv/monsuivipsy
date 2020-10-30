import React from 'react';
import Tabs from './tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {surveyData} from '../survey/survey-data';
import SurveyScreen from '../survey/survey-screen';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="tabs" headerMode="none">
      <Stack.Screen name="tabs" component={Tabs} />
      {surveyData.map((surveyItem, index) => (
        <Stack.Screen name={`question-${index}`} key={`question-${index}`}>
          {({navigation}) => (
            <SurveyScreen
              question={surveyData[index].question}
              answers={surveyData[index].answers}
              explanation={surveyData[index].explanation}
              currentSurveyItem={index}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;