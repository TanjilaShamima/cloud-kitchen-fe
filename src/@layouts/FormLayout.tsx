interface FormLayoutProps {
  children: React.ReactNode;
}
export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <div className="bg-white rounded-xl h-full container m-auto overflow-auto relative">
      {children}
    </div>
  );
}
