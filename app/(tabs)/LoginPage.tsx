import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoginPage: React.FC = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Courto</Text>
      <Text style={styles.subTitle}>Your Sports Booking Hub</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#777777"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#777777"
            secureTextEntry
          />
          <FontAwesome
            name="eye"
            size={20}
            color="#777777"
            style={styles.eyeIcon}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton} activeOpacity={0.85}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
        <Text style={styles.socialButtonText}>
          <FontAwesome name="google" size={18} /> Log in with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
        <Text style={styles.socialButtonText}>
          <FontAwesome name="facebook" size={18} /> Log in with Facebook
        </Text>
      </TouchableOpacity>

      {/* Sign Up Section */}
      <Text style={styles.signUpText}>Don't have an account?</Text>
      <TouchableOpacity>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#FFFFFF", // White background
    alignItems: "center",
  },
  title: {
    paddingTop: 30,
    fontSize: 28, // Larger title size
    fontWeight: "900",
    textAlign: "center",
    color: "#000000", // Black text for title
    marginBottom: 8,
    letterSpacing: 1, // Adding letter spacing for a modern feel
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#777777", // Grey subtitle text
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#000000", // Black label text
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#F3F3F3", // Light grey background for inputs
    color: "#000000", // Black text for inputs
    borderColor: "#CCCCCC", // Light grey border
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#000000", // Black text for "Forgot Password?"
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#000000", // Black background for button
    paddingVertical: 14,
    borderRadius: 10, // Rounded button for a modern look
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  loginButtonText: {
    color: "#FFFFFF", // White text for button
    fontWeight: "700",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCCCCC", // Light grey divider
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#777777",
  },
  socialButton: {
    backgroundColor: "#F3F3F3", // Light grey for social buttons
    paddingVertical: 14,
    borderRadius: 10, // Rounded buttons for a modern look
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#000000", // Black text for social buttons
  },
  signUpText: {
    fontSize: 14,
    color: "#777777",
  },
  signUpButton: {
    fontSize: 16,
    color: "#000000", // Black text for sign-up button
    fontWeight: "700",
    marginTop: 5,
  },
});

export default LoginPage;
