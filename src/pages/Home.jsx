import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navbar sticky */}
            <header>
                <Navbar />
            </header>

            {/* Main Content */}
            {/* mt-16 = altura de navbar h-16 para evitar solapamiento */}
            <main className="flex-grow container mx-auto px-4 mt-16">
                <h1 className="text-3xl font-bold my-8">Bienvenido a mi web</h1>
                <p>Agrega tu contenido aquí...</p>
                {/* Aquí puedes agregar más secciones, cards, etc. */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
