import { ValidationError} from 'yup';

interface Errors{
  // Para ser qualquer texto -> o key não quer dizer nada não muda nada -> só colocamos key porque é chave do objeto
  [key:string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors{
  const ValidationErrors: Errors = {};

  err.inner.forEach((error) => {
    ValidationErrors[error.path] = error.message; // aqui pegamos a mensagem do erro

  });

  return ValidationErrors;
}
