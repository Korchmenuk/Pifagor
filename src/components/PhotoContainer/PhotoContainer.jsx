import photo from 'assets/photo_2024-11-05_20-54-24-removebg-preview.png';

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
          width: 120,
          height: 120,
          borderRadius: '50%',
          backgroundColor: 'gray',
        }}
        src={photo}
        alt="photo-img"
      />
    </div>
  );
};
