import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <main className="content">
            <Header />
            {children} <Footer />
          </main>
        </body>
      </html>
    </>
  );
};

export default Layout;
