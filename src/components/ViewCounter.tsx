import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MyComponent = () => {
  const slug = typeof window !== 'undefined' ? window.location.pathname : '';
  const { data, error } = useSWR(
    slug ? `https://counter-hosenur.deno.dev/?slug=${slug}` : null,
    fetcher
  );
  console.log(error)

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <p>read by {data.count} humans</p>
    </div>
  );
};

export default MyComponent;
