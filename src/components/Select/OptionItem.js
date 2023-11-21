import data from './data.json';

const OptionItem = () => {
  return data.map(el => (
    <option key={el.query} value={el.query}>
      {el.query}
    </option>
  ));
};

export default OptionItem;
