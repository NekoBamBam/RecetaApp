import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const recipes = [
    {
        id: 1,
        title: "Spaghetti a la Boloñesa",
        description: "Una receta clásica italiana",
        image: "https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg",
        ingredients: [
            "200g de spaghetti",
            "150g de carne picada",
            "1 cebolla",
            "1 lata de tomate",
        ],
        steps: [
            "Hervir la pasta",
            "Cocinar la carne con cebolla",
            "Agregar el tomate y mezclar",
            "Servir con la pasta",
        ],
    },
    {
        id: 2,
        title: "Pastel de Papa",
        description: "Receta de la abuela",
        image: "https://www.cucinare.tv/wp-content/uploads/2018/11/Pastel-de-papas.jpg",
        ingredients: [
            "500g de carne picada",
            "1 kg de papas",
            "1 cebolla",
            "Queso rallado",
        ],
        steps: [
            "Hervir y hacer puré las papas",
            "Cocinar la carne con cebolla",
            "Armar el pastel con carne y puré",
            "Gratinar con queso en el horno",
        ],
    },
    {
        id: 3,
        title: "Pollo al Curry",
        description: "Un plato lleno de sabor y especias",
        image: "https://i.blogs.es/8c3360/pollo_curry/450_1000.jpg",
        ingredients: [
            "2 pechugas de pollo",
            "1 cebolla",
            "200ml de leche de coco",
            "2 cdas de curry en polvo",
        ],
        steps: [
            "Cortar el pollo en cubos",
            "Sofreír la cebolla",
            "Agregar el pollo y el curry",
            "Añadir leche de coco y cocinar",
        ],
    },
    {
        id: 4,
        title: "Tacos de Carne",
        description: "Clásicos tacos mexicanos",
        image: "https://img-global.cpcdn.com/recipes/b50037ff34f1eb55/1200x630cq80/photo.jpg",
        ingredients: [
            "200g de carne picada",
            "8 tortillas de maíz",
            "1 tomate",
            "Queso rallado",
        ],
        steps: [
            "Cocinar la carne con condimentos",
            "Calentar las tortillas",
            "Agregar carne, tomate y queso",
            "Servir con salsa",
        ],
    },
    {
        id: 5,
        title: "Pizza Margarita",
        description: "La pizza italiana más tradicional",
        image: "https://www.clarin.com/img/2023/08/01/SL3EslnOA_1200x630__1.jpg",
        ingredients: [
            "1 base de pizza",
            "150g de mozzarella",
            "1 tomate",
            "Hojas de albahaca fresca",
        ],
        steps: [
            "Colocar la salsa sobre la base",
            "Agregar mozzarella y tomate",
            "Hornear hasta que se derrita el queso",
            "Decorar con albahaca",
        ],
    },
    {
        id: 6,
        title: "Ensalada César",
        description: "Una ensalada fresca y deliciosa",
        image: "https://www.gourmet.cl/wp-content/uploads/2016/09/EnsaladaCesar2.webp",
        ingredients: [
            "Lechuga romana",
            "100g de pollo a la plancha",
            "Picatostes",
            "Aderezo César",
        ],
        steps: [
            "Lavar y cortar la lechuga",
            "Agregar pollo y picatostes",
            "Añadir aderezo César",
            "Mezclar bien y servir",
        ],
    },
    {
        id: 7,
        title: "Sopa de Calabaza",
        description: "Cremosa y reconfortante",
        image: "https://www.infobae.com/resizer/v2/F4EXLIGCKRD5BI7QMNASY3ENKA.jpg?auth=5285225653dc19216a82a91f30c7cb1fe4e15f60c2db15561e2220b64171f1ea&smart=true&width=1200&height=900&quality=85",
        ingredients: [
            "500g de calabaza",
            "1 cebolla",
            "500ml de caldo de verduras",
            "Nata o crema para cocinar",
        ],
        steps: [
            "Cortar y cocinar la calabaza y cebolla",
            "Agregar caldo y hervir",
            "Triturar hasta obtener crema",
            "Añadir nata y servir caliente",
        ],
    },
    {
        id: 8,
        title: "Hamburguesa Casera",
        description: "Un clásico americano hecho en casa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhcT-BjyA24Je1ALyHQsUUn5hTgAh1_t7YA&s",
        ingredients: [
            "200g de carne picada",
            "1 pan de hamburguesa",
            "Lechuga y tomate",
            "Queso cheddar",
        ],
        steps: [
            "Formar la hamburguesa con la carne",
            "Cocinarla en sartén o parrilla",
            "Armar con pan, lechuga, tomate y queso",
            "Servir con papas fritas",
        ],
    },
    {
        id: 9,
        title: "Paella de Mariscos",
        description: "Un plato típico español",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQDMuP2a-xFlgliBp5YHr0qM1TArHtNoHxA&s",
        ingredients: [
            "200g de arroz",
            "150g de mariscos mixtos",
            "1 pimiento rojo",
            "Caldo de pescado",
        ],
        steps: [
            "Sofreír pimiento y arroz",
            "Añadir mariscos y caldo",
            "Cocinar hasta que el arroz esté en su punto",
            "Dejar reposar y servir",
        ],
    },
    {
        id: 10,
        title: "Panqueques con Dulce de Leche",
        description: "Un postre simple y delicioso",
        image: "https://www.clarin.com/img/2023/04/20/FH-fEx20c_1256x620__2.jpg",
        ingredients: [
            "2 huevos",
            "200ml de leche",
            "100g de harina",
            "Dulce de leche",
        ],
        steps: [
            "Mezclar huevos, leche y harina",
            "Cocinar panqueques en sartén",
            "Untar con dulce de leche",
            "Enrollar y servir",
        ],
    },

];


export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Recetas</Text>

            {recipes.map((recipe) => (
                <TouchableOpacity
                    key={recipe.id}
                    style={styles.card}
                    onPress={() =>
                        router.push({
                            pathname: "/recipe",
                            params: { recipe: JSON.stringify(recipe) },
                        })
                    }

                >
                    <Image source={{ uri: recipe.image }} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{recipe.title}</Text>
                    <Text style={styles.cardDesc}>{recipe.description}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#F29325", flex: 1, padding: 24 },
    header: {
        fontSize: 24,
        marginBottom: 16,
        marginTop: 24,
        textAlign: 'center',
        backgroundColor: '#D94F04',
        color: '#fff'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardTitle: { fontSize: 18, fontWeight: 'bold' },
    cardDesc: { fontSize: 14, color: 'gray' },
});
