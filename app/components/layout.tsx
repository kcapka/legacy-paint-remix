import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
    return (
      <>
        <Header />
        <main className="min-h-[100svh]">{children}</main>
        <Footer />
      </>
    );
  };
  