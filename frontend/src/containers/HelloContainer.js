import { useHelloMessage } from '../hooks/useHelloMessage';
import { HelloView } from '../components/HelloView';

export function HelloContainer() {
  const { message, error, loading } = useHelloMessage();
  return <HelloView message={message} error={error} loading={loading} />;
}

export default HelloContainer;