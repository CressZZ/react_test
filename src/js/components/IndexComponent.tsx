import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

export default function Index() {
  // const { data, isFetching, isError, error, isSuccess } = useQuery({
  //   queryKey: ['randomImage'],
  //   queryFn: async () => {
  //     let result;
  //     try {
  //       result = (
  //         await axios.get<{
  //           userId: string;
  //           id: string;
  //           body: string;
  //           title: string;
  //         }>('https://jsonplaceholder.typicode.com/posts/1')
  //       ).data;
  //     } finally {
  //       //
  //     }
  //     return result;
  //   },
  // });
  const { data, isFetching, isError, error, isSuccess } = useEffect(() => {
    console.log(data);
  }, [data]);

  if (isFetching) return 'Loading...';

  if (isError) return 'An error has occurred: ' + error.message;

  if (isSuccess) {
    return (
      <div className="p-2">
        {data.title}
        <h3>Welcome Home!</h3>
      </div>
    );
  }
}
