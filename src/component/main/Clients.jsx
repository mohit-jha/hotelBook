import React from "react";

const ClientLogo = ({ imageSrc, altText }) => {
  return (
    <div>
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

const ClientSection = () => {
  const clientLogos = [
    { id: 1, imageSrc: "https://booking.webestica.com/assets/images/client/01.svg", altText: "Client 01" },
    { id: 2, imageSrc: "https://booking.webestica.com/assets/images/client/02.svg", altText: "Client 02" },
    { id: 3, imageSrc: "https://booking.webestica.com/assets/images/client/03.svg", altText: "Client 03" },
    { id: 4, imageSrc: "https://booking.webestica.com/assets/images/client/04.svg", altText: "Client 04" },
    { id: 5, imageSrc: "https://booking.webestica.com/assets/images/client/05.svg", altText: "Client 05" },
    { id: 6, imageSrc: "https://booking.webestica.com/assets/images/client/06.svg", altText: "Client 06" },
  ];

  return (
    <section>
      <div className="client_sec_container">
        {clientLogos.map((client) => (
          <ClientLogo key={client.id} imageSrc={client.imageSrc} altText={client.altText} />
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
