import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxTitle: {
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente (se houver espaço)
    paddingVertical: 10, // Espaçamento interno vertical
  },
  textTitle: {
    color: '#FF6347', // Uma cor laranja avermelhada (Tomato)
    fontSize: 28, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

export default styles;