import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// Define the feature type
interface FeatureType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Static data
const staticData = {
  headerImage: 'https://your-image-url.com', // Replace with your image URL or local asset
  title: "Welcome to Courto – Your Ultimate Sports Companion",
  description: "Looking for a place to play or new teammates? Courto connects you to the best courts, turfs, and sports communities in your city. Whether it’s football, cricket, tennis, badminton, or any other sport, Courto makes it easy to book your favorite venues, join matches, and meet like-minded players.",
  features: [
    {
      icon: <FontAwesome name="search" size={24} color="#000" />,
      title: "Find & Book Courts",
      description: "Discover top-rated courts and turfs near you, and book them in just a few clicks."
    },
    {
      icon: <MaterialIcons name="event" size={24} color="#000" />,
      title: "Join Games & Events",
      description: "Join local sports matches, tournaments, and fitness events with ease."
    },
    {
      icon: <FontAwesome name="users" size={24} color="#000" />,
      title: "Build Your Squad",
      description: "Connect with players in your area, create teams, and take your game to the next level."
    },
    {
      icon: <FontAwesome name="line-chart" size={24} color="#000" />,
      title: "Track Your Game Stats",
      description: "Keep an eye on your game history, scores, and achievements all in one place."
    },
    {
      icon: <MaterialIcons name="group-add" size={24} color="#000" />,
      title: "Organize Your Own Matches",
      description: "Set up your own games, invite friends, and manage RSVPs effortlessly."
    },
  ],
  whyChoose: "Courto isn’t just an app – it’s your go-to sports network. With a growing community of passionate players and easy-to-use features, Courto ensures that every game is a win. Book. Play. Connect.",
  footerText: "© 2023 Courto. All rights reserved."
};

// Define the props for LandingPage component
interface LandingPageProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/image.png')} // Replace with the path to your uploaded image
          style={styles.logo}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <Image 
        source={{ uri: staticData.headerImage }} 
        style={styles.headerImage}
      />
      <Text style={styles.title}>{staticData.title}</Text>
      <Text style={styles.description}>{staticData.description}</Text>

      <Text style={styles.sectionTitle}>What You Can Do on Courto:</Text>

      <View style={styles.featuresContainer}>
        {staticData.features.map((feature: FeatureType, index: number) => (
          <Feature 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Why Choose Courto?</Text>
      <Text style={styles.description}>{staticData.whyChoose}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Get Started Today</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>{staticData.footerText}</Text>
    </ScrollView>
  );
};

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <View style={styles.feature}>
    <View style={styles.iconContainer}>
      {icon}
    </View>
    <View style={styles.featureText}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF', // White background for high contrast
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 40, // Adjust height as needed
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#F0F0F0', // Light background for the search icon
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  headerImage: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: '#000', // Black border for the image
    borderWidth: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000', // Black color for title
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333', // Dark grey for description
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000', // Black for section titles
    marginTop: 20,
    marginBottom: 10,
  },
  featuresContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0', // Light grey background for features
    borderRadius: 10,
    shadowColor: '#000', // Shadow for a cool effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // Android shadow effect
  },
  iconContainer: {
    backgroundColor: '#FFFFFF', // White background for icons
    borderRadius: 50,
    padding: 10,
    marginRight: 12,
    borderColor: '#000', // Black border around icons
    borderWidth: 1,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000', // Black for feature titles
  },
  featureDescription: {
    fontSize: 14,
    color: '#555', // Darker grey for descriptions
    marginTop: 4,
  },
  button: {
    backgroundColor: '#000', // Black button background
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff', // White text for the button
    fontWeight: '700',
    fontSize: 18,
  },
  footer: {
    fontSize: 12,
    color: '#777', // Light grey for footer
    textAlign: 'center',
    marginTop: 30,
  },
});

export default LandingPage;
