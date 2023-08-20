export const Error = ({ error }: Props) => {
  return (
    <div className='bg-red-500 shadow-xl ring-offset-4 rounded-xl'>
      <p className='text-white p-2 uppercase text-lg font-bold text-center'>{error}</p>
    </div>
  );
};

interface Props {
  error: string;
}
