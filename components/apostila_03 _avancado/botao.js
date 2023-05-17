import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Botão({ sinal}){
    return(
        <TouchableOpacity 
        style={styles.button,styles.botaoSinal}
      >
      <Text style={styles.textButton}>{sinal}-</Text>
      </TouchableOpacity>
    );
}

export default Botão;