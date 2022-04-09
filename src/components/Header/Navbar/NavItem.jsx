import { useRouter } from 'next/router';

function NavItem({ path, name, iconName }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  return (
    <li style={{ cursor: 'pointer' }}>
      <a onClick={handleClick}>
        <i className={iconName} />
        {' '}
        {name}
      </a>
    </li>
  );
}

export default NavItem;
