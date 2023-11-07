import File from './File';

const fakeListFiles = ['Content.pdf', 'Branding.pdf', 'Design changes.pdf'];

const ListRecentFiles = () => {
  return (
    <div className="py-4 border-t border-t-light">
      <div className="flex select-none">
        <h2 className="font-bold">Recent Files</h2>
        <p className="px-2 grow text-4 text-concrete">(25 Files)</p>
        <span className="w-5 h-5 inline-flex bg-arrow bg-center bg-no-repeat cursor-pointer"></span>
      </div>
      <div>
        {fakeListFiles.map((file) => (
          <File key={file} filename={file} />
        ))}
      </div>
      <span className='font-medium text-nephritis cursor-pointer select-none'>Show more</span>
    </div>
  );
};

export default ListRecentFiles;
