"use client";
import Footer from "@/@components/common/Footer";
import Header from "@/@components/common/Header";
import SectionLayout from "@/@components/common/SectionLayout";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SectionLayout>
        <div className="pt-[120px]">
          <div className="overflow-clip h-full">
            <div className="container mx-auto h-full py-6">{children}</div>
          </div>
        </div>
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default AuthLayout;
