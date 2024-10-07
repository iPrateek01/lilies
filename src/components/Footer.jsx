

function Footer() {
  return (
    <>
    <div className="text-white">
      <footer className="footer bg-customFooterColor text-base-content p-10 flex flex-row justify-around  flex-wrap">
        <nav className="">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Install App</h6>
          <a className="link link-hover">
            <img src="./assets/Badges.png" alt="" />
          </a>
        </nav>
      </footer>
      <footer className="footer bg-customFooterColor text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
          © 2024 Lilies, All rights reserved | Made with 💻 in INDIA.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src="./assets/SocialIcons.png" alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
    </>
  );
}

export default Footer;
