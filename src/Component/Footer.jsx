const shop = ["All", "Tech and Engineering", "Business", "Science", "Arts"];
const supports = ["Size Guide", "Shipping", "Returns", "FAQs"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">CampusTees</h3>
            <p className="text-gray-400 ">
              Wear Your Identity. Express your department, passion, and
              creativity.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className=" font-bold mb-4 uppercase tracking-wide">Shop</h3>
            <ul className="space-y-2">
              {shop.map((item) => (
                <li key={item}>
                  <a
                    href="/shop"
                    className="text-gray-400 hover:text-white transition "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supports.map((item) => (
                <li key={item}>
                  <a
                    href="/support"
                    className="text-gray-400 hover:text-white transition "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CampusTees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
