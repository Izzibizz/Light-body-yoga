import { Header } from "./components/Header"
import { MainRoutes } from "./routes/MainRoutes";
import { VideoBg } from "./components/VideoBg";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { CTA } from "./components/CTA"

export const App = () => {

  return (
    <>
    <ScrollToTop />
    <div className="max-w-screen min-h-screen flex flex-col overflow-hidden relative bg-grayBlue font-round font-light">
      <Header />
      <main className="flex-grow mb-20">
      <VideoBg />
        <MainRoutes />
        <CTA/>
      </main>
      <Footer />
    </div>
    </>
  );
};
