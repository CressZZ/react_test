import { Link } from '@tanstack/react-router';

export default function Nav() {
  return (
    <div className="p-2 flex gap-2 text-lg">
      <Link to="/" activeProps={{ className: 'font-bold' }}>
        Home
      </Link>{' '}
      <Link to="/list" activeProps={{ className: 'font-bold' }}>
        list
      </Link>{' '}
    </div>
  );
}
