import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function RecipeScreen() {
  const { recipe } = useLocalSearchParams();
  const data = recipe ? JSON.parse(recipe as string) : null;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  if (!data) {
    return <Text style={{ margin: 20 }}>No se encontró la receta</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.mainImage} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.description}</Text>

      <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={28}
          color={liked ? "red" : "gray"}
        />
        <Text style={[styles.likeText, { color: liked ? "red" : "gray" }]}>
          {liked ? "Guardada" : "Guardar receta"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.counter}>
        {likes} {likes === 1 ? "Like" : "Likes"}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredientes</Text>
        {data.ingredients.map((ing: string, index: number) => (
          <Text key={index}>- {ing}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preparación</Text>
        {data.steps.map((step: string, index: number) => (
          <Text key={index}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, marginTop: 24 },
  mainImage: { width: "100%", height: 200, borderRadius: 8 },
  title: { fontSize: 28, fontWeight: "bold", marginVertical: 8, marginTop: 16 },
  subtitle: { fontSize: 16, color: "gray", marginBottom: 16 },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  likeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  counter: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
});
