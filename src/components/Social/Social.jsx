import intagramPhoto from 'assets/instagram-6860917_1280.webp';
export const Social = () => {
  return (
    <div className="mt-10 flex" style={{ justifyContent: 'center' }}>
      <a href="https://www.instagram.com/yanakorchmeniuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <img style={{ width: 100 }} src={intagramPhoto} alt="insta" />
      </a>
    </div>
  );
};
