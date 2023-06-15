import Card from './Card';
import Usecounter from './hooks/use-cutom';
const ForwardCounter = () => {
  const counter = <Usecounter />
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
