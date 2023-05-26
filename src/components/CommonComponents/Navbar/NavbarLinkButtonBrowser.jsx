import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LinkButtonBrowser({ children, to }) {
  return (
    <Button variant="ghost">
      <Link to={to}>{children}</Link>
    </Button>
  );
}
