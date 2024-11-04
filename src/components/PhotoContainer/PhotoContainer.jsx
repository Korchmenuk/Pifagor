import photo from 'assets/photo_2024-11-04_20-34-51-removebg-preview.png';

export const PhotoContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="mt-10"
    >
      <img
        style={{
          width: 122,
          height: 109,
          borderRadius: '50%',
          backgroundColor: 'gray',
        }}
        src={photo}
        alt="photo-img"
      />
    </div>
  );
};
