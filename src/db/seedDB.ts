import { Note } from '../modules/notes/models/note.model';
import { notesSeedData } from './seeds/notesSeedData';
import sequelizeInstance from './../common/instances/sequelizeInstance';

const seedDatabase = async () => {
  try {
    await sequelizeInstance.authenticate();
    sequelizeInstance.addModels([Note]);
    await sequelizeInstance.sync({ force: true });
    await Note.bulkCreate(notesSeedData as Note[]);
    console.log('Seeding complete.');
  } catch (error) {
    console.error('Unable to seed the database:', error);
  }
};

seedDatabase();
