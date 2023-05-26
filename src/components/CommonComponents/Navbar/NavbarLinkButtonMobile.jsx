import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LinkButtonMobile({ onClick, to, children }) {
  return (
    <Button onClick={onClick} w="full" variant="ghost">
      <Link to={to}>{children}</Link>
    </Button>
  );
}
