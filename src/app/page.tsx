export default function Home() {
  return (
    <main className="jp-page">
      <header className="jp-page-header">
        <div className="jp-page-header__copy">
          <p className="jp-eyebrow">Admin</p>
          <h1 className="jp-title">Verwaltung</h1>
        </div>
      </header>
      <section className="jp-section">
        <div className="jp-section__header">
          <h2 className="jp-section__title">Im Aufbau</h2>
        </div>
        <div className="jp-card">
          <p className="m-0 p-[15px] text-[13px] leading-[19px] text-text-secondary">
            Hier entsteht die Verwaltung von jobpilot. Sie arbeitet mit
            derselben Datenbank wie die übrigen Apps.
          </p>
        </div>
      </section>
    </main>
  );
}
