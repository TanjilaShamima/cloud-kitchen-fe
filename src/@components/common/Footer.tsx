import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionLayout from "./SectionLayout";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-yellow-50 border-t border-orange-100 mt-auto">
      <SectionLayout className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link
              href="/"
              aria-label="Go to Home"
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Cloud Kitchen Logo"
                height={56}
                width={56}
                className="drop-shadow"
              />
              <span className="text-2xl font-bold text-orange-500 tracking-tight">
                Cloud Kitchen
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Freshly prepared meals crafted by passionate home & cloud chefs.
              Order, enjoy, repeat.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cooks" className="hover:text-orange-500">
                  Order Food
                </Link>
              </li>
              <li>
                <Link
                  href="/signup?cook=true"
                  className="hover:text-orange-500"
                >
                  Become a Chef
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-orange-500">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-orange-500">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition"
              >
                <Facebook color="gray" size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-orange-400 hover:bg-orange-50 transition"
              >
                <Instagram color="gray" size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-orange-100 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Cloud Kitchen. All rights reserved.
        </div>
      </SectionLayout>
    </div>
  );
};

export default Footer;
