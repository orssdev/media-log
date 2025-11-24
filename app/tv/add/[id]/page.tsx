interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params } : PageProps) {
    const { id } = await params;

    return (
        <div className="page">
            <div className="center-div">
                <h1>Product ID: {id}</h1>
            </div>
        </div>
    );
}