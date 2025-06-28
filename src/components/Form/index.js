import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ResultRECEITASNEW({ recipe }) {
  // Verifica se não há receita, caso o componente seja renderizado sem dados
  if (!recipe) {
    return (
      <View style={styles.noRecipeContainer}>
        <Text style={styles.noRecipeText}>Nenhuma receita carregada. Clique em "Gerar Nova Receita"!</Text>
      </View>
    );
  }

  // Se houver receita, exibe os detalhes
  return (
    <ScrollView style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>

      {recipe.strMealThumb && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
        </View>
      )}

      {/* Ingredientes */}
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      {/* A API TheMealDB tem até 20 pares de ingrediente/medida */}
      {[...Array(20)].map((_, i) => {
        const ingredientKey = `strIngredient${i + 1}`;
        const measureKey = `strMeasure${i + 1}`;
        const ingredient = recipe[ingredientKey];
        const measure = recipe[measureKey];

        // Só renderiza se o ingrediente existir e não for uma string vazia
        if (ingredient && ingredient.trim() !== '') {
          return (
            <Text key={i} style={styles.ingredientText}>
              • {ingredient} - {measure ? measure : 'a gosto'}
            </Text>
          );
        }
        return null;
      })}

      {/* Instruções */}
      <Text style={styles.sectionTitle}>Instruções:</Text>
      <Text style={styles.instructionsText}>{recipe.strInstructions}</Text>

      {/* Opcional: Link do YouTube, se existir */}
      {recipe.strYoutube && recipe.strYoutube.trim() !== '' && (
        <View style={styles.youtubeContainer}>
          <Text style={styles.sectionTitle}>Vídeo de Preparo:</Text>
          <TouchableOpacity onPress={() => Linking.openURL(recipe.strYoutube)}>
            <Text style={styles.youtubeLink}>Assista no YouTube</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}