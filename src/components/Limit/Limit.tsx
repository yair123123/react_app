
interface LimitProps {
  readonly limit: number;
}
const Limit = ({limit}:LimitProps) => (<p>Limit is: {limit}</p>);
export default Limit;