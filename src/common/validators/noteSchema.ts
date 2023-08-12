import * as yup from 'yup';
import { NoteCategory } from '../constants/common.constants';

const noteSchema = yup.object().shape({
  name: yup.string(),
  category: yup.string().oneOf(Object.values(NoteCategory)),
  dates: yup.array().of(yup.string()),
  content: yup.string(),
  isArchived: yup.boolean(),
});

export default noteSchema;
