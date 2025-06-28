import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import Title from './src/components/Title'; // Importa o componente Title
//import ResultRECEITASNEW from './src/components/ResultRECEITASNEW';

export default function App() {
  const [recipe, setRecipe] = useState(null); // Estado para armazenar os dados da receita
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  // Função para buscar uma receita aleatória da API
  const fetchRandomRecipe = async () => {
    setLoading(true); // Indica que o carregamento começou
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();

      // A API TheMealDB retorna um array 'meals', mesmo que seja apenas 1 receita
      if (data && data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]); // Pega a primeira (e única) receita do array
      } else {
        setRecipe(null); // Nenhuma receita encontrada
      }
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
      setRecipe(null); // Limpa a receita em caso de erro
    } finally {
      setLoading(false); // Indica que o carregamento terminou
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={fetchRandomRecipe} // Chama a função ao clicar no botão
          disabled={loading} // Desabilita o botão enquanto carrega
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" /> // Exibe um indicador de carregamento
          ) : (
            <Text style={styles.buttonText}>Gerar Nova Receita</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Aqui é onde o ResultRECEITASNEW será renderizado */}
      {recipe && (
        <View style={styles.recipeDisplayArea}>
          <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
          {recipe.strMealThumb && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
            </View>
          )}
          {/* Instruções */}
          <Text style={styles.sectionTitle}>Instruções:</Text>
          <Text style={styles.instructionsText}>{recipe.strInstructions}</Text>

          {/* Ingredientes (um loop mais detalhado será feito no ResultRECEITASNEW) */}
          <Text style={styles.sectionTitle}>Ingredientes:</Text>
          {Object.keys(recipe).map(key => {
            if (key.startsWith('strIngredient') && recipe[key]) {
              const ingredientNumber = key.replace('strIngredient', '');
              const measureKey = `strMeasure${ingredientNumber}`;
              const ingredient = recipe[key];
              const measure = recipe[measureKey];
              return (
                <Text key={key} style={styles.ingredientText}>
                  {ingredient} - {measure}
                </Text>
              );
            }
            return null;
          })}
        </View>
      )}

      {!recipe && !loading && (
        <Text style={styles.initialMessage}>Clique no botão para carregar uma receita!</Text>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Um cinza claro de fundo
    paddingTop: 50, // Espaçamento superior para não colar na barra de status
    paddingHorizontal: 20, // Espaçamento horizontal
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', // Verde vibrante
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 200, // Largura mínima do botão
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  initialMessage: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#666',
  },
  recipeDisplayArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  recipeImage: {
    width: '100%', // Ocupa a largura total do container
    height: 200,    // Altura fixa
    borderRadius: 8,
    resizeMode: 'cover', // Garante que a imagem cubra a área
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#555',
  },
  instructionsText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  ingredientText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 3,
  },
});