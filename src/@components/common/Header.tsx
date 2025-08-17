"use client";

import Button from "@/@components/ui/Button";
import { useState } from "react";
// Removed old local logos in favor of cloud kitchen remote logo
import { ChevronDown, ShoppingCart, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "../ui/Modal";
import SectionLayout from "./SectionLayout";

export default function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);

  const isAuth = status === "authenticated" && !!session?.user?.email;

  return (
    <div className="fixed w-full bg-white shadow-md z-[999] min-h-20">
      <SectionLayout className=" min-h-20 flex flex-col justify-center items-center">
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <div className="!h-[80px]">
            <Link href="/" aria-label="Go to Home">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Cloud Kitchen Logo"
                className="!h-[80px] py-2.5 object-contain"
                height={80}
                width={120}
                priority
              />
            </Link>
          </div>

          {/* Right side */}
          {status !== "loading" && (
            <div className="flex items-center gap-4">
              {!isAuth ? (
                <>
                  <Button
                    variant="outlined"
                    className="text-base font-medium py-2 px-6"
                    onClick={() => router.push("/signup")}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className="text-base font-medium py-2 px-6"
                    onClick={() => router.push("/login")}
                  >
                    Log In
                  </Button>

                  {/* Cart Icon */}
                  <button
                    aria-label="View Cart"
                    className="p-2 hover:bg-gray-100 rounded-full"
                    onClick={() => router.push("/cart")}
                  >
                    <ShoppingCart size={24} color="#EA005E" />
                  </button>
                </>
              ) : (
                <>
                  {/* Cart Icon */}
                  <button
                    aria-label="View Cart"
                    className="p-2 hover:bg-gray-100 rounded-full"
                    onClick={() => router.push("/cart")}
                  >
                    <ShoppingCart size={24} color="#EA005E" />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen((open) => !open)}
                      className="flex items-center gap-0.5 p-2 hover:bg-gray-100 rounded-full"
                      aria-label="User Menu"
                    >
                      <User size={24} color="#EA005E" />
                      <p>{session?.user?.firstName}</p>
                      <ChevronDown
                        color="#EA005E"
                        size={24}
                        className={`${menuOpen ? "rotate-180" : ""} transition`}
                      />
                    </button>

                    {menuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                        <Link
                          href="/orders"
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          My Orders
                        </Link>
                        <Link
                          href="/profile"
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          Profile Settings
                        </Link>
                        <Link
                          href="/track-orders"
                          className="block px-4 py-2 hover:bg-gray-50"
                        >
                          Track Orders
                        </Link>
                        <button
                          onClick={() => setLogoutModal(true)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </SectionLayout>
      {logoutModal && (
        <Modal
          open={logoutModal}
          onClose={() => setLogoutModal(false)}
          title=""
          confirmText=""
          cancelText=""
          onConfirm={() => {
            console.log("Confirmed!");
            setLogoutModal(false);
          }}
        >
          <div>
            <p className="text-center text-lg">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center mt-4">
              <Button
                variant="outlined"
                className="mr-2"
                onClick={() => setLogoutModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="filled"
                color="red"
                onClick={() => {
                  signOut();
                  setLogoutModal(false);
                }}
              >
                Log Out
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
