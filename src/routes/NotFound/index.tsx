import Header from "../../components/Header";

function NotFound() {

    return (
        <>
            <Header />
            <main>
                <section className="border-padding">
                    <div className="container mt20">
                        <h2>Não encontrado!</h2>
                    </div>
                </section>
            </main>
        </>
    );
}

export default NotFound