import Image from './Image';

const imageUrlList = [
  '/images/1.png',
  '/images/2.png',
  '/images/1.png',
  '/images/2.png',
  '/images/1.png',
  '/images/2.png',
];

const ImageList = () => {
  return (
    <div className="py-4">
      <div className="flex select-none">
        <h2 className="font-bold">Images</h2>
        <p className="px-2 grow text-4 text-concrete">(12 Files)</p>
        <span className="w-5 h-5 inline-flex bg-arrow bg-center bg-no-repeat cursor-pointer"></span>
      </div>
      <div className='py-4 flex flex-wrap gap-1'>
        {imageUrlList.map((imageUrl, index) => (
          <Image key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
