import { SearchEdge } from '../../types/search';
import Repositories from '../Repositories';
import ResultsInfo from '../ResultsInfo';

type ResultsProps = {
  count: number;
  topic: string;
  data: SearchEdge[];
};

export default function Results({ count, topic, data }: ResultsProps) {
  return (
    <>
      <ResultsInfo {...{ count, topic }} />
      <Repositories {...{ data }} />
    </>
  );
}
