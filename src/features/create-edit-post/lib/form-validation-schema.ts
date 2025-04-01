import * as Yup from 'yup';

export const FORM_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Заголовок должен содержать не менее 10 символов')
    .required('Заголовок обязательно для заполнения'),
  text: Yup.string()
    .min(200, 'Текст должен содержать не менее 200 символов')
    .required('Текст обязателен для заполнения'),
});
