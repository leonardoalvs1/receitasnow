import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  noRecipeContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecipeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  recipeContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30, // Espaço no final
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
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
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
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
    lineHeight: 24, // Melhora a legibilidade de textos longos
    color: '#333',
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 15,
    color: '#444',
    marginBottom: 3,
  },
  youtubeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  youtubeLink: {
    color: '#0000FF', // Azul para links
    fontSize: 16,
    textDecorationLine: 'underline', // Sublinhado
    marginTop: 5,
  },
});

export default styles;