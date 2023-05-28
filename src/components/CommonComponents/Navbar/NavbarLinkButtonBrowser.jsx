import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LinkButtonBrowser({ children, to, ...props }) {
  return (
    <Button variant="ghost" {...props}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
