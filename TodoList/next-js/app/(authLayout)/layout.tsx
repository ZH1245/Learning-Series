import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

type Props = { children: React.ReactNode };
function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-[inherit]">
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow p-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
