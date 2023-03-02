function Footer() {
  return (
    <footer id="footer">
      <p className="main-content">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="integrantes"
          >
            <strong>Integrantes</strong> Diego Cano
            <br /> José Cerna
            <br /> Atzin Cruz
            <br />
            América Susunaga
            <br />
            Ana Paula Martínez
            <br />
            Pablo Pérez
            <br />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Lugar</strong>Aguascalientes, Ags <br />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Equipo</strong> 0-0-48
            <br />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Email</strong> 0048@gmail.com <br />
          </div>
        </div>
      </p>
    </footer>
  );
}

export default Footer;
