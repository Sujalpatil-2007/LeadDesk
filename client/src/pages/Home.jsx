import Footer from "../components/Footer";
import LeadForm from "../components/LeadForm";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Mid section */}
      <main className="bg-slate-50 min-h-40">
        <section className="w-full bg-white px-6 py-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Capture Your
                <span className="text-blue-600"> Business Leads</span>
              </h1>

              <p className="mt-5 text-gray-600 text-lg">
                Easily collect, manage, and organize leads with LeadDesk Mini.
              </p>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
