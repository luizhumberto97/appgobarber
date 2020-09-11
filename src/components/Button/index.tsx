import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText} from './styles';

interface ButtonProps extends RectButtonProperties {
  /* Forçamos o children  ser um texto, e não obrigatorio */
  children: string;
}

// o children sempre é um texto
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // todas as propriedades que não é children, é o resto e vai para o container
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
