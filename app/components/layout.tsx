import Header from "./header";

export default function Layout({ children }: any) {
    return (
      <>
        <Header />
        <main className="min-h-[100svh]">{children}</main>
        
      </>
    );
  };
  