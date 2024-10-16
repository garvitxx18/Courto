import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export function CustomTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;
  
  // Hide the tab bar if the current route is 'landingPage'
  const shouldHideTabBar = state.routes[state.index].name === 'landingPage';

  if (shouldHideTabBar) {
    return null;
  }

  return <BottomTabBar {...props} />;
}
