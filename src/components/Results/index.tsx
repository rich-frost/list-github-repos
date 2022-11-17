import { SearchEdge } from '../../types/search';
import Repositories from '../Repositories';
import ResultsInfo from '../ResultsInfo';

type ResultsProps = {
  count: number;
  topic: string;
  data: SearchEdge[];
};

// TODO a little worried we're getting into prop drilling here, maybe better to use useContext to handle global settings
export default function Results({ count, topic, data }: ResultsProps) {
  return (
    <>
      <ResultsInfo {...{ count, topic }} />
      <Repositories {...{ data }} />
    </>
  );
}
