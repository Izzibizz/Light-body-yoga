import { Header } from "./components/Header"
import { MainRoutes } from "./routes/MainRoutes";
import { VideoBg } from "./components/VideoBg";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {

  return (
    <>
    <ScrollToTop />
    <div className="max-w-screen min-h-screen flex flex-col overflow-hidden relative bg-grayBlue">
      <Header />
      <main className="flex-grow mb-20">
      <VideoBg />
        <MainRoutes />
      </main>
      <Footer />
    </div>
    </>
  );
};
