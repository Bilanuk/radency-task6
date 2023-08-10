import { dateRegex } from 'src/common/constants/common.constants';

const dateParser = (content: string): string[] => {
  const dates = content.match(dateRegex);
  return dates || [];
};

export default dateParser;
