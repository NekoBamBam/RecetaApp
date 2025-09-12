import { Ionicons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, Platform } from "react-native";

export default function TabLayout() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    if (Platform.OS !== "android") return;
    async function hideNavBar() {
      try {
        await NavigationBar.setBehaviorAsync("overlay-swipe");
        await NavigationBar.setVisibilityAsync("hidden");
        console.log("NavigationBar hidden");
      } catch (e) {
        console.log("NavigationBar error:", e);
      }
    }

    hideNavBar();
    const sub = AppState.addEventListener("change", (nextState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextState === "active"
      ) {
        hideNavBar();
      }
      appState.current = nextState;
    });

    return () => {
      sub.remove();
    };
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fcd5b5",
        tabBarStyle: {
          backgroundColor: "#D94F04",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 6,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipe"
        options={{
          title: "Receta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
