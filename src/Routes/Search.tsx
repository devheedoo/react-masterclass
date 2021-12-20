import { useLocation } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search).get('keyword');
  console.log(params);
  return null;
}
